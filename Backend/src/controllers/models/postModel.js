import { pool } from "../../../db/db.js";

export const createPostModel = async (titulo, img, descripcion, likes) => {
  try {
    const result = await pool.query(
      "INSERT INTO posts (titulo, img, descripcion,likes ) VALUES ($1,$2,$3, 0 )RETURNING *",
      [titulo, img, descripcion]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error("Error" + error.message);
  }
};

export const getPostAllModel = async () => {
  try {
    const allPost = await pool.query("SELECT * FROM posts");
    return allPost.rows;
  } catch (error) {
    throw new Error("Error" + error.message);
  }
};

export const updatePostLikesModel = async (id) => {
  try {
    const result = await pool.query(
      "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *",
      [id]
    );
    return result.rows[0];
  } catch (error) {
    console.error(error);
    throw new Error("Error" + error.message);
  }
};

export const deletePostModel = async (id) => {
  try {
    const result = await pool.query("DELETE FROM posts WHERE id= $1", [id]);
  } catch (error) {
    console.error(error);
    throw new Error("Error" + error.message);
  }
};
