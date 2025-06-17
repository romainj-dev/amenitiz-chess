import { ArrowLeft, Circle, Crown, ExternalLink, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getGrandmaster } from '@/features/grandmasters/queries/get-grandmaster';
import { formatDate, formatLastOnline } from '@/features/grandmasters/utils';
import { getGrandmasterGames } from '@/lib/data';
import { grandmasterPath } from '@/paths';

function getResultColor(result: string) {
  switch (result) {
    case 'win':
      return 'text-success-600 bg-success-50 border border-success-200';
    case 'loss':
      return 'text-error-600 bg-error-50 border border-error-200';
    case 'draw':
      return 'text-secondary-700 bg-secondary-50 border border-secondary-200';
    default:
      return 'text-accent-600 bg-accent-50 border border-accent-200';
  }
}

function getResultIcon(result: string) {
  switch (result) {
    case 'win':
      return '1';
    case 'loss':
      return '0';
    case 'draw':
      return '½';
    default:
      return '-';
  }
}

interface PageProps {
  params: Promise<{ username: string }>;
}

const GrandmasterDetailPage = async ({ params }: PageProps) => {
  const { username } = await params;
  const grandmaster = await getGrandmaster(username);

  if (!grandmaster) {
    notFound();
  }

  const games = getGrandmasterGames();

  return (
    <div className='from-primary-50 to-accent-100 min-h-screen bg-gradient-to-br'>
      <div className='container mx-auto px-4 py-6'>
        {/* Back Button */}
        <Link
          href={grandmasterPath()}
          className='text-accent-600 hover:text-primary-600 mb-4 inline-flex items-center gap-2 font-medium transition-colors'
        >
          <ArrowLeft className='h-4 w-4' />
          Back to Grandmasters
        </Link>

        {/* Profile Header */}
        <div className='shadow-strong border-accent-100 mb-8 rounded-xl border bg-white p-8'>
          <div className='flex flex-col items-center gap-6 md:flex-row md:items-start'>
            {/* Avatar */}
            <div className='relative'>
              <Image
                src={grandmaster.avatar || '/user.svg'}
                alt={grandmaster.username}
                width={120}
                height={120}
                className='border-primary-100 shadow-medium rounded-full border-4'
              />
              <div
                className={`shadow-soft absolute -right-2 -bottom-2 h-6 w-6 rounded-full border-4 border-white ${
                  grandmaster.status === 'online'
                    ? 'bg-success-500'
                    : 'bg-accent-400'
                }`}
              />
            </div>

            {/* Info */}
            <div className='flex-1 text-center md:text-left'>
              <div className='mb-2 flex items-center justify-center gap-2 md:justify-start'>
                <Crown className='text-secondary-600 h-6 w-6' />
                <h1 className='text-accent-800 text-3xl font-bold'>
                  {grandmaster.name}
                </h1>
              </div>
              <p className='text-accent-600 mb-2 text-lg'>
                @{grandmaster.username}
              </p>

              <div className='mb-4 flex items-center justify-center gap-4 md:justify-start'>
                <div className='flex items-center gap-1'>
                  <MapPin className='text-accent-400 h-4 w-4' />
                  <span className='text-accent-600'>
                    {grandmaster.countryCode}
                  </span>
                </div>
                <div className='flex items-center gap-1'>
                  <Circle
                    className={`h-3 w-3 ${grandmaster.status === 'online' ? 'text-success-500' : 'text-accent-400'}`}
                  />
                  <span className='text-accent-600 capitalize'>
                    {grandmaster.status}
                  </span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
                <div className='from-primary-50 to-primary-100 border-primary-200 rounded-lg border bg-gradient-to-br p-3 text-center'>
                  <div className='text-primary-700 text-xl font-bold'>
                    {grandmaster.title}
                  </div>
                  <div className='text-primary-600 text-xs font-medium'>
                    Title
                  </div>
                </div>
                <div className='from-secondary-50 to-secondary-100 border-secondary-200 rounded-lg border bg-gradient-to-br p-3 text-center'>
                  <div className='text-secondary-700 text-xl font-bold'>
                    {grandmaster.fideRating}
                  </div>
                  <div className='text-secondary-600 text-xs font-medium'>
                    FIDE Rating
                  </div>
                </div>
                <div className='from-accent-50 to-accent-100 border-accent-200 rounded-lg border bg-gradient-to-br p-3 text-center'>
                  <div className='text-accent-700 text-sm font-bold'>
                    {formatLastOnline(grandmaster.lastOnline)}
                  </div>
                  <div className='text-accent-600 text-xs font-medium'>
                    Last Online
                  </div>
                </div>
                <div className='from-accent-50 to-accent-100 border-accent-200 rounded-lg border bg-gradient-to-br p-3 text-center'>
                  <div className='text-accent-700 text-sm font-bold'>
                    {formatDate(grandmaster.joinedDate)}
                  </div>
                  <div className='text-accent-600 text-xs font-medium'>
                    Joined
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Games */}
        <div className='shadow-strong border-accent-100 rounded-xl border bg-white p-8'>
          <h2 className='text-accent-800 mb-6 text-2xl font-bold'>
            Recent Games
          </h2>

          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='border-primary-200 bg-primary-50 border-b-2'>
                  <th className='text-primary-700 px-4 py-3 text-left font-semibold'>
                    Opponent
                  </th>
                  <th className='text-primary-700 px-4 py-3 text-center font-semibold'>
                    Result
                  </th>
                  <th className='text-primary-700 px-4 py-3 text-center font-semibold'>
                    Color
                  </th>
                  <th className='text-primary-700 px-4 py-3 text-center font-semibold'>
                    Date
                  </th>
                  <th className='text-primary-700 px-4 py-3 text-center font-semibold'>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {games.map((game) => (
                  <tr
                    key={game.id}
                    className='border-accent-100 hover:bg-accent-50 border-b transition-colors'
                  >
                    <td className='px-4 py-4'>
                      <div>
                        <div className='text-accent-800 font-medium'>
                          @{game.opponent}
                        </div>
                        <div className='text-accent-500 text-sm'>
                          ({game.opponentRating})
                        </div>
                      </div>
                    </td>
                    <td className='px-4 py-4 text-center'>
                      <span
                        className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${getResultColor(game.result)}`}
                      >
                        {getResultIcon(game.result)}
                      </span>
                    </td>
                    <td className='px-4 py-4 text-center'>
                      <div
                        className={`mx-auto h-6 w-6 rounded-full border-2 ${
                          game.color === 'white'
                            ? 'border-accent-300 bg-white'
                            : 'bg-accent-800 border-accent-800'
                        }`}
                      />
                    </td>
                    <td className='text-accent-600 px-4 py-4 text-center'>
                      {formatDate(game.date)}
                    </td>
                    <td className='px-4 py-4 text-center'>
                      <a
                        href={game.gameUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-primary-600 hover:text-primary-700 inline-flex items-center gap-1 font-medium transition-colors'
                      >
                        <span className='text-sm'>View</span>
                        <ExternalLink className='h-3 w-3' />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrandmasterDetailPage;
