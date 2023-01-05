import FormProfile from 'components/FormProfile'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
import protectedRoutes from 'utils/protected-routes'

export default function Me() {
  return (
    <Profile>
      <FormProfile />
    </Profile>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const session = await protectedRoutes(ctx)

  return {
    props: {
      session
    }
  }
}
