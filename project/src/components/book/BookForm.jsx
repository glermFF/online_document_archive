function BookForm() {
    return(
        <div>

            <p>Preencha os Campos</p>
            <form action="">
                <div>
                    <p>Nome do Livro</p>
                    <input type="text" placeholder="Insira o nome do livro" name="name"/>
                </div>
                <div>
                    <p>Autor</p>
                    <input type="text" placeholder="Insira o autor do livro" name="autor"/>
                </div>
                <div>
                    <p>Categoria</p>
                    <Select text="Categoria do livro"></Select>
                </div>
                <div>
                    <p>Tag</p>
                    <Select text="tag"></Select>
                </div>
                
                <select name="Categoria">
                    <option disabled></option>
                </select>
            </form>

        </div>
    )
}

export default BookForm