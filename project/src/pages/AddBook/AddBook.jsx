import BookForm from "../../components/book/BookForm"
import Navbar from "../../components/layout/Navbar"
import Footer from "../../components/layout/Footer"

function AddBook() {
    return(
        <div>
            <Navbar/>
            <h2>Adicionar livro ao acervo</h2>
            <BookForm/>
            <Footer/>
        </div>
    )
}

export default AddBook