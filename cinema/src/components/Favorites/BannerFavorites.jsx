import React from 'react';
import imageFon from '../../assets/Blade Runner 2049(2).jpg';

const BannerFavorites = () => {
  return (
	<div className="favorites__banner">
	<div className="gradient__overlay"></div>
	<img src={imageFon} alt="" />
 </div>
  )
}

export default BannerFavorites