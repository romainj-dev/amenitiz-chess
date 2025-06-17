import { Crown, Search } from 'lucide-react';
import Link from 'next/link';
import { grandmasterPath, homePath } from '@/paths';

function Header() {
  return (
    <header className='shadow-soft border-accent-200 sticky top-0 z-50 border-b bg-white'>
      <div className='container mx-auto px-4'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link
            href={homePath()}
            className='flex items-center gap-3 transition-opacity hover:opacity-80'
          >
            <div className='from-secondary-500 to-secondary-600 shadow-medium rounded-lg bg-gradient-to-br p-2'>
              <Crown className='h-6 w-6 text-white' />
            </div>
            <div>
              <h1 className='text-accent-800 text-xl font-bold'>
                ChessMasters
              </h1>
              <p className='text-accent-500 -mt-1 text-xs'>Elite Players Hub</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className='hidden items-center gap-6 md:flex'>
            <Link
              href={grandmasterPath()}
              className='text-accent-600 hover:text-primary-600 font-medium transition-colors'
            >
              Grandmasters
            </Link>
            <Link
              href='#'
              className='text-accent-600 hover:text-primary-600 font-medium transition-colors'
            >
              Rankings
            </Link>
            <Link
              href='#'
              className='text-accent-600 hover:text-primary-600 font-medium transition-colors'
            >
              Tournaments
            </Link>
          </nav>

          {/* Search Icon (Mobile) */}
          <button className='text-accent-600 hover:text-primary-600 p-2 transition-colors md:hidden'>
            <Search className='h-5 w-5' />
          </button>
        </div>
      </div>
    </header>
  );
}

export { Header };
