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

import { signInWithEmailAndPassoword } from './actions'

export function SignInForm() {
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('signIn')

  const [{ success, message, errors }, handleSubmit, isPending] = useFormState(
    signInWithEmailAndPassoword,
    () => {
      router.push(`/${locale}/dashboard`)
    },
  )

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        {success === false && message && (
          <Alert variant={'destructive'}>
            <AlertTriangle className="size-4" />
            <AlertTitle>{t('signInFailed')}</AlertTitle>
            <AlertDescription>
              <p>{message}</p>
            </AlertDescription>
          </Alert>
        )}
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input name="email" type="email" id="email" />
          {errors?.email && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.email[0]}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input name="password" type="password" id="password" />
          {errors?.password && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.password[0]}
            </p>
          )}
          <Link
            href={'/auth/forgot-password'}
            className="text-xs font-medium text-foreground hover:underline"
          >
            {t('forgetPassword')}
          </Link>
        </div>

        <Button disabled={isPending} className="w-full">
          {isPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            t('signInWithEmail')
          )}
        </Button>

        <Button className="w-full" size={'sm'} variant={'link'} asChild>
          <Link href={`/${locale}/auth/sign-up`}>{t('createNewAccount')}</Link>
        </Button>
      </form>
    </>
  )
}
