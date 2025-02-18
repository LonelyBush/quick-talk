'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';
import Input from '../input/input';

const Search = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    if (event.target.value) {
      params.set('search', event.target.value);
    } else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Input
      name="search"
      type="text"
      onChange={(e) => {
        handleSearch(e);
      }}
      placeholder={placeholder}
    />
  );
};

export default Search;
