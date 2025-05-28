import { use, useActionState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { SearchForm, SearchResults } from '../components';
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
      <div className='mockup-code mt-5'>
        <pre>
          <code>Right now, the promise returned by searchProducts is being passed down to the</code>
        </pre>
        <pre>
          <code>SearchResults component as a prop to show some initial data.</code>
        </pre>
        <pre>
          <code>In this component (Search):</code>
        </pre>
        <pre data-prefix='1'>
          <code>- Create an action that will take the formData</code>
        </pre>
        <pre data-prefix='2'>
          <code>- Pass that action to useActionState to compose it</code>
        </pre>
        <pre data-prefix='3'>
          <code>
            - Pass the productsPromise result as the initial state value for useActionState (you
          </code>
        </pre>
        <pre>
          <code>might need the use hook to read the value of the promise)</code>
        </pre>
        <pre data-prefix='4'>
          <code>- Modify SearchResults to receive the products as prop directly</code>
        </pre>
        <pre data-prefix='5'>
          <code>
            - Connect your form to the action returned by useActionState, remember that when
          </code>
        </pre>
        <pre>
          <code>composing actions with this hook, your action now takes two parameters!</code>
        </pre>
        <pre data-prefix='6'>
          <code>
            - Modify your action so it calls searchProducts with the right filters and returns and
            object,
          </code>
        </pre>
        <pre data-prefix='6'>
          <code>
            the state, with a key of produdcts with the array of products found, or a key or errors
            if any
          </code>
        </pre>
        <pre data-prefix='7'>
          <code>- Use the errors from the action state to show feedback to the user</code>
        </pre>
        <pre data-prefix='8'>
          <code>- Control the form inputs with local state to avoid resetting afer submission</code>
        </pre>
      </div>
    </div>
  );
};

export default Search;
