import { pool } from "../../db/db.js";
import {
  createPostModel,
  getPostAllModel,
  updatePostLikesModel,
  deletePostModel,
} from "./models/postModel.js";
//post createPost
export const createPost = async (req, res) => {
  const { titulo, img, descripcion, likes } = req.body;
  try {
    const result = await createPostModel(titulo, img, descripcion, likes);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//get getallpost
export const getallpost = async (req, res) => {
  try {
    const result = await getPostAllModel();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePostLikes = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await updatePostLikesModel(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deletePostModel(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
