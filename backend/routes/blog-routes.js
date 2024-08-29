import express from "express";
import { getAllBlogs, addBlog, updateBlog, getById, deleteById } from "../controllers/blog-controller.js";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getById);
blogRouter.delete("/delete/:id", deleteById);

export default blogRouter;