import  prisma  from "../models/client.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export class UserVerifyController {
    
    async login(req, res) {
        try {
            const { email, password } = req.body;

            const user = await prisma.user.findUnique({
                where: { email },
            });

            if (!user) {
                return res.status(401).json({ error: "Usuário não encontrado!" });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ error: "Credenciais inválidas!" });
            }

            const token = jwt.sign(
                { id: user.id, name: user.name, email: user.email },
                "seuSegredoSuperSeguro", 
                { expiresIn: "1h" }
            );

            res.json({
                message: "Login realizado com sucesso!",
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                },
                token
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro ao realizar login." });
        }
    }
}
