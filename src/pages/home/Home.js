import React from 'react'
import Header from '../../components/header/Header'
import Search from '../../components/search/Search'
import './Home.css'
const Home = () => {
    return (
        <div className="home">
            <div className="home-header">
                <Header />
            </div>

            <div className="home-body">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>

                <div className="search">
                    <Search  />
                </div>
            </div>

            
        </div>
    )
}

export default Home
