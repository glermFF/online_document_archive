import React from "react"

import Navbar from "../components/Navbar"
import HomeComponent from "../components/HomeComponent"
import Footer from "../components/Footer"

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