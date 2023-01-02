import Link from 'next/link'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'
import { useState } from 'react'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { useMutation } from '@apollo/client'
import { MUTATION_REGISTER } from 'graphql/mutations/register'

const FormSignUp = () => {
  const [value, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: ''
  })

  const [createUser] = useMutation(MUTATION_REGISTER)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    createUser({
      variables: {
        input: value
      }
    })
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          icon={<AccountCircle />}
          onInputChange={(v) => setValues({ ...value, username: v })}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
          onInputChange={(v) => setValues({ ...value, email: v })}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
          onInputChange={(v) => setValues({ ...value, password: v })}
        />
        <TextField
          name="confirm-password"
          placeholder="Confirm password"
          type="password"
          icon={<Lock />}
          // onInputChange={(v) => setValues({ ...value, confrmPassword: v })}
        />

        <Button size="large" fullWidth type="submit">
          Sign up now
        </Button>

        <S.FormLink>
          Already have an account?{' '}
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </S.FormLink>
      </form>
    </S.Wrapper>
  )
}
export default FormSignUp
