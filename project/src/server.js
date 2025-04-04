import multer from "multer"
import express from "express";
import cors from "cors";
import prisma from "../backend/models/client.js";
import bookRouter from "../backend/routes/bookRoutes.js";
import  {router as userRoutes}  from '../backend/routes/userRoutes.js'

const port = 5555
const app = express()

const upload = multer({dest: "upload/"})

app.use(cors())
app.use(express.json())

app.use("/", userRoutes)
app.use("/books", bookRouter)

app.get("/", (req, res) => {
    res.json({message: "API funcionando"})
})

app.post("/login", (req, res) => {
    const {email, password} = req.body

    if (email === "joao.silva@email.com" && password === "123456") {
        res.json({ message: "Login bem-sucedido!", user: email });
    } else {
        res.status(401).json({ error: "Credenciais inválidas!" });
    }
})

app.post("/upload", upload.single("file"), async (req, res) => {
    //res.json(req.file)
    try{
        const { title, author, year, tag } = req.body;

        if (!req.file) {
            return res.status(400).json({ error: "Nenhum arquivo enviado!" });
        }

        const book = await prisma.book.create({
            data: {
                title,
                author,
                year: parseInt(year),
                tag,
                filePath: `/upload/${req.file.filename}`
            }
        });
        res.status(200).json({ message: "Livro enviado. Obrigado por colaborar =)", book });

    } catch(error){
        console.error(error);
        res.status(500).json({ error: "Erro no envio do livro." });
    }
})

app.listen(port, () => {
    console.log(`[SERVER]Servidor online na porta ${port}`)
})