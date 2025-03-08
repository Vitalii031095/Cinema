import React from 'react'
import MoviesCard from './MoviesCard'

const MoviesList = () => {
  return (
	 <div id="movies" className="movies anchor">
					<MoviesCard/>
					<MoviesCard/>
					<MoviesCard/>
					<MoviesCard/>
					<MoviesCard/>
					<MoviesCard/>
					<MoviesCard/>
			  </div>
  )
}

export default MoviesList