import { createPostModel,getPostAllModel } from "./models/postModel.js";
//post createPost
export const createPost = async (req, res) => {
  const { titulo, img, descripcion } = req.body;
  try {
   
    const result = await createPostModel(titulo, img, descripcion);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//get getallpost
export const getallpost = async(req,res)=>{
  try {
    const result = await getPostAllModel()
    res.status(201).json(result)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
