import React from "react"
import styles from '../css/HomeComponent.module.css'

function HomeComponent () {
    return(
        <section className={styles.home_section}>
            <h1>Bem-vindo a Rede de Saber</h1>
            <p>Procure por um livro</p>
            <input type="text"/>

            <div>
                <h2>Adicionados recentemente</h2>
                <div className={styles.books_added}>
                
                </div>
            </div>
        </section>
    )
}

export default HomeComponent