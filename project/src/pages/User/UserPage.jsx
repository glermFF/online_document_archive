import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import styles from './UserPage.module.css';

function UserPage() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const storedUserName = localStorage.getItem('name');
        const storedEmail = localStorage.getItem('email');
        setUserName(storedUserName);
        setEmail(storedEmail);
    }, []);

    const handleUpdate = () => {
        localStorage.setItem('userName', userName);
        localStorage.setItem('userEmail', email);
        alert("Dados atualizados com sucesso!");
    };

    return (
        <div className={styles.userPage}>
            <div className={styles.userContainer}>
                <h1>Olá, {userName}</h1>

                <div className={styles.section}>
                    <h3>Editar Dados</h3>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Nome"
                        className={styles.input}
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className={styles.input}
                    />
                    <button onClick={handleUpdate}>Atualizar Dados</button>
                </div>

                <hr className={styles.separator} />

                <div className={styles.section}>
                    <h3>Suporte</h3>
                    <p>Precisa de ajuda? <a href="mailto:suporte@exemplo.com" className={styles.link}>Entre em contato</a></p>
                </div>

                <hr className={styles.separator} />

                <div className={styles.section}>
                    <p>Colabore com o projeto e publique um livro</p>
                    <button onClick={() => navigate("/addbook")}>Colaborar</button>
                </div>
            </div>
        </div>
    );
}

export default UserPage;
