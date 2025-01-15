import BookForm from "../components/BookForm"
import Navbar from "../components/layout/Navbar"

function AddBook() {
    return(
        <div>
            <Navbar/>
            <h2>Adicionar livro ao acervo</h2>
            <BookForm/>
        </div>
    )
}

export default AddBook