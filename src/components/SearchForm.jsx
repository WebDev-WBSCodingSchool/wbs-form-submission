import { useState } from 'react';

const SearchForm = ({ formAction, isPending }) => {
  const [{ category, minPrice, maxPrice, query }, setFormData] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    query: ''
  });

  const handleInputChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form action={formAction} className='w-full max-w-4xl'>
      <fieldset className='bg-base-200 border border-base-300 rounded-box p-4'>
        <legend className='fieldset-legend mb-2'>Search Products</legend>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-4 items-end'>
          <div className='flex flex-col'>
            <label className='label text-sm font-medium'>Category</label>
            <input
              className='input input-bordered w-full'
              name='category'
              value={category}
              onChange={handleInputChange}
              placeholder='Category'
            />
          </div>
          <div className='flex flex-col'>
            <label className='label text-sm font-medium'>Min Price</label>
            <input
              type='number'
              className='input input-bordered w-full'
              name='minPrice'
              value={minPrice}
              onChange={handleInputChange}
              placeholder='Min'
            />
          </div>
          <div className='flex flex-col'>
            <label className='label text-sm font-medium'>Max Price</label>
            <input
              type='number'
              className='input input-bordered w-full'
              name='maxPrice'
              value={maxPrice}
              onChange={handleInputChange}
              placeholder='Max'
            />
          </div>
          <div className='flex flex-col'>
            <label className='label text-sm font-medium'>Description</label>
            <input
              className='input input-bordered w-full'
              name='query'
              value={query}
              onChange={handleInputChange}
              placeholder='Search keyword'
            />
          </div>
          <div className='flex justify-end md:items-end'>
            <button className='btn btn-neutral mt-4' disabled={isPending}>
              {isPending ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default SearchForm;
