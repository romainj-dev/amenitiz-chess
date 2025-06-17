export type Grandmaster = {
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
};

export type Game = {
  id: string;
  opponent: string;
  opponentRating: number;
  result: 'win' | 'loss' | 'draw';
  color: 'white' | 'black';
  date: string;
  gameUrl: string;
};
