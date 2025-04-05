import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import styles from './UserPage.module.css';
import axios from "axios";

function UserPage() {
    const [displayName, setDisplayName] = useState(""); // Nome exibido no <h1>
    const [editName, setEditName] = useState(""); // Nome editável

    const [email, setEmail] = useState("");
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingEmail, setIsEditingEmail] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setDisplayName(parsedUser.name || "");
            setEditName(parsedUser.name || "");
            setEmail(parsedUser.email || "");
        }
    }, []);

    const handleSaveName = async () => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        try {
            const response = await axios.put(`http://localhost:5555/users/${storedUser.id}`, {
                name: editName,
                email: email, // manter o mesmo email
            });
    
            localStorage.setItem('user', JSON.stringify(response.data.user));
            setDisplayName(editName);
            setIsEditingName(false);
            alert("Nome atualizado no banco com sucesso!");
        } catch (err) {
            console.error("Erro ao atualizar nome:", err);
            alert("Erro ao atualizar nome.");
        }
    };
    

    const handleSaveEmail = async () => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        try {
            const response = await axios.put(`http://localhost:5555/users/${storedUser.id}`, {
                name: displayName, // manter o mesmo nome
                email: email,
            });
    
            localStorage.setItem('user', JSON.stringify(response.data.user));
            setIsEditingEmail(false);
            alert("E-mail atualizado no banco com sucesso!");
        } catch (err) {
            console.error("Erro ao atualizar e-mail:", err);
            alert("Erro ao atualizar e-mail.");
        }
    };
    

    return (
        <div className={styles.userPage}>
            <div className={styles.userContainer}>
                <h1>Olá, {displayName}</h1>

                <div className={styles.section}>
                    <h3>Editar Dados</h3>

                    <div style={{ display: "flex", alignItems: "center",}}>
                        <input
                            type="text"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            disabled={!isEditingName}
                            className={styles.input}
                        />
                        <button onClick={isEditingName ? handleSaveName : () => setIsEditingName(true)}>
                            {isEditingName ? "Salvar" : "Editar"}
                        </button>
                    </div>

                    <div style={{ display: "flex", alignItems: "center" }}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={!isEditingEmail}
                            className={styles.input}
                        />
                        <button onClick={isEditingEmail ? handleSaveEmail : () => setIsEditingEmail(true)}>
                            {isEditingEmail ? "Salvar" : "Editar"}
                        </button>
                    </div>
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
