import React from 'react'

export const Home = ({ posts }): JSX.Element => {
  return (
    <div>
      {posts.map((x, i) => {
        return <li key={i}>{x.name}</li>
      })}
    </div>
  )
}

export default Home

export async function getServerSideProps({ res }) {

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const data = await fetch('http://localhost:4000/products')

  console.warn("x");
  

  return {
    props: {
      // date: new Date().toLocaleString(),
      posts: await data.json(),
    },
  }
}
