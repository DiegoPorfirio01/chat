'use client'

import { AlertTriangle, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useFormState } from '@/hooks/useFormState'

import { signUpAction } from './actions'

export function SignUpForm() {
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('signUp')

  const [{ success, message, errors }, handleSubmit, isPending] = useFormState(
    signUpAction,
    () => {
      router.push(`${locale}/dashboard`)
    },
  )

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        {success === false && message && (
          <Alert variant={'destructive'}>
            <AlertTriangle className="size-4" />
            <AlertTitle>{t('signUpFailed')}</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}
        <div className="space-y-1">
          <Label htmlFor="name">{t('name')}</Label>
          <Input name="name" type="text" id="name" />
          {errors?.name && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.name[0]}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="email">{t('email')}</Label>
          <Input name="email" type="email" id="email" />
          {errors?.email && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.email[0]}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="password">{t('password')}</Label>
          <Input name="password" type="password" id="password" />
          {errors?.password && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.password[0]}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="password_confirmation">{t('confirmPassword')}</Label>
          <Input
            name="password_confirmation"
            type="password"
            id="password_confirmation"
          />
          {errors?.password_confirmation && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.password_confirmation[0]}
            </p>
          )}
        </div>

        <Button disabled={isPending} className="w-full">
          {isPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            t('createAccount')
          )}
        </Button>

        <Button className="w-full" size={'sm'} variant={'link'} asChild>
          <Link href={`/${locale}/auth/sign-in`}>{t('alreadyRegistered')}</Link>
        </Button>
      </form>
    </>
  )
}
