// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Movie from "./Components/movies/Movie";
import Daytrend from "./Components/Daytrend/Daytrend";
import "./App.css"

function App() {

  return (
    <div>
          <Navbar />
          <Banner />
          <Movie />
          <Daytrend />

    </div>
  );
}

export default App
