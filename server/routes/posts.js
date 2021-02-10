import express from 'express';

//import logic for route handlers/controllers
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);

export default router;