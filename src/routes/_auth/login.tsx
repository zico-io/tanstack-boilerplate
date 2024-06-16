import { useForm } from 'react-hook-form'
import { Link, createFileRoute, useRouter } from '@tanstack/react-router'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAxios, isAxiosError } from '@/lib/axios'

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export const Route = createFileRoute('/_auth/login')({
  component: () => {
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()
    const queryClient = useQueryClient()

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: '',
        password: '',
      },
    })

    const login = useMutation({
      mutationFn: (data: z.infer<typeof formSchema>) =>
        useAxios
          .post(`/account/sessions/email`, data, {
            withCredentials: true,
          })
          .then((res) =>
            queryClient.setQueryData(['account/sessions/current'], res.data),
          )
          .catch((e: unknown) => {
            if (isAxiosError(e)) {
              if (e.status === 401) throw new Error('Invalid credentials')
            }
          }),
    }).mutateAsync

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      setIsLoading(true)
      await login(values)
        .then(() => router.navigate({ to: '/dashboard' }))
        .catch((e: unknown) => {
          console.error(e)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }

    return (
      <>
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <Form {...form}>
          <form
            /* eslint-disable */
            onSubmit={form.handleSubmit(onSubmit)}
            /* eslint-enable */
            className="grid gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="me@garf.dev"
                      autoComplete="username"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      autoComplete="current-password"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Login'}
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{' '}
              <Link to="/register" className="underline">
                Register now
              </Link>
            </div>
          </form>
        </Form>
      </>
    )
  },
})
