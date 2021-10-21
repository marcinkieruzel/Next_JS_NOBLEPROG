import React from 'react'
import Link from 'next/link'

type Props = {
  users: Array<{ id: number; name: string }>
  error: boolean
}

const index: React.FC<Props> = ({ users }): JSX.Element => {
  return (
    <div>
      {users.map((x) => {
        return (
          <li key={x.id}>
            <Link href={`/usersssg/${x.id}`}>
              <a href={`/usersssg/${x.id}`}>{x.name}</a>
            </Link>
          </li>
        )
      })}
    </div>
  )
}

export default index

export const getStaticProps = async (): Promise<{ props: Props }> => {
  try {
    const res = await fetch('http://localhost:5000/users')
    return {
      props: {
        users: await res.json(),
        error: false,
      },
    }
  } catch (error) {
    return {
      props: {
        users: [],
        error: error,
      },
    }
  }
}
