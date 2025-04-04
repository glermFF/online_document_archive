import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];  

    if (!token) {
        return res.status(401).json({ error: "Acesso negado! Token não fornecido." });
    }

    try {
        const decoded = jwt.verify(token, "seu_segredo_super_seguro");  // Troque pela chave do seu .env
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ error: "Token inválido ou expirado." });
    }
};
