'use client';

import { MapPin, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { grandmasters } from '@/lib/data';
import { grandmasterDetailPath } from '@/paths';

export default function GrandmastersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGrandmasters = grandmasters.filter(
    (gm) =>
      gm.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gm.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const formatLastOnline = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60),
    );

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  return (
    <div className='from-primary-50 to-accent-100 min-h-screen bg-gradient-to-br'>
      <div className='container mx-auto px-4 py-6'>
        {/* Search Bar */}
        <div className='mx-auto mb-8 max-w-md'>
          <div className='relative'>
            <Search className='text-accent-400 absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform' />
            <input
              type='text'
              placeholder='Search grandmasters...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='border-accent-200 focus:ring-primary-500 shadow-soft w-full rounded-xl border bg-white py-3 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:outline-none'
            />
          </div>
        </div>

        {/* Grandmasters Grid */}
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {filteredGrandmasters.map((grandmaster) => (
            <Link
              key={grandmaster.username}
              href={grandmasterDetailPath(grandmaster.username)}
              className='group'
            >
              <div className='shadow-medium hover:shadow-strong border-accent-100 transform rounded-xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1'>
                {/* Status Indicator */}
                <div className='mb-4 flex items-start justify-between'>
                  <div
                    className={`h-3 w-3 rounded-full ${
                      grandmaster.status === 'online'
                        ? 'bg-success-500'
                        : 'bg-accent-400'
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
                  <p className='text-accent-600 mb-2 text-sm'>
                    @{grandmaster.username}
                  </p>

                  <div className='mb-3 flex items-center justify-center gap-1'>
                    <MapPin className='text-accent-400 h-4 w-4' />
                    <span className='text-accent-600 text-sm'>
                      {grandmaster.country}
                    </span>
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
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredGrandmasters.length === 0 && (
          <div className='py-12 text-center'>
            <div className='text-accent-400 mb-2 text-lg'>
              No grandmasters found
            </div>
            <div className='text-accent-500'>
              Try adjusting your search terms
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
