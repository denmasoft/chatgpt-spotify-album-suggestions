import axios from 'axios';
import openaiConfig from '../config/openai';
import { AlbumSuggestion } from '../types/albumSuggestion';

const chatgptService = {
  async getAlbumSuggestions(userInput: string): Promise<AlbumSuggestion[]> {
    try {
      if (!openaiConfig.apiKey) {
        throw new Error("OPENAI_API_KEY environment variable is not set.");
      }

      const response = await axios.post(
        openaiConfig.apiUrl, // Use apiUrl from config
        {
          model: openaiConfig.model, // Use model from config
          messages: [
            {
              role: "system",
              content: `You are a helpful assistant that suggests Spotify albums based on user input. 
                        Provide a list of album names, artists, and Spotify links. Format each suggestion as a JSON object within an array like this:
                        \`\`\`json
                        [
                          { "album": "Album Name 1", "artist": "Artist 1", "spotify_link": "Spotify Link 1", "reason": "Short reason" },
                          { "album": "Album Name 2", "artist": "Artist 2", "spotify_link": "Spotify Link 2", "reason": "Short reason" }
                        ]
                        \`\`\`
                        If you cannot find a Spotify link, set the "spotify_link" to null.`
            },
            { role: "user", content: userInput },
          ],
          temperature: 0.7,
          max_tokens: 250,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openaiConfig.apiKey}`, // Use apiKey from config
          },
        }
      );

      try {
        const chatGptResponse: string = response.data.choices[0].message?.content || "[]";
        const suggestions: AlbumSuggestion[] = JSON.parse(chatGptResponse);
        return suggestions;
      } catch (jsonError: any) {
        console.error("Error parsing ChatGPT JSON response:", jsonError);
        console.error("Raw ChatGPT Response:", response.data.choices[0].message?.content);
        return [{ error: "Could not parse GPT response. Please try again or rephrase your request." }];
      }
    } catch (error: any) {
      console.error("Error communicating with ChatGPT:", error);
      if (error.response) {
        console.error("ChatGPT API Response:", error.response.data);
      }
      return [{ error: "Error getting suggestions. Please try again later." }];
    }
  },
};

export default chatgptService;