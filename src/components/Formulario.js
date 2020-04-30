import React, { useState } from 'react';

const Formulario = ({ guardarBusquedaLetra }) => {



    const [busqueda, guardarBusqueda] = useState({
        artista: " ",
        cancion: " ",
    })
    const [error, guardarError] = useState(false)
    const { artista, cancion } = busqueda;

    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value,
        })
    }
    //consultar apis
    const buscarInformacion = e => {
        e.preventDefault();

        if (artista.trim() === "" || cancion.trim() === "") {
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarBusquedaLetra(busqueda)
    }
    return (

        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <form onSubmit={buscarInformacion}>
                    <h3 className="text-center">Buscador de canciones</h3>
                    <div class="form-row mt-5">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Artista</label>
                            <input type="text" class="form-control"
                                name="artista" placeholder="Nombre del artista"
                                value={artista}
                                onChange={actualizarState}
                            ></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Canción</label>
                            <input type="text" class="form-control "
                                name="cancion" placeholder="Nombre de la canción"
                                value={cancion}
                                onChange={actualizarState}
                            ></input>
                        </div>


                    </div>

                    <div class="row">
                        <div class="col-sm-10">

                            {error ? <div class="alert alert-primary p-1" role="alert">
                                Todos los campos son obligatorios
                            </div> : null}

                        </div>
                        <div class="col-sm-2 ">

                            <button type="submit" class="btn btn-primary float-right">Buscar</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Formulario;