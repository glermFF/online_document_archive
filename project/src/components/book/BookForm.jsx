import { useState } from "react";
import axios from "axios"
import styles from "./BookForm.module.css"

const BookForm = ({ onSubmit }) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");
    const [tag, setType] = useState("");
    const [file, setFile] = useState(null);
    const tagOptions = ["Educação", "Ficção", "História", "Tecnologia", "Arte"];


    const handleSubmit  = async (e) => {
        e.preventDefault();
        if (!file) {
            alert("Por favor, selecione um arquivo.");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("author", author);
        formData.append("year", year);
        formData.append("tag", tag);
        formData.append("file", file);

        try {
            
             const response = await axios.post("http://localhost:5555/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            alert("Livro cadastrado com sucesso!");
            console.log(response.data); 
            window.location.reload();
        } catch (error) {
            alert("Erro ao cadastrar livro!");
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <label>Título:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

            <label>Autor:</label>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />

            <label>Ano de Publicação:</label>
            <input type="number" value={year} onChange={(e) => setYear(e.target.value)} required />

            <label>Tag:</label>
            
            <select name="tag" onChange={handleChange} required>
                <option value="">Selecione uma tag</option>
                {tagOptions.map((tag, index) => (<option key={index} value={tag.toLowerCase()}>{tag}</option>))}
            </select>

            <label>Arquivo:</label>
            <input type="file" accept=".pdf,.epub,.mobi,.docx" onChange={(e) => setFile(e.target.files[0])} required />

            <button type="submit">Adicionar Livro</button>
        </form>
    );
};

export default BookForm;
