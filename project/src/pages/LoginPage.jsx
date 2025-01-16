import React from "react";

import styles from "../css/LoginPage.module.css"
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import LoginForm from "../components/LoginForm";

function LoginPage (){
    return(
        <div>
            <Navbar/>
            <div className={styles.form}>
                <LoginForm/>
            </div>
            <Footer/>
        </div>
    )
}

export default LoginPage