import Head from 'next/head'

export const Home = ({ powiaty }): JSX.Element => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      {powiaty.map((x, i) => {
        return <li key={i}>{x['Siedziba']}</li>
      })}
    </main>
  </div>
)

export default Home

export const getServerSideProps = async () => {

  try {
    let counter = 1
    while (counter < 100000000) {
      counter++
    }

    const res = await fetch('http://localhost:4000/poland')
    return {
      props: {
        powiaty: await res.json(),
      },
    }
  } catch (error) {
    return {
      props: {
        powiaty: [],
      },
    }
  }
}
