import { MapPin } from 'lucide-react';
import Image from 'next/image';
import { Grandmaster } from '@/features/grandmasters/types';
import { formatLastOnline } from '../utils';

interface GrandmasterItemProps {
  grandmaster: Grandmaster;
}

const GrandmasterItem = ({ grandmaster }: GrandmasterItemProps) => {
  return (
    <div className='shadow-medium hover:shadow-strong border-accent-100 transform rounded-xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1'>
      {/* Status Indicator */}
      <div className='mb-4 flex items-start justify-between'>
        <div
          className={`h-3 w-3 rounded-full ${
            grandmaster.status === 'online' ? 'bg-success-500' : 'bg-accent-400'
          }`}
        />
        <span className='text-accent-500 bg-primary-50 rounded-full px-2 py-1 text-xs font-medium'>
          {grandmaster.title}
        </span>
      </div>

      {/* Avatar */}
      <div className='mb-4 flex justify-center'>
        <div className='relative'>
          <Image
            src={grandmaster.avatar || '/placeholder.svg'}
            alt={grandmaster.name}
            width={80}
            height={80}
            className='border-accent-100 group-hover:border-secondary-200 rounded-full border-4 transition-colors'
          />
        </div>
      </div>

      {/* Info */}
      <div className='text-center'>
        <h3 className='text-accent-800 group-hover:text-primary-600 mb-1 text-lg font-bold transition-colors'>
          {grandmaster.name}
        </h3>
        <p className='text-accent-600 mb-2 text-sm'>@{grandmaster.username}</p>

        <div className='mb-3 flex items-center justify-center gap-1'>
          <MapPin className='text-accent-400 h-4 w-4' />
          <span className='text-accent-600 text-sm'>{grandmaster.country}</span>
        </div>

        <div className='from-primary-50 to-secondary-50 border-primary-100 mb-3 rounded-lg border bg-gradient-to-r p-3'>
          <div className='text-primary-700 text-2xl font-bold'>
            {grandmaster.fideRating}
          </div>
          <div className='text-primary-600 text-xs font-medium'>
            FIDE Rating
          </div>
        </div>

        <div className='text-accent-500 text-xs'>
          Last online: {formatLastOnline(grandmaster.lastOnline)}
        </div>
      </div>
    </div>
  );
};

export { GrandmasterItem };
