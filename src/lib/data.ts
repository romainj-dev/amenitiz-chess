export interface Grandmaster {
  username: string;
  name: string;
  country: string;
  countryCode: string;
  avatar: string;
  fideRating: number;
  title: string;
  lastOnline: string;
  joinedDate: string;
  status: 'online' | 'offline';
}

export interface Game {
  id: string;
  opponent: string;
  opponentRating: number;
  result: 'win' | 'loss' | 'draw';
  color: 'white' | 'black';
  date: string;
  gameUrl: string;
}

export const grandmasters: Grandmaster[] = [
  {
    username: 'MagnusCarlsen',
    name: 'Magnus Carlsen',
    country: 'Norway',
    countryCode: 'NO',
    avatar: '/placeholder.svg?height=80&width=80',
    fideRating: 2830,
    title: 'GM',
    lastOnline: '2024-01-15T10:30:00Z',
    joinedDate: '2010-03-15',
    status: 'online',
  },
  {
    username: 'FabianoCaruana',
    name: 'Fabiano Caruana',
    country: 'United States',
    countryCode: 'US',
    avatar: '/placeholder.svg?height=80&width=80',
    fideRating: 2804,
    title: 'GM',
    lastOnline: '2024-01-15T09:15:00Z',
    joinedDate: '2011-07-22',
    status: 'offline',
  },
  {
    username: 'DingLiren',
    name: 'Ding Liren',
    country: 'China',
    countryCode: 'CN',
    avatar: '/placeholder.svg?height=80&width=80',
    fideRating: 2788,
    title: 'GM',
    lastOnline: '2024-01-15T08:45:00Z',
    joinedDate: '2012-01-10',
    status: 'online',
  },
  {
    username: 'IanNepomniachtchi',
    name: 'Ian Nepomniachtchi',
    country: 'Russia',
    countryCode: 'RU',
    avatar: '/placeholder.svg?height=80&width=80',
    fideRating: 2771,
    title: 'GM',
    lastOnline: '2024-01-14T22:30:00Z',
    joinedDate: '2010-11-05',
    status: 'offline',
  },
  {
    username: 'LevonAronian',
    name: 'Levon Aronian',
    country: 'United States',
    countryCode: 'US',
    avatar: '/placeholder.svg?height=80&width=80',
    fideRating: 2765,
    title: 'GM',
    lastOnline: '2024-01-15T11:00:00Z',
    joinedDate: '2009-05-18',
    status: 'online',
  },
  {
    username: 'AnishGiri',
    name: 'Anish Giri',
    country: 'Netherlands',
    countryCode: 'NL',
    avatar: '/placeholder.svg?height=80&width=80',
    fideRating: 2760,
    title: 'GM',
    lastOnline: '2024-01-15T07:20:00Z',
    joinedDate: '2011-09-12',
    status: 'offline',
  },
  {
    username: 'WesleySo',
    name: 'Wesley So',
    country: 'United States',
    countryCode: 'US',
    avatar: '/placeholder.svg?height=80&width=80',
    fideRating: 2757,
    title: 'GM',
    lastOnline: '2024-01-15T10:45:00Z',
    joinedDate: '2012-03-08',
    status: 'online',
  },
  {
    username: 'AlexanderGrischuk',
    name: 'Alexander Grischuk',
    country: 'Russia',
    countryCode: 'RU',
    avatar: '/placeholder.svg?height=80&width=80',
    fideRating: 2745,
    title: 'GM',
    lastOnline: '2024-01-14T19:15:00Z',
    joinedDate: '2010-08-25',
    status: 'offline',
  },
];

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

export const getGrandmasterByUsername = (
  username: string,
): Grandmaster | undefined => {
  return grandmasters.find((gm) => gm.username === username);
};
