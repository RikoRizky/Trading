'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-hot-toast';

// =====================
// TYPE FORM DATA
// =====================
interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
  agreeToTerms: boolean;
}

// =====================
// PAGE COMPONENT
// =====================
export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  // =====================
  // SUBMIT HANDLER (FIX UTAMA)
  // =====================
  const onSubmit: SubmitHandler<RegisterFormData> = async (form) => {
    setIsLoading(true);

    try {
      // SIMULASI API / AUTH
      // ganti dengan logic auth kamu (Supabase / Firebase / API)
      console.log('REGISTER DATA:', form);

      // simulasi delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success('Registrasi berhasil!');
      router.push('/login');

    } catch (err) {
      console.error('REGISTER ERROR:', err);

      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error('Terjadi kesalahan tak terduga');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // =====================
  // UI
  // =====================
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-lg bg-white p-6 shadow"
      >
        <h1 className="mb-6 text-center text-2xl font-bold">
          Register
        </h1>

        {/* FULL NAME */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            {...register('fullName', { required: 'Nama wajib diisi' })}
            className="w-full rounded border px-3 py-2"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* EMAIL */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            {...register('email', { required: 'Email wajib diisi' })}
            className="w-full rounded border px-3 py-2"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* PASSWORD */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            {...register('password', {
              required: 'Password wajib diisi',
              minLength: {
                value: 6,
                message: 'Minimal 6 karakter',
              },
            })}
            className="w-full rounded border px-3 py-2"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* TERMS */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            {...register('agreeToTerms', {
              required: 'Kamu harus menyetujui syarat',
            })}
            className="mr-2"
          />
          <span className="text-sm">
            Saya setuju dengan syarat & ketentuan
          </span>
        </div>
        {errors.agreeToTerms && (
          <p className="mb-4 text-sm text-red-500">
            {errors.agreeToTerms.message}
          </p>
        )}

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded bg-black py-2 text-white hover:bg-gray-800 disabled:opacity-50"
        >
          {isLoading ? 'Loading...' : 'Register'}
        </button>
      </form>
    </div>
  );
}
