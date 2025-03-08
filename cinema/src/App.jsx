import "./App.css"
import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"
import Home from "./Pages/Home"
import Favorites from "./Pages/Favorites"
import Movie from "./Pages/Movie"

function App() {
  return (
    <>
      <Header />

      <Home/>
      {/* <Favorites /> */}
		{/* <Movie/> */}
      <Footer />
    </>
  )
}

export default App
