import { useState } from "react"
import styles from './RegisterForm.module.css'

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response =  await fetch("http://localhost:5555/register",{
                method: "POST",
                headers:{
                    "Content-type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            if(response.ok){
                alert("Cadastro realizado com sucesso!")
                window.location.href = "/login";
                setFormData({
                    name: "",
                    email: "",
                    password: ""
                });;
            }
        } catch (err){
            console.err("Ocorreu um erro:", err)
        }
    };

    return(
        <div className={styles.container}>

            <form onSubmit={handleSubmit}>
                <h1 className={styles.container_title}>Crie uma conta</h1>
                <div className={styles.input_field}>
                    <label>Seu nome de usuário:</label>
                    <input type="text" name="name" placeholder="User" onChange={handleChange} />
                </div>
                <div className={styles.input_field}>
                    <label>Seu email:</label>
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} />    
                </div>
                <div className={styles.input_field}>
                    <label>Digite sua senha:</label>
                    <input type="password" name="password" placeholder="Senha" onChange={handleChange} />
                </div>
                <div className={styles.acess_button}>
                    <button type="submit">Submeter</button>
                </div>
            </form>

        </div>
    )
}

export default RegisterForm