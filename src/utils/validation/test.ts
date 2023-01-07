import {
  forgotPasswordValidate,
  resetPasswordValidate,
  signInValidate,
  signUpValidate
} from './index'

describe('Validation', () => {
  describe('signInValidate', () => {
    it('should validate empty fields', () => {
      const data = {
        email: '',
        password: ''
      }

      expect(signInValidate(data)).toMatchObject({
        email: '"email" is not allowed to be empty',
        password: '"password" is not allowed to be empty'
      })
    })

    it('should validate invalid email', () => {
      const data = {
        email: 'invalid-email',
        password: '123456'
      }

      expect(signInValidate(data)).toMatchObject({
        email: '"email" must be a valid email'
      })

      expect(signInValidate(data)).toMatchInlineSnapshot(`
Object {
  "email": "\\"email\\" must be a valid email",
}
`)
    })
  })

  describe('signUpValidate', () => {
    it('should validate empty fields', () => {
      const data = {
        username: '',
        email: '',
        password: ''
      }

      expect(signUpValidate(data)).toMatchObject({
        username: '"username" is not allowed to be empty',
        email: '"email" is not allowed to be empty',
        password: '"password" is not allowed to be empty',
        confirm_password: expect.any(String)
      })
    })

    it('should return short username error', () => {
      const data = {
        username: 'a',
        email: '',
        password: '123456'
      }

      expect(signUpValidate(data)).toMatchObject({
        username: '"username" length must be at least 3 characters long'
      })
    })

    it('should return invalid email error', () => {
      const data = {
        username: 'username',
        email: 'invalid-email',
        password: '123456'
      }

      expect(signUpValidate(data)).toMatchObject({
        email: '"email" must be a valid email'
      })
    })

    it('should return invalid password error', () => {
      const data = {
        username: 'username',
        email: 'username@email.com',
        password: '123',
        confirm_password: '1234'
      }

      expect(signUpValidate(data)).toMatchObject({
        confirm_password: 'confirm password must be equal to password'
      })
    })
  })

  describe('forgotPasswordValidate', () => {
    it('should validate empty fields', () => {
      const data = {
        email: ''
      }

      expect(forgotPasswordValidate(data)).toMatchObject({
        email: '"email" is not allowed to be empty'
      })
    })

    it('should validate invalid email', () => {
      const data = {
        email: 'invalid-email'
      }

      expect(forgotPasswordValidate(data)).toMatchObject({
        email: '"email" must be a valid email'
      })
    })
  })

  describe('resetPasswordValidate', () => {
    const data = {
      password: '',
      confirm_password: ''
    }

    it('should validate empty password', () => {
      expect(resetPasswordValidate(data)).toMatchObject({
        password: expect.any(String)
      })
    })

    it('should validate empty confirm_password', () => {
      expect(
        resetPasswordValidate({ ...data, password: '123456' })
      ).toMatchObject({
        confirm_password: expect.any(String)
      })
    })

    it('should validate invalid confirm_password', () => {
      expect(
        resetPasswordValidate({
          password: '123456',
          confirm_password: '1234567'
        })
      ).toMatchObject({
        confirm_password: expect.any(String)
      })
    })
  })
})
