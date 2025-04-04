import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

import styles from './UserPage.module.css'

function UserPage() {

    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const storedUserName = localStorage.getItem('userName') || "Usuário Anônimo"; // Exemplo, substitua conforme seu sistema
        setUserName(storedUserName);
    }, []);

    return(
        <div className={styles.userPage}>
            <div className={styles.userContainer}>
                <h1>Olá, {userName}</h1>

                <p>
                    Colabore com o projeto e publique um livro
                </p>

                <p>
                    <button onClick={() => navigate("/addbook")}>
                        Colaborar
                    </button>
                </p>
            </div>
        </div>
    )
}

export default UserPage