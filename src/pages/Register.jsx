import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback, Instructions } from '../components';

const Register = () => {
  return (
    <div className='flex flex-col items-center'>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <form>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4'>
            <legend className='fieldset-legend'>Register to our newsletter</legend>
            <label className='label'>Email</label>
            <input className='input w-full' name='email' placeholder='Email' />
            <button className='btn btn-neutral mt-4'>Register!</button>
          </fieldset>
        </form>
      </ErrorBoundary>
      <Instructions path='/register.md' />
    </div>
  );
};

export default Register;
