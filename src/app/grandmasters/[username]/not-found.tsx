import { ArrowLeft, Crown } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='from-primary-50 to-accent-100 flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br'>
      <div className='shadow-strong border-accent-200 mx-4 max-w-md rounded-xl border bg-white p-8 text-center'>
        <div className='mb-6 flex items-center justify-center gap-2'>
          <Crown className='text-secondary-600 h-12 w-12' />
        </div>
        <h1 className='text-accent-800 mb-4 text-4xl font-bold'>
          Grandmaster Not Found
        </h1>
        <p className='text-accent-600 mb-8'>
          {`The grandmaster you're looking for doesn't exist in our database.`}
        </p>
        <Link
          href='/'
          className='from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-medium inline-flex items-center gap-2 rounded-lg bg-gradient-to-r px-6 py-3 font-medium text-white transition-all duration-200'
        >
          <ArrowLeft className='h-4 w-4' />
          Back to Grandmasters
        </Link>
      </div>
    </div>
  );
}
