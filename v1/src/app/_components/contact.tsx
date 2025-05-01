'use client';
import AppButton from '@/_components/form/app-btn';
import FormControl from '@/_components/form/form-control';
import TextInput from '@/_components/form/text-input';
import Stack from '@/_components/layouts/stack';
import useContactForm, { contactFormSchema } from '@/_forms/useContactForm';
import { Formik } from 'formik';
import Link from 'next/link';
import React, { FunctionComponent, useState } from 'react';

export type ContactSectionProps = {
  // no props
};

const ContactSection: FunctionComponent<ContactSectionProps> = () => {
  const { isLoading, handleSubmit, error } = useContactForm();
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <section id='contact' className='z-40 bg-black relative'>
      <div className='flex flex-col md:flex-row max-w-screen-xl mx-auto w-full py-24'>
        <Stack className='w-sidenav p-12 space-y-12'>
          <h2 className='text-6xl text-bg font-semibold'>get in touch</h2>
          <Formik
            onSubmit={(credentials, actions) => {
              handleSubmit(credentials).then(() => {
                setIsSuccess(true);
                actions.resetForm();
                actions.setSubmitting(false);

                setTimeout(() => {
                  setIsSuccess(false);
                }, 2000);
              });
            }}
            validationSchema={contactFormSchema}
            initialValues={{
              name: '',
              email: '',
              text: '',
            }}
          >
            {({
              handleSubmit,
              handleBlur,
              handleChange,
              touched,
              errors,
              values,
            }) => (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  await handleSubmit();
                }}
                className='w-full flex flex-col space-y-4'
                noValidate
              >
                <FormControl
                  error={touched.name && errors.name ? errors.name : undefined}
                >
                  <TextInput
                    name='name'
                    placeholder='name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isError={!!touched.name && !!errors.name}
                    value={values.name}
                  />
                </FormControl>
                <FormControl
                  error={
                    touched.email && errors.email ? errors.email : undefined
                  }
                >
                  <TextInput
                    name='email'
                    placeholder='email'
                    type='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isError={!!touched.email && !!errors.email}
                    value={values.email}
                  />
                </FormControl>
                <FormControl
                  error={touched.text && errors.text ? errors.text : undefined}
                >
                  <TextInput
                    name='text'
                    placeholder='tell me about it'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isError={!!touched.text && !!errors.text}
                    value={values.text}
                  />
                </FormControl>
                <div className='pt-8'>
                  <AppButton
                    loadingText='sending'
                    successText='sent!'
                    type='submit'
                    state={
                      isLoading
                        ? 'loading'
                        : !!error
                        ? 'error'
                        : !!isSuccess
                        ? 'success'
                        : 'default'
                    }
                  >
                    send
                  </AppButton>
                </div>
              </form>
            )}
          </Formik>
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
                href='https://www.linkedin.com/in/jhonna-mae-gines-06a8861a6/'
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
