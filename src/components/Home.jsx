import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import Thuramukham from './images/Thuramukham.jpg'
import titlez from './images/titlez.png'
import playz from './images/playz.png'
import info from './images/info.png'
import Row from './Row'
import { fetchNetflixOriginals, fetchTopRated, fetchTrending } from './Api'
import Footerr from './Footerr'

export default function Home() {
  return (
    <div className='Homie'>
       <Navbar/>
       <div className="hero">
        <img src={Thuramukham} className='banner-img' alt='thr'/>
        <div className="hero-caption">
          <img src={titlez} className='caption-img' alt='ttl'/>
          <p>A tale of struggles and forgotten history on which the foundation 
            of labour movements was laid,Watch Rajiv Ravi's Thuramukham...
          </p>
          <div className="hero-btns">
            <button className='btn'><img src={playz} width={20} alt=''/>PLAY</button>
            <button className='btn dark-btn'><img src={info}width={20} alt=''/>More Info</button>
          </div>
        </div>
       </div>
        <div style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}>
        <Row title="Netflix Originals" fetchUrl={fetchNetflixOriginals} />
        <Row title="Trending Now" fetchUrl={fetchTrending} />
        <Row title="Top Rated" fetchUrl={fetchTopRated} />
      </div>
       <Footerr/>
    </div>
  )
}
