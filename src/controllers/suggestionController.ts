import { Request, Response } from 'express';
import chatgptService from '../services/chatgpt';

const suggestionController = {
  async suggestAlbums(req: Request, res: Response) {
    const userInput: string = req.body.input;

    if (!userInput) {
      return res.status(400).json({ error: 'Input is required.' });
    }

    const suggestions = await chatgptService.getAlbumSuggestions(userInput);
    res.json(suggestions);
  },
};

export default suggestionController;