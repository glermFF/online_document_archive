function BookForm() {
    return(
        <div>

            <p>Preencha os Campos</p>
            <form action="">
                <div>
                    <input type="text" />
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <input type="text" />
                </div>
                
                <select name="Categoria">
                    <option disabled></option>
                </select>
            </form>

        </div>
    )
}

export default BookForm