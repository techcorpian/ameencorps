import React from 'react'
import Menu from '../components/Menu'
import HomeContent from '../components/HomeContent'
import About from '../components/About'
import BgImg from '../../assets/bgimg.png'

const Home = () => {
    return (
        <div className="menu-container">
            <div className="overlay p-5 px-6">
                {/* <img className='' src={BgImg} alt="" /> */}
                <div className='h-screen'>
                <Menu />
                <HomeContent />
                </div>
                <About />
            </div>
        </div>
    )
}

export default Home