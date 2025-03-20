import { useNavigate } from "react-router";

import styles from './UserPage.module.css'
import Navbar from "../../components/layout/Navbar"

function UserPage() {
    const navigate = useNavigate()

    function details(){
        navigate('/addbook')
    }

    return(
        <div>
            <Navbar/>
            <h1>Pagina de Usuário</h1>
            <p>Olá, User</p>

            <p>
                <button onClick={details}>
                    Colaborar
                </button>
            </p>
        </div>
    )
}

export default UserPage