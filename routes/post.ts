import { Router } from "express";
import { create, createPost, getAllPosts } from "../handllers/postHanddlers.ts";
const router = Router();
router.get("/", getAllPosts);
router.get("/create", create);
router.post("/create", createPost);
export { router as postRouter };
