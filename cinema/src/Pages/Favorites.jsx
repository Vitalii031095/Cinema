import React from "react"
import Filter from "../components/Filter/Filter"
import MoviesList from "../components/Movies/MoviesList"
import MoviesScroll from "../components/MoviesScroll"
import FavoritesList from "../components/Favorites/FavoritesList"

import BannerFavorites from "../components/Favorites/BannerFavorites"

const Favorites = () => {
  return (
    <>
      <BannerFavorites />
      <div className="container">
        <Filter />
        <div className="favorites_movies">
          <FavoritesList />
          <MoviesList />
        </div>
        <MoviesScroll />
      </div>
    </>
  )
}

export default Favorites
