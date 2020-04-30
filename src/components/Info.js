import React from 'react';

const Info = ({ info }) => {


    if (Object.keys(info).length === 0) return null;

    const { strArtistThumb, strGenre, strBiographyES } = info
    return (
        <div class="card" >
            <h5 class="info">Información del artista</h5>
            <img src={strArtistThumb} class="card-img-top" alt="..."></img>
            <div class="card-body">
            <span class="badge badge-primary">Género {strGenre}</span>
                <p class="card-text">{strBiographyES}</p>
            </div>
        </div>
    );
}

export default Info;