import Link from 'next/link';
import { grandmasterPath } from '@/paths';

const HomePage = () => {
  return (
    <div className='flex flex-1 flex-col gap-y-8 px-8 py-24'>
      <div className='flex flex-1 flex-col items-center justify-center gap-y-2 px-8'>
        <h2 className='text-center text-3xl font-bold tracking-tight'>
          Amenitiz Chess
        </h2>
        <p className='text-muted-foreground text-center text-sm'>
          Made with ❤️ by Romain J.
        </p>
      </div>

      <div className='flex flex-1 flex-col items-center'>
        <Link href={grandmasterPath()}>Go to Grandmasters</Link>
      </div>
    </div>
  );
};

export default HomePage;
