import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const downloadBook = (req, res) => {
    const fileName = decodeURIComponent(req.params.fileName);
    console.log("Valor de req.params.fileName:", req.params.fileName);

    const filePath = path.join(__dirname, '..', 'upload', fileName);

    //console.log("Buscando arquivo:", filePath);
    console.log("Download URL:", downloadUrl); // LOG PRA CONFERIR

    res.sendFile(filePath, (err) => {
        if (err) {
            console.error("Erro ao servir o arquivo:", err);
            res.status(500).send("Erro ao servir o arquivo.");
        }
    });
};
