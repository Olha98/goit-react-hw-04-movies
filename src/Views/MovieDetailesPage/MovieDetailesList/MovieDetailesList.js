import React from 'react'





const MovieDetailesList = ({ infoFilm }) => {
  const { backdrop_path, original_title, release_date, overview, popularity, genres } = infoFilm


  return (
    <>
      <div >
        <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} />
        <h2>{original_title}{release_date}</h2>
        <p>User score {popularity}%</p>
        <p>Overview :{overview}</p>
        <p>Overview :{overview}</p>
        <ul>genres....</ul>
      </div>
    </>
  )
}

export default MovieDetailesList