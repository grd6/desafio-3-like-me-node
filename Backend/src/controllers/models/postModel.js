import { pool } from "../../../db/db.js";

export const createPostModel = async (titulo, img, descripcion) => {
  try {
    const result = await pool.query(
      "INSERT INTO posts (titulo, img, descripcion ) VALUES ($1,$2,$3 )RETURNING *",
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
