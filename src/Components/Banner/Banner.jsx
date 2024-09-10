import React, { useEffect, useState} from 'react'
import "./Banner.css"
import { baseUrl,API_KEY,imageUrl } from '../Constants/Constants'
import axios from 'axios';

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data);
        setMovie(response.data.results[0])
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);



  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`} }
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_btns'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='desc'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_down"></div>
    </div>
  )
}

export default Banner