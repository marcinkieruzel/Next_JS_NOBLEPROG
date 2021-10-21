import React from 'react'

type Props = {
  user: { id: number; name: string }
}

const index: React.FC<Props> = ({ user }): JSX.Element => {
  return <div>{user?.name}</div>
}

export default index

export const getStaticPaths = async () => {
  try {
    const res = await fetch('http://localhost:5000/users')
    const users = await res.json()

    console.warn(users, users?.map((x) => ({ params: { user: String(x.id) } })))

    return {
      paths: users.slice(0,100)?.map((x) => ({ params: { user: String(x.id) } })), // See the "paths" section below
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: true,
    }
  }
}

export const getStaticProps = async ({ params }) => {

  console.warn(params);
  

  try {
    const res = await fetch(`http://localhost:5000/users/${params?.user}`)
    return {
      props: {
        user: await res.json(),
      },
    }
  } catch (error) {
    return {
      props: {
        user: [],
      },
    }
  }
}
