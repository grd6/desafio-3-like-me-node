import { Router } from "express";
import {
  createPost,
  getallpost,
  updatePostLikes,
  deletePost,
} from "../src/controllers/postsControllers.js";

const router = Router();

router.post("/posts", createPost);
router.get("/posts", getallpost);
router.put("/posts/like/:id", updatePostLikes);
router.delete("/posts/:id", deletePost);
export default router;
