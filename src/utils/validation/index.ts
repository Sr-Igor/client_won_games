import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import Joi from 'joi'

const fieldsValidation = {
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  username: Joi.string().min(3).required(),
  confirm_password: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.only': 'confirm password must be equal to password'
    })
}

export type FieldsErrors = {
  [key: string]: string
}

const getFieldsErrors = (error: Joi.ValidationResult) => {
  const errors: FieldsErrors = {}

  if (error.error) {
    error.error.details.forEach((err) => {
      errors[err.path.join('.') as string] = err.message
    })
  }

  return errors
}

export const signUpValidate = (data: UsersPermissionsRegisterInput) => {
  const { email, password, username, confirm_password } = fieldsValidation
  const schema = Joi.object({
    email,
    password,
    username,
    confirm_password
  })

  return getFieldsErrors(schema.validate(data, { abortEarly: false }))
}

type SignInData = Omit<UsersPermissionsRegisterInput, 'username'>
export const signInValidate = (data: SignInData) => {
  const { email, password } = fieldsValidation
  const schema = Joi.object({ email, password })

  return getFieldsErrors(schema.validate(data, { abortEarly: false }))
}

export const forgotPasswordValidate = (values: { email: string }) => {
  const { email } = fieldsValidation
  const schema = Joi.object({ email })

  return getFieldsErrors(schema.validate(values, { abortEarly: false }))
}

export const resetPasswordValidate = (values: {
  password: string
  confirm_password: string
}) => {
  const { password, confirm_password } = fieldsValidation
  const schema = Joi.object({ password, confirm_password })

  return getFieldsErrors(schema.validate(values, { abortEarly: false }))
}
