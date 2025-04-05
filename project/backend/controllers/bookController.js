import client from "../models/client.js"
import { v4 as uuidv4 } from 'uuid';
import path from "path"
import fs from "fs"

const prisma = client

export class BookController {

    static addBook = async (req, res) => {
        try {
            const { title, author, year, tag } = req.body;
            const file = req.file;

            if (!file) {
                return res.status(400).json({ error: "Arquivo do livro é obrigatório!" });
            }
            const originalName = req.file.originalname;
            const newFileName = `${uuidv4()}${path.extname(originalName)}`;

            const oldPath = req.file.path;
            const newPath = path.join(req.file.destination, newFileName);

            fs.renameSync(oldPath, newPath);

            const newBook = await prisma.book.create({
                data: {
                    title,
                    author,
                    year: parseInt(year),
                    tag,
                    filePath: req.file.filename,           
                    originalName: req.file.originalname    
                },
            });

            res.status(201).json({ message: "O livro foi adicionado ao acervo. Obrigado =)", book: newBook });
        } catch (error) {
            console.error("Erro ao cadastrar livro =/ :", error);
            res.status(500).json({ error: "Erro ao cadastrar o livro =(." });
        }
    };
}