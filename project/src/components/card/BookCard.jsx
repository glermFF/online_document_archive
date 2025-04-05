import React, { useState } from "react";
import cors from "cors"
import styles from "./BookCard.module.css";

const BookCard = ({ title, author, coverImg, fileUrl }) => {

    const [isPopUpOpen, setPopUpOpen] = useState(false)

    const handlePopUp = () => {
        setPopUpOpen(!isPopUpOpen)
    }

    cors()

    const handleDownload = () => {
        try {
            const filename = fileUrl.split('/').pop();
        
            if (!filename) {
              console.error("Arquivo inválido.");
              return;
            }
        
            const downloadUrl = `http://localhost:5555/books/upload/${filename}`
        
            console.log(`Caminho: ${downloadUrl}`);
            window.open(downloadUrl, "_blank");
            setPopUpOpen(false);
          } catch (err) {
            console.error("Ocorreu um erro:", err);
          }
    }

    return (
        <li className={styles.book_card}>
            <img src={coverImg} alt={`Capa do livro ${title}`} />
            <h3>{title}</h3>
            <p>Autor: {author}</p>
            <button onClick={handlePopUp}>Download</button>

            {isPopUpOpen && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <h4></h4>
                        <button onClick={handleDownload}>Confirmar</button>
                        <button onClick={handlePopUp}>Sair</button>
                    </div>
                </div>
            )}
        </li>
    );
};

export default BookCard;
