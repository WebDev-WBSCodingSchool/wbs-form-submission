import { useFormStatus } from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { toast } from 'react-toastify';
import { ErrorFallback } from '../components';
import { sendContactForm } from '../api';

const Submit = () => {
  const { pending } = useFormStatus();
  return (
    <button className='btn btn-neutral mt-4' disabled={pending}>
      {pending ? 'Sending...' : 'Send'}
    </button>
  );
};

const Contact = () => {
  const action = async formData => {
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const message = formData.get('message');
    const result = await sendContactForm({
      firstName,
      lastName,
      email,
      message
    });
    toast.success(result);
  };

  return (
    <div className='flex flex-col items-center'>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <form action={action}>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4'>
            <legend className='fieldset-legend'>Contact Us</legend>
            <label className='label'>First Name</label>
            <input className='input w-full' name='firstName' placeholder='First Name' />
            <label className='label'>Last Name</label>
            <input className='input w-full' name='lastName' placeholder='Last Name' />
            <label className='label'>Email</label>
            <input className='input w-full' name='email' placeholder='Email' />
            <label className='label'>Message</label>
            <textarea
              className='textarea w-full'
              name='message'
              placeholder='Your message'
              rows={4}
            />
            <Submit />
          </fieldset>
        </form>
      </ErrorBoundary>
      <div className='mockup-code mt-5'>
        <pre data-prefix='1'>
          <code>- Import sendContactForm from 'src/api/index.js';</code>
        </pre>
        <pre data-prefix='2'>
          <code>- Create an action for the form</code>
        </pre>
        <pre data-prefix='3'>
          <code>- Within the action, pass the form fields to sendContactForm</code>
        </pre>
        <pre data-prefix='4'>
          <code>- Disable the button and show "Sending" while the action is being executed</code>
        </pre>
      </div>
    </div>
  );
};

export default Contact;
