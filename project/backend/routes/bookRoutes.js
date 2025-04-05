import { Router } from "express";
import { BookController } from "../controllers/bookController.js";
import { getAllBooks } from "../controllers/getBookController.js";
import { downloadBook } from "../controllers/downloadController.js";
const bookRouter = Router()


bookRouter.get("/", getAllBooks)
bookRouter.post("/add", BookController.addBook)
bookRouter.get("/upload/:filename", downloadBook)
bookRouter.get("/download/:fileName", downloadBook);

export default bookRouter