import  prisma  from "../models/client.js";
import bcrypt from "bcryptjs";

export class UserController{
    
    async handle(req, res){
        try {
            const { name, email, password } = req.body;

            const existingUser = await prisma.user.findUnique({
                where: { email },
            });
    
            if (existingUser) {
                return res.status(400).json({ error: "Email já cadastrado!" });
            }
    
            const hashedPassword = await bcrypt.hash(password, 10);
    
            const newUser = await prisma.user.create({
                data: {
                    name,
                    email,
                    password: hashedPassword,
                },
            });
    
            res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
        } catch (error) {
            res.status(500).json({ error: "Erro ao cadastrar usuário." });
        }        
    }
}