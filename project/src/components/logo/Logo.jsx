import React from "react";
import logo from "../../assets/logo_rede_saber.png"
import styles from "./Logo.module.css"

const Logo = () =>{
    return(
        <div className={styles.logo}>
            <a href="/"><img src={logo} className={styles.logo_image}></img></a>
        </div>
    )
}

export default Logo