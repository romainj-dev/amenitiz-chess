import { Game } from '@/features/grandmasters/types';

export const getGrandmasterGames = (): Game[] => {
  const games: Game[] = [
    {
      id: '1',
      opponent: 'HikaruNakamura',
      opponentRating: 2736,
      result: 'win',
      color: 'white',
      date: '2024-01-14',
      gameUrl: 'https://chess.com/game/12345',
    },
    {
      id: '2',
      opponent: 'FabianoCaruana',
      opponentRating: 2804,
      result: 'draw',
      color: 'black',
      date: '2024-01-13',
      gameUrl: 'https://chess.com/game/12346',
    },
    {
      id: '3',
      opponent: 'DingLiren',
      opponentRating: 2788,
      result: 'loss',
      color: 'white',
      date: '2024-01-12',
      gameUrl: 'https://chess.com/game/12347',
    },
    {
      id: '4',
      opponent: 'LevonAronian',
      opponentRating: 2765,
      result: 'win',
      color: 'black',
      date: '2024-01-11',
      gameUrl: 'https://chess.com/game/12348',
    },
    {
      id: '5',
      opponent: 'AnishGiri',
      opponentRating: 2760,
      result: 'draw',
      color: 'white',
      date: '2024-01-10',
      gameUrl: 'https://chess.com/game/12349',
    },
  ];

  return games;
};
