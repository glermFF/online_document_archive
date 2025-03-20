import React from "react"

import Navbar from "../../components/layout/Navbar"
import HomeComponent from "../../components/home/HomeComponent"
import Footer from "../../components/layout/Footer"

const HomePage = () => {
    return(
        <div>
            <Navbar/>
            <HomeComponent/>
            <Footer/>
        </div>
    )
}

export default HomePage