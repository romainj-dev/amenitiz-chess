import { Grandmaster } from '../types';

const CHESS_API_BASE_URL = 'https://api.chess.com/pub';

interface ChessComPlayer {
  username: string;
  player_id: number;
  title: string;
  status: string;
  name: string;
  avatar?: string;
  followers: number;
  country: string;
  last_online: number;
  joined: number;
  location: string;
  url: string;
}

export async function getGrandmaster(
  username: string,
): Promise<Grandmaster | null> {
  try {
    const response = await fetch(`${CHESS_API_BASE_URL}/player/${username}`);
    if (!response.ok) {
      return null;
    }

    const player: ChessComPlayer = await response.json();

    return {
      username: player.username,
      name: player.name,
      title: player.title,
      country: player.country,
      countryCode: player.country.toUpperCase().slice(0, 2),
      avatar: player.avatar,
      fideRating: 1000, // Default FIDE rating since Chess.com API doesn't provide it
      lastOnline: new Date(player.last_online * 1000).toISOString(),
      joinedDate: new Date(player.joined * 1000).toISOString().split('T')[0],
      status: player.status === 'online' ? 'online' : 'offline',
    };
  } catch (error) {
    console.error(`Error fetching grandmaster ${username}:`, error);
    throw error;
  }
}
