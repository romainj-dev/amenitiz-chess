'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';

function createPageURL(
  pathname: string,
  searchParams: URLSearchParams,
  pageNumber: number | string,
) {
  const params = new URLSearchParams(searchParams);
  params.set('page', pageNumber.toString());
  return `${pathname}?${params.toString()}`;
}

function getVisiblePages(
  currentPage: number,
  totalPages: number,
  isMobile: boolean,
) {
  if (isMobile) return [currentPage];

  const allPages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return allPages.filter(
    (page) =>
      page === 1 ||
      page === totalPages ||
      (page >= currentPage - 1 && page <= currentPage + 1),
  );
}

interface PaginationProps {
  totalPages: number;
}

export function Pagination({ totalPages }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const isMobile = useMediaQuery({ maxWidth: 767 }); // 768px is Tailwind's md breakpoint

  const visiblePages = getVisiblePages(currentPage, totalPages, isMobile);

  return (
    <div className='mt-8 flex items-center justify-center gap-2'>
      <Link
        href={createPageURL(pathname, searchParams, currentPage - 1)}
        className={`flex items-center justify-center rounded-md border p-2 ${
          currentPage <= 1
            ? 'pointer-events-none text-gray-300'
            : 'hover:bg-gray-100'
        }`}
      >
        <ChevronLeft className='h-4 w-4' />
      </Link>

      {visiblePages.map((page, index) => {
        const isEllipsis = index > 0 && visiblePages[index - 1] !== page - 1;

        return (
          <div key={page} className='flex items-center'>
            {isEllipsis && <span className='px-2 text-gray-500'>...</span>}
            <Link
              href={createPageURL(pathname, searchParams, page)}
              className={`flex items-center justify-center rounded-md border px-4 py-2 ${
                currentPage === page
                  ? 'bg-primary-500 pointer-events-none text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              {page}
            </Link>
          </div>
        );
      })}

      <Link
        href={createPageURL(pathname, searchParams, currentPage + 1)}
        className={`flex items-center justify-center rounded-md border p-2 ${
          currentPage >= totalPages
            ? 'pointer-events-none text-gray-300'
            : 'hover:bg-gray-100'
        }`}
      >
        <ChevronRight className='h-4 w-4' />
      </Link>
    </div>
  );
}
