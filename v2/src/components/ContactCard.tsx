'use client';
import AppBentoBox from '@/components/AppBentoBox';
import AppTextarea from '@/components/AppTextArea';
import AppTextInput from '@/components/AppTextInput';
import AppTypography from '@/components/AppTypography';
import { EmailIcon, LinkedInIcon, PhoneIcon } from '@/components/icons';
import ArrowUpperRightIcon from '@/components/icons/ArrowUpperRightIcon';
import { FC } from 'react';

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

type ContactCardProps = object;

const ContactCard: FC<ContactCardProps> = () => {
  const handleFormChange = (name: keyof ContactFormValues) => () => {
    console.log(name);
  };

  return (
    <AppBentoBox className='row-span-2 bg-lavender-mist p-6'>
      <form className='flex flex-col gap-6 h-full'>
        <div className='flex flex-row justify-end gap-4'>
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
          className='border-y-3 border-peacoat py-1 text-center text-peacoat'
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
            value={''}
          />
          <AppTextInput
            onChangeText={handleFormChange('email')}
            label='Email'
            id='email'
            name='email'
            placeholder='Enter your email address..'
            value={''}
          />
          <AppTextarea
            onChangeText={handleFormChange('message')}
            label='Tell me about it'
            id='message'
            name='message'
            placeholder='...'
            value={''}
          />
        </div>
        <button
          type='submit'
          className='px-6 py-4 bg-peacoat text-white rounded-2xl hover:bg-linen hover:text-peacoat transition-all cursor-pointer'
        >
          <span className='flex flex-row justify-center gap-2 items-center pl-2'>
            <AppTypography as='span'>Send</AppTypography>
            <ArrowUpperRightIcon />
          </span>
        </button>
      </form>
    </AppBentoBox>
  );
};

export default ContactCard;
