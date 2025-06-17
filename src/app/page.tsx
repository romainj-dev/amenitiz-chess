import Link from 'next/link';
import { grandmasterPath } from '@/paths';

const HomePage = () => {
  return (
    <div className='flex flex-1 flex-col gap-y-8'>
      <div className='px-8'>
        <h2 className='text-3xl font-bold tracking-tight'>
          Amenitiz Chess by Romain J.
        </h2>
        <p className='text-muted-foreground text-sm'>
          Thank you for considering my application!
        </p>
      </div>

      <div className='flex flex-1 flex-col items-center'>
        <Link href={grandmasterPath()}>Go to Grandmasters</Link>
      </div>
    </div>
  );
};

export default HomePage;
