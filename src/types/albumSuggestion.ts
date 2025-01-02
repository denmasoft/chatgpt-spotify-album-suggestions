export interface AlbumSuggestion {
    album: string | null;
    artist: string | null;
    spotify_link: string | null;
    reason: string | null;
    error?: string;
  }