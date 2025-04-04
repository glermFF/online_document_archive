import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login"); // Redireciona se não houver usuário logado
    }
  }, [navigate]);

  return children;
};

export default PrivateRoute;
