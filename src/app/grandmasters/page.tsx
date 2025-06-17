import Link from 'next/link';
import { GrandmasterItem } from '@/features/grandmasters/components/grandmaster-item';
import { Pagination } from '@/features/grandmasters/components/pagination';
import { getGrandmasters } from '@/features/grandmasters/queries/get-grandmasters';
import { grandmasterDetailPath } from '@/paths';

const ITEMS_PER_PAGE = 12;

interface PageProps {
  searchParams?: Promise<{
    page?: string;
  }>;
}

const GrandmastersPage = async ({ searchParams }: PageProps) => {
  const params = await searchParams;
  const currentPage = Number(params?.page) || 1;
  const { data: grandmasters, totalPages } = await getGrandmasters(
    currentPage,
    ITEMS_PER_PAGE,
  );

  return (
    <div className='from-primary-50 to-accent-100 min-h-screen bg-gradient-to-br'>
      <div className='container mx-auto px-4 py-6'>
        {/* Grandmasters Grid */}
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {grandmasters.map((grandmaster) => (
            <Link
              key={grandmaster.username}
              href={grandmasterDetailPath(grandmaster.username)}
              className='group'
            >
              <GrandmasterItem grandmaster={grandmaster} />
            </Link>
          ))}
        </div>

        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default GrandmastersPage;
