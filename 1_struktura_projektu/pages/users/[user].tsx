import React from 'react'

type Props = {
  user: { id: number; name: string }
}

const index: React.FC<Props> = ({ user }): JSX.Element => {
  return <div>{user?.name}</div>
}

export default index

export const getServerSideProps = async (context) => {

  try {
    const res = await fetch(
      `http://localhost:5000/users/${context?.query?.user}`
    )
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
