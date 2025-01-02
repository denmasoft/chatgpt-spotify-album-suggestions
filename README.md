# Spotify Album Suggestion API with ChatGPT

This project provides a Node.js backend API that suggests Spotify albums based on user input using ChatGPT.

## Features

*   Suggests Spotify albums based on user preferences.
*   Uses the OpenAI ChatGPT API to generate suggestions.
*   Returns album names, artists, Spotify links (when possible), and reasons for suggestions.
*   Designed with a modular architecture and clean code principles.
*   Written in TypeScript for better type safety and maintainability.

## Requirements

*   Node.js and npm (or yarn) installed on your system.
*   An OpenAI API key.

## Setup

1.  Clone this repository or download the project files.

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Create a `.env` file in the project root directory and add:

    ```
    OPENAI_API_KEY=your_actual_openai_api_key
    ```

4.  Replace `your_actual_openai_api_key` with your actual OpenAI API key.

## Running the Server

1.  Start the server:

    ```bash
    npm start
    ```

    This will start the server on port 3000 by default (you can change this in the `server.ts` file).

## Usage

**API Endpoint:**

*   `POST /suggest`

**Request Body:**

```json
{
  "input": "I like rock music with strong vocals."
}
```

**Response:**

```json
[
  {
    "album": "Appetite for Destruction",
    "artist": "Guns N' Roses",
    "spotify_link": "[https://open.spotify.com/album/6ApYb6tD6JhJuKKzw81AJj](https://open.spotify.com/album/6ApYb6tD6JhJuKKzw81AJj)",
    "reason": "Classic hard rock album with powerful vocals."
  },
  {
    "album": "The Black Parade",
    "artist": "My Chemical Romance",
    "spotify_link": "[https://open.spotify.com/album/00kXqYvID8WCSowCDUPiep](https://open.spotify.com/album/00kXqYvID8WCSowCDUPiep)",
    "reason": "Concept album with strong vocals and catchy melodies."
  },
    {
    "album": "Not Found",
    "artist": "Artist without spotify link",
    "spotify_link": null,
    "reason": "This artist does not have a spotify presence"
  }
]
```

**Error Handling:**

The API will return an error object if there are any issues with the request or the interaction with ChatGPT.

**Development**

This project uses TypeScript for code safety and maintainability. You can use the following commands for development:

**npm run build**: Compiles TypeScript code to JavaScript.

**npm run start**: Starts the server in production mode.

**npm run dev**: Starts the server in development mode with automatic restart on file changes.

**npm run test**: Runs unit tests (if implemented).

**Contributing**

Pull requests are welcome. Please follow the code style and formatting conventions used in the project.