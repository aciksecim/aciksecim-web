import type { NextPage } from 'next'
import Head from 'next/head'
import Nav from '../components/Nav'
import Header from '../components/Header'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'
import Title1 from '../components/Title1'

const Home: NextPage = () => {
  return (
    <div className="font-aciksecim-font">
      <Nav />
      <Header />
      <Title1 />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home
