import React from "react";
import { FaSearch } from "react-icons/fa";
import styles from '../css/Navbar.module.css'


const Navbar = () => {
    return(
        <div className={styles.nav_bar}>
            <div className={styles.nav_logo}>
                <a href="#">Logo</a>
            </div>
            <div>
                <ul className={styles.nav_menu1}>
                    <li><FaSearch></FaSearch><input type="text" placeholder="Pesquisar..." className={styles}/></li>
                </ul>
            </div>
            <div>
                <ul className={styles.nav_menu2}>
                    <li>Log in</li>
                    <li>Sign in</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar