import React from "react";
import { FaSearch } from "react-icons/fa";

import styles from '../css/Navbar.module.css'
import Logo from "./Logo";
import LinkPage from "./LinkPage";


const Navbar = () => {
    return(
        <div className={styles.nav_bar}>
            <Logo/>
            <div>
                <ul className={styles.nav_menu1}>
                    <li><FaSearch></FaSearch><input type="text" placeholder="Pesquisar..." className={styles.searc_bar}/></li>
                </ul>
            </div>
            <div>
                <ul className={styles.nav_menu2}>
                <li><LinkPage to="../pages/UserPage" text="User"/></li>
                    {/* 
                    <li><LinkPage to="" text="Log In"/></li>
                    <li><LinkPage to="" text="Sign In"/></li>
                    */}
                </ul>
            </div>
        </div>
    )
}

export default Navbar