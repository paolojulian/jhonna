'use client';
import AppBentoBox from '@/components/AppBentoBox';
import AppTextarea from '@/components/AppTextArea';
import AppTextInput from '@/components/AppTextInput';
import AppTypography from '@/components/AppTypography';
import { EmailIcon, LinkedInIcon, PhoneIcon } from '@/components/icons';
import ArrowUpperRightIcon from '@/components/icons/ArrowUpperRightIcon';
import cn from '@/utils/cn';
import { FC, FormEvent, useEffect, useState } from 'react';

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

type ContactCardProps = object;

const ContactCard: FC<ContactCardProps> = () => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);
  const [form, setForm] = useState<ContactFormValues>({
    email: '',
    message: '',
    name: '',
  });

  useEffect(() => {
    if (isSent) {
      const timeout = setTimeout(() => {
        setIsSent(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [isSent]);

  const handleFormChange =
    (name: keyof ContactFormValues) => (value?: string | number) => {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsSending(true);
      const response = await fetch('/api/contact-me', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      setIsSent(true);
      setForm({
        email: '',
        message: '',
        name: '',
      });
    } catch (e) {
      console.error(e);
      alert('Unable to send the message, please try again later!');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <AppBentoBox className='row-span-2 bg-lavender-mist p-6'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6 h-full'>
        <div className='flex flex-row justify-end gap-2'>
          <a className='size-[28px] rounded-full bg-peacoat flex items-center justify-center'>
            <LinkedInIcon />
          </a>
          <a className='size-[28px] rounded-full bg-peacoat flex items-center justify-center'>
            <EmailIcon />
          </a>
          <a className='size-[28px] rounded-full bg-peacoat flex items-center justify-center'>
            <PhoneIcon />
          </a>
        </div>

        <div>
          <AppTypography variant={'heading-lg'} className='text-peacoat'>
            GET
          </AppTypography>
          <AppTypography variant={'heading-lg'} className='text-peacoat'>
            IN
          </AppTypography>
          <AppTypography variant={'heading-lg'} className='text-peacoat'>
            TOUCH
          </AppTypography>
        </div>

        <AppTypography
          variant='body-wide'
          className='md:hidden xl:block border-y-3 border-peacoat py-1 text-center text-peacoat'
        >
          MON - FRI • 9AM - 6PM
        </AppTypography>

        <div className='mt-auto flex-1 flex flex-col justify-center gap-2'>
          <AppTextInput
            onChangeText={handleFormChange('name')}
            label='Name'
            id='name'
            name='name'
            placeholder='Enter your name..'
            value={form.name}
            required
          />
          <AppTextInput
            onChangeText={handleFormChange('email')}
            label='Email'
            id='email'
            name='email'
            type='email'
            placeholder='Enter your email address..'
            value={form.email}
            required
          />
          <AppTextarea
            onChangeText={handleFormChange('message')}
            label='Tell me about it'
            id='message'
            name='message'
            placeholder='...'
            rows={2}
            value={form.message}
            required
          />
        </div>
        <button
          type='submit'
          className={cn(
            'px-6 py-4 bg-peacoat text-white rounded-2xl hover:bg-linen hover:text-peacoat transition-all cursor-pointer',
            {
              'pointer-events-none animate-pulse': isSending,
              'bg-emerald-400 text-emerald-900 pointer-events-none': isSent,
            }
          )}
          disabled={isSending || isSent}
        >
          {isSending && <AppTypography>Sending...</AppTypography>}
          {isSent && <AppTypography>Message has been sent!</AppTypography>}
          {!isSending && !isSent && (
            <span className='flex flex-row justify-center gap-2 items-center pl-2'>
              <AppTypography as='span'>Send</AppTypography>
              <ArrowUpperRightIcon />
            </span>
          )}
        </button>
      </form>
    </AppBentoBox>
  );
};

export default ContactCard;
