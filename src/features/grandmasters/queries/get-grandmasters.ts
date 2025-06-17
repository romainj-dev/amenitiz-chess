import { Grandmaster } from '../types';
import { getGrandmaster } from './get-grandmaster';

const CHESS_API_BASE_URL = 'https://api.chess.com/pub';
const GM_USERNAMES: string[] = [];

export interface ChessComPlayer {
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

function hasGMUsernames() {
  return GM_USERNAMES.length !== 0;
}

async function fetchGrandmastersUsernames(): Promise<string[]> {
  const response = await fetch(`${CHESS_API_BASE_URL}/titled/GM`);
  if (!response.ok) {
    throw new Error('Failed to fetch grandmasters');
  }
  const data = await response.json();
  return data.players as string[];
}

async function getGrandmastersUsernames(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    if (hasGMUsernames()) {
      resolve(GM_USERNAMES);
    }
    try {
      resolve(fetchGrandmastersUsernames());
    } catch (error) {
      reject(error);
    }
  });
}

export async function getGrandmasters(
  page: number | undefined = 1,
  pageSize: number | undefined = 30,
): Promise<{ data: Grandmaster[]; totalPages: number }> {
  try {
    const usernames = await getGrandmastersUsernames();

    const usernamesOnPage = usernames.slice(
      (page - 1) * pageSize,
      page * pageSize,
    );

    const players = await Promise.all(
      usernamesOnPage.map((username) => getGrandmaster(username)),
    );

    return {
      data: players.filter((p) => !!p),
      totalPages: Math.ceil(usernames.length / pageSize),
    };
  } catch (error) {
    console.error('Error fetching grandmasters:', error);
    throw error;
  }
}
