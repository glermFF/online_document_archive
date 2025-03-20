import React from "react"
import styles from './HomeComponent.module.css'

function HomeComponent () {
    return(
        <section className={styles.home_section}>
            <h1>Bem-vindo a Rede de Saber</h1>

            <div className={styles.books_added}>
                <h2>Adicionados Recentemente</h2>
                <div className={styles.book_container}>
                    <ul>
                        <li className={styles.book_card}>
                            <h3>Livro - Nome</h3>
                            <p>Autor: </p>
                        </li>
                        <li className={styles.book_card}>
                            <h3>Livro - Nome</h3>
                            <p>Autor: </p>
                        </li>
                        <li className={styles.book_card}>
                            <h3>Livro - Nome</h3>
                            <p>Autor: </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.most_downloaded}>
                <h2>Mais baixados</h2>
                <div className={styles.book_container}>
                    <ul>
                        <li className={styles.book_card}>
                            <h3>Livro - Nome</h3>
                            <p>Autor: </p>
                        </li>
                        <li className={styles.book_card}>
                            <h3>Livro - Nome</h3>
                            <p>Autor: </p>
                        </li>
                        <li className={styles.book_card}>
                            <h3>Livro - Nome</h3>
                            <p>Autor: </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default HomeComponent