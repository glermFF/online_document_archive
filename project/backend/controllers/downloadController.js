import path from "path";
import { fileURLToPath } from 'url';
import prisma from "../models/client.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const downloadBook = async (req, res) => {
    try {
      const fileName = decodeURIComponent(req.params.fileName);
      const filePath = path.join(__dirname, "..", "..", "upload", fileName);

      const book = await prisma.book.findFirst({
        where: { filePath: `/upload/${fileName}` },
      });
      
  
      if (!book) {
        return res.status(404).send("Livro nÃ£o encontrado no banco.");
      }
  
      const originalName = book.originalName || "livro.pdf";
  
      res.download(filePath, originalName, (err) => {
        if (err) {
          console.error("Erro ao baixar:", err);
          res.status(500).send("Erro ao baixar o arquivo.");
        }
      });
    } catch (error) {
      console.error("Erro geral:", error);
      res.status(500).send("Erro inesperado.");
    }
  };