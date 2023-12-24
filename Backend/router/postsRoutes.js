import { Router } from "express";
import { createPost, getallpost } from "../src/controllers/postsControllers.js";

const router = Router();

router.post("/posts", createPost);
router.get("/posts", getallpost);

export default router;
