### Create a search page

Right now, the promise returned by searchProducts is being passed down to the
SearchResults component as a prop to show some initial data.
In this component (`Search`):

- In your editor go to `src/pages/Search.jsx`
- Create an `action` that will take the `formData` from `SearchForm.jsx`
- Pass that `action` to `useActionState` to compose it
- Pass the result of `productsPromise` as the initial state value for `useActionState` (you
  might need the `use` function from React to read the value of the promise)
- Modify `SearchResults` to receive the `products` as prop directly
- Connect your form to the action returned by `useActionState`, remember that when
  composing actions with this hook, your action now takes two parameters!
- Modify your `action` so it calls `searchProducts` with the right filters and returns an object,
  the state, with a key of `products` with the array of products found, or a key of `error` if any
- Use the errors from the action state to show feedback to the user
- Control the form inputs with local state to avoid resetting after submission
