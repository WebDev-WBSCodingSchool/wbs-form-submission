const SearchResults = ({ products }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-6 w-full max-w-6xl mx-auto'>
      {products.length === 0 ? (
        <div className='col-span-full text-center text-gray-500'>No products found.</div>
      ) : (
        products.map(product => (
          <div key={product.id} className='card bg-base-100 shadow-lg p-4 border rounded-box'>
            <div className='h-48 bg-white flex items-center justify-center rounded'>
              <img
                src={product.image}
                alt={product.title}
                className='object-contain h-full max-h-48'
              />
            </div>
            <div className='mt-4'>
              <h2 className='font-bold text-lg line-clamp-1'>{product.title}</h2>
              <p className='text-sm text-gray-600 line-clamp-2 mt-1'>{product.description}</p>
              <div className='mt-2 font-semibold'>${product.price}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResults;
