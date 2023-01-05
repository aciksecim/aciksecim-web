import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Açık Seçim</title>
        <meta name="description" content="Açık Seçim" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="">
          Açık Seçim
        </h1>
      </main>

      <footer className="">
        Footer
      </footer>
    </div>
  )
}

export default Home
