import React, {useEffect, useState} from "react";
import axios from "axios";
import BookCard from "../card/BookCard";
import styles from "./HomeComponent.module.css";

function HomeComponent() {
    
    const [book, setBook] = useState([])

    useEffect(() => {
        const mapBooks = async () => {
            try{
                const response = await axios.get("http://localhost:5555/books")
                setBook(response.data)
            } catch (error){
                console.error("Error na busca", error)
            }
        }

        mapBooks()
    }, [])
     

    return (
        <section className={styles.home_section}>
            <h1 className={styles.title}>Bem-vindo à Rede de Saber</h1>
            
            <h2 className={styles.section_title}>Adicionados Recentemente</h2>
            <div className={styles.books_section}>
                <div className={styles.book_container}>
                    <ul className={styles.book_list}>
                            {book.map((book, index) => (
                                <BookCard key={index} title={book.title} author={book.author} coverImg={`https://localhost:5555${book.filePath}`} fileUrl={book.filePath}/>
                            ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default HomeComponent;
