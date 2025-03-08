import React from "react"
import titanik from "../assets/videos/Титаник (1997) «Titanic» - Трейлер (Trailer) - Что посмотреть_ (1080p, h264).mp4"

import Video from "../components/Movie/Video"
import MainInfo from "../components/Movie/MainInfo/MainInfo"
const Movie = () => {
  return (
    <main>
      <Video />
      <MainInfo />
    </main>
  )
}

export default Movie
