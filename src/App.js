import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import axios from 'axios'
import Cancion from './components/Cancion';
import Info from './components/Info';
function App() {

  const [busquedaLetra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState("");
  const [info, guardarInfo] = useState({});

  useEffect(() => {
    if(Object.keys(busquedaLetra).length === 0) return;

    const consultarApiLetra = async ()=>{

      const {artista, cancion} = busquedaLetra
        const url1 = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
        const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

        const [letra, info] = await Promise.all([
          axios(url1),
          axios(url2)
        ])
 

        guardarLetra(letra.data.lyrics)
        guardarInfo(info.data.artists[0])
    }
    consultarApiLetra()
  }, [busquedaLetra, info]);


  return (
    <Fragment>
      <Formulario guardarBusquedaLetra={guardarBusquedaLetra}></Formulario>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
        <Info info={info}></Info>
          </div>
          
          <div className="col-md-6">
            <Cancion letra={letra}></Cancion>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
