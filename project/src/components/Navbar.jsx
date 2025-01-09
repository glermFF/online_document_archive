import React from "react";
import "../css/Navbar.css"

const Navbar = () => {
    return(
        <div className="nav-bar">
            <div className="nav-logo">
                Logo
            </div>
            <div>
                <ul className="nav-menu-1">
                    <li>Home</li>
                    <li>Livros</li>
                    <li>Comunidade</li>
                </ul>
            </div>
            <div>
                <ul className="nav-menu-2">
                    <li>Log in</li>
                    <li>Sign in</li>
                    <li><input type="text" placeholder="Pesquisar..." className="search-bar"/></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar