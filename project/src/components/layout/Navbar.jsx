import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";

import styles from '/src/css/Navbar.module.css'
import Logo from "../Logo";


const Navbar = () => {
    const navigate = useNavigate()

    function details(){
        navigate('/user')
    }

    return(
        <div className={styles.nav_bar}>
            <Logo/>
            <div>
                <ul className={styles.nav_menu1}>
                    <li className={styles.nav_menu1_item}><FaSearch></FaSearch></li>
                    <li><input type="text" placeholder="Pesquisar..." className={styles.search_bar}/></li>
                </ul>
            </div>
            <div>
                <ul className={styles.nav_menu2}>
                    <li>
                        <button onClick={details}>
                            Usuario
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar