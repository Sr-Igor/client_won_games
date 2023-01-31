import {build, fake} from '@jackfranklin/test-data-bot'


export type User = {
  username: string
  email: string
  password: string
}

export const userBuilder = build<User>('User', {
  fields: {
    username: fake(f => f.internet.userName()),
    password: fake(f => f.internet.password()),
    email:'',
  },
  postBuild: user => {
    return {
      ...user,
      email: `${
        user.username
      }e2e@wongames.com`.toLowerCase(),
    }
  },

})
