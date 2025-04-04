import React from "react";
import LoginForm from "../../components/login/LoginForm";
import styles from "./LoginPage.module.css"

function LoginPage (){
    return(
        <>
            <div className={styles.form}>
                <LoginForm/>
            </div>
        </>
    )
}

export default LoginPage