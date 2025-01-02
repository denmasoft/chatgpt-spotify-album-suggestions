import express from 'express';
const router = express.Router();
import suggestionController from '../controllers/suggestionController';

router.post('/', suggestionController.suggestAlbums);

export default router;