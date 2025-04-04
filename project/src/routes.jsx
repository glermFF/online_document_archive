import { Routes, Route } from "react-router-dom";
import  Home  from "./pages/Home/HomePage"
import Login  from "./pages/Login/LoginPage"
import RegisterPage from "./pages/Cadastro/Register";
import  User  from "./pages/User/UserPage"
import PrivateRoute from "./components/private/PrivateRoute";
import  AddBook from "./pages/AddBook/AddBook"


const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={ <Home></Home> }></Route>
            <Route path="/login" element={ <Login></Login> }> </Route>
            <Route path="/cadastrar" element={ <RegisterPage></RegisterPage> }></Route>
            <Route path="/userpage" element={ <PrivateRoute>
                    <User></User>
                </PrivateRoute> }> 
            </Route>
            <Route path="/addbook" element={ <AddBook></AddBook> }> </Route>
        </Routes>
    )
}

export default AppRoutes