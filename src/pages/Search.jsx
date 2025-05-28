import { use, useActionState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Instructions, SearchForm, SearchResults } from '../components';
import { searchProducts } from '../api/index.js';

const productsPromise = searchProducts();

const Search = () => {
  const action = async (prevState, formData) => {
    const category = formData.get('category');
    const minPrice = isNaN(parseFloat(formData.get('minPrice')))
      ? undefined
      : parseFloat(formData.get('minPrice'));
    const maxPrice = isNaN(parseFloat(formData.get('maxPrice')))
      ? undefined
      : parseFloat(formData.get('maxPrice'));
    const query = formData.get('query');
    const { error, products } = await searchProducts({
      category,
      minPrice,
      maxPrice,
      query
    });
    return { error, products };
  };

  const [state, formAction, isPending] = useActionState(action, use(productsPromise));

  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <div className='flex flex-col items-center'>
      <SearchForm formAction={formAction} isPending={isPending} />
      <SearchResults products={state.products} />
      <Instructions path='/search.md' />
    </div>
  );
};

export default Search;
