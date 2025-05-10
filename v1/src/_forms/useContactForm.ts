'use client';
import { useState } from "react";
import { sendContactForm } from "../_api/contact";

import * as Yup from 'yup'

export interface IContactForm {
  name: string;
  email: string;
  text: string;
}

export const contactFormSchema = Yup.object({
  name: Yup.string().required().label('name'),
  email: Yup.string().email().required().max(320).label('email'),
  text: Yup.string().required().max(5000).label('message'),
});

const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (form: IContactForm) => {
    setError('');
    try {
      setIsLoading(true);
      await sendContactForm(form)
      setIsFinished(true);
    } catch (e) {
      setError('something went wrong.')
      setTimeout(() => {
        setError('')
      }, 5000)
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    isFinished,
    error,
    handleSubmit
  }
}

export default useContactForm;