import { useState } from 'react'

import {
  CheckCircleOutline,
  Email,
  ErrorOutline
} from '@styled-icons/material-outlined'

import {
  FormWrapper,
  FormLoading,
  FormError,
  FormSuccess
} from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { FieldsErrors, forgotPasswordValidate } from 'utils/validation'
import { useRouter } from 'next/router'

const FormForgotPassword = () => {
  const [success, setSuccess] = useState(false)
  const { query } = useRouter()
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldsErrors>({})
  const [values, setValues] = useState({
    email: (query.email as string) || ''
  })
  const [loading, setLoading] = useState(false)

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = forgotPasswordValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    //Send post request to forgot password
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }
    )

    const data = await response.json()
    setLoading(false)

    if (data.error) {
      setFormError(data.message[0].messages[0].message)
      return
    }

    setFormError('')
    setSuccess(true)
  }

  return (
    <FormWrapper>
      {success ? (
        <FormSuccess>
          <CheckCircleOutline />
          You just received an email!
        </FormSuccess>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            name="email"
            placeholder="Email"
            type="email"
            initialValue={query.email as string}
            error={fieldError.email}
            onInputChange={(v) => handleInput('email', v)}
            icon={<Email />}
          />

          <Button type="submit" size="large" fullWidth disabled={loading}>
            {loading ? <FormLoading /> : <span>Send email</span>}
          </Button>
        </form>
      )}

      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
    </FormWrapper>
  )
}

export default FormForgotPassword
