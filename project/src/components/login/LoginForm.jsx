import { CiUser } from "react-icons/ci";
import { MdPassword } from "react-icons/md";

import styles from "./LoginForm.module.css"

function LoginForm (){
    return(
        <div className={styles.container}>
            <form >
                <h1 className={styles.container_title}>Acesse sua conta</h1>
                <div className={styles.input_field}>
                    <CiUser />
                    <input type="text" placeholder="Usuário"/>
                </div>
                <div className={styles.input_field}>
                    <MdPassword />
                    <input type="password" placeholder= "Senha"/>
                </div>
                <div className={styles.acess_button}>
                    <label htmlFor="">
                        <a href="#">Esqueceu a senha?</a>
                    </label>
                    <button>Entrar</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm