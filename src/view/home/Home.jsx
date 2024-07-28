import React from 'react'
import Menu from '../components/Menu'
import BgImg from '../../assets/bgimg.png'

const Home = () => {
    return (
        <div className="menu-container">
            <div className="overlay">
                {/* <img className='' src={BgImg} alt="" /> */}
                <Menu />
            </div>
        </div>
    )
}

export default Home