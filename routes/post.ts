import { Router } from "express";
import { createPost, getAllPosts } from "../handllers/postHanddlers.ts";
const router = Router();
router.get("/", getAllPosts);
router.post("/create", createPost);
export { router as postRouter };
