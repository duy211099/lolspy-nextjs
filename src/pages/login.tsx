import React, { useEffect } from 'react'
import { Card } from 'components/Card'
import { Heading } from 'components/Heading'
import { FormProvider, useForm } from 'react-hook-form'
import { FormInput } from 'components/FormInput'
import { Button } from 'components/Button'
import { Text } from 'components/Text'
import { Checkbox } from 'components/Checkbox'
import { Divider } from 'components/Divider'
import { useAuthContext } from 'context/auth'
import { useRouter } from 'next/router'
import { DFROUTES } from 'constants/routes'
import { Logo } from 'components/Logo'

const loginFormDefaultValues = { email: '', password: '' }

const LoginPage = () => {
  const { push } = useRouter()
  const { login, isLogin } = useAuthContext()
  const formInstance = useForm({
    defaultValues: loginFormDefaultValues,
  })
  const { handleSubmit } = formInstance

  const onSubmit = (data: typeof loginFormDefaultValues) => {
    try {
      login(data.email, data.password)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (isLogin) {
      push(DFROUTES.DASHBOARD)
    }
  }, [isLogin, push])

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center space-y-8 bg-gray-100 pt-8 pb-28">
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 scale-125 transform">
          <Logo />
        </div>
        <div className="space-y-1">
          <Heading as="h3">Sign in to your account</Heading>
          <Text className="text-sm text-gray-500">
            Or <Button appearance="link">start your 14-day free trial</Button>
          </Text>
        </div>
      </div>
      <Card className="w-full max-w-[460px] !p-10">
        <FormProvider {...formInstance}>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              label="Email"
              placeholder="Email"
              name="email"
              fullWidth
              rules={{ required: 'Required' }}
            />
            <FormInput
              label="Password"
              placeholder="Password"
              name="password"
              type="password"
              fullWidth
              rules={{ required: 'Required' }}
            />
            <div className="flex items-center justify-between">
              <Checkbox>Remember me</Checkbox>
              <Button appearance="link" type="button">
                Forgot your password?
              </Button>
            </div>

            <Button appearance="primary" type="submit" fullWidth>
              Sign in
            </Button>

            <Divider>Or continue by</Divider>

            <Button
              type="button"
              fullWidth
              onClick={() => {
                login('test@d.foundation', 'test')
              }}
            >
              Use demo account
            </Button>
          </form>
        </FormProvider>
      </Card>
    </div>
  )
}

export default LoginPage
