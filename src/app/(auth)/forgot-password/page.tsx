'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { resetPassword } from '@/lib/auth';
import { toast } from 'react-hot-toast';
import Link from 'next/link';

interface ForgotFormData {
  email: string;
}

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotFormData>();

  const onSubmit = async (data: ForgotFormData) => {
    setIsLoading(true);
    try {
      const { error } = await resetPassword(data.email);
      if (error) {
        toast.error(error.message || 'Failed to send reset email');
      } else {
        toast.success('Reset link sent. Check your email.');
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
      console.error('Forgot password error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigoSteel-dark via-indigoSteel-light to-indigoSteel-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Forgot your password?
          </h2>
          <p className="mt-2 text-center text-sm text-white/80">
            Enter your email and we'll send you a reset link.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address',
                },
              })}
              type="email"
              autoComplete="email"
              className="input"
              placeholder="Enter your email"
            />
            {errors.email && <p className="form-error">{errors.email.message}</p>}
          </div>

          <button type="submit" disabled={isLoading} className="btn btn-primary btn-lg w-full">
            {isLoading ? 'Sending…' : 'Send reset link'}
          </button>

          <div className="text-center text-sm text-white/80">
            <Link href="/login" className="text-primary-400 hover:text-primary-300">Back to login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}





