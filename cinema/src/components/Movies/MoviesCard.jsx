import React from 'react';
import star from '../../assets/icons/star.png'
import movie from '../../assets/ImageFılm.jpg';

const MoviesCard = () => {
  return (
	<a className="movies__card" href="./movie.html">
	<div className="movies__card-rating">
		 <img src={star} alt=""/>
		 <img src={star} alt=""/>
		 <img src={star} alt=""/>
		 <img src={star} alt=""/>
		 <img src={star} alt=""/>
	</div>
	<img src={movie} alt=""/>
</a>
  )
}

export default MoviesCard