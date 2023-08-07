import AppButton from '@/_components/form/app-btn';
import FormControl from '@/_components/form/form-control';
import TextInput from '@/_components/form/text-input';
import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import Image from 'next/image';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';

export type ContactSectionProps = {
  // no props
};

const ContactSection: FunctionComponent<ContactSectionProps> = () => {
  return (
    <section id='contact' className='z-50 bg-black relative'>
      <div className='flex flex-col md:flex-row max-w-screen-xl mx-auto w-full py-24'>
        <Stack className='w-sidenav p-12 space-y-12'>
          <h2 className='text-6xl text-bg font-semibold'>get in touch</h2>
          <form className='w-full flex flex-col space-y-4'>
            <FormControl>
              <TextInput name='name' placeholder='name' />
            </FormControl>
            <FormControl>
              <TextInput name='email' placeholder='email' type='email' />
            </FormControl>
            <FormControl>
              <TextInput
                name='tell me about it'
                placeholder='tell me about it'
              />
            </FormControl>
            <div className='pt-8'>
              <AppButton type='submit'>send</AppButton>
            </div>
          </form>
        </Stack>
        <div className='flex-1 p-12'>
          <p className='hidden lg:block font-dm-mono font-medium text-[200px] tracking-[-20px] -z-10'>
            jhonn<span className='tracking-[-40px]'>a</span>.
          </p>
          <div className='flex flex-col lg:flex-row text-center md:text-left text-bg-light space-y-8 lg:space-y-0 lg:space-x-12'>
            <Stack>
              <p className='mb-2 text-bg-secondary'>availability</p>
              <p>Monday - Friday</p>
              <p>9AM - 6PM</p>
              <p>Weekends</p>
              <p>Emails only</p>
            </Stack>
            <Stack>
              <p className='mb-2 text-bg-secondary'>address</p>
              <p>Baguio City, Philippines</p>
              <p>2600</p>
            </Stack>
            <Stack>
              <p className='mb-2 text-bg-secondary'>support</p>
              <Link
                target='_blank'
                href='linkedin.com'
                className='hover:text-accent'
              >
                <p>linkedin</p>
              </Link>
              <Link
                target='_blank'
                href='mailto:jhonnagines@gmail.com'
                className='hover:text-accent'
              >
                <p>jhonnagines@gmail.com</p>
              </Link>
            </Stack>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
