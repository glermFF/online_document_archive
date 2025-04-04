import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";
import Logo from "../../components/logo/Logo";
import styles from './Navbar.module.css'


const Navbar = () => {
    
    const[user, setUser] = useState()

    useEffect(() => {
        const storedUser = localStorage.getItem("user")
        if(storedUser){
            setUser(JSON.parse(storedUser))
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("user");  
        setUser(null);               
        navigate("/login");              
    };

    const navigate = useNavigate()

    return(
        <>
            <div className={styles.nav_bar}>
                <Logo/>
                <div>
                    <ul className={styles.account_button}>
                    {user ? (
                            <>
                                <li>
                                    <button onClick={() => navigate("/userpage")}>Minha Conta</button>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>Sair</button>
                                </li>
                            </>
                        ) : (
                            <li>
                                <button onClick={() => navigate("/login")}>Conta</button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className={styles.search_container}>
                <FaSearch className={styles.search_icon}></FaSearch>
                <input type="text" placeholder="Pesquisar..." className={styles.search_bar}/>
            </div>
        </>
    )
}

export default Navbar