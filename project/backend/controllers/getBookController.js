import prisma from "../models/client.js";

export const getAllBooks = async (req, res) => {
    try {
        const books = await prisma.book.findMany();
        res.json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar os livros." });
    }
};
