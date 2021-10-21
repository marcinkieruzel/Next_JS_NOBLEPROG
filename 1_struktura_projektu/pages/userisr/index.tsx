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
            <Link href={`/userisr/${x.id}`}>
              <a href={`/userisr/${x.id}`}>{x.name}</a>
            </Link>
          </li>
        )
      })}
    </div>
  )
}

export default index

export const getStaticProps = async (): Promise<{
  props: Props
  revalidate: number
}> => {
  try {
    const res = await fetch('http://localhost:5000/users')
    return {
      props: {
        users: await res.json(),
        error: false,
      },
      revalidate: 10,
    }
  } catch (error) {
    return {
      props: {
        users: [],
        error: error,
      },
      revalidate: 10,
    }
  }
}
