import { useState } from "react";
import { useNavigate } from "react-router";
import { CiUser } from "react-icons/ci";
import { MdPassword } from "react-icons/md";
import styles from "./LoginForm.module.css"

function LoginForm (){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate()

    const reloadPage = () =>{
        window.location.reload();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        
        try {
            const response = await fetch("http://localhost:5555/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Erro ao fazer login");
            }
            
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate("/userpage");
            reloadPage()
        } catch (err) {
            setError(err.message);
        }
    };

    return(
        <div className={styles.container}>

            <form onSubmit={handleSubmit}>
                <h1 className={styles.container_title}>Acesse sua conta</h1>
                {error && <p className={styles.error}>{error}</p>}
                <div className={styles.input_field}>
                    <CiUser />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={styles.input_field}>
                    <MdPassword />
                    <input type="password" placeholder= "Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className={styles.acess_button}>
                    <label htmlFor="">
                        <a href="#">Esqueceu a senha?</a>
                    </label>
                    <button type="submit">Entrar</button>
                    <button onClick={() => navigate('/cadastrar')}>Cadastrar</button>
                </div>
            </form>

        </div>
    )
}

export default LoginForm