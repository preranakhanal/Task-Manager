import React from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Today  from '../../components/today/Today'




const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className='homeContainer'>
            <div className="upcoming-title">
              <p>Upcoming</p>
              <span>5</span>
            </div>
            <div className="home-top"></div>
            <Today />
            <div className="home-bottom">
              <div className="home-right"></div>
              <div className="home-left"></div>
            </div>
        </div>
    </div>
  )
}

export default Home