import type { NextPage } from 'next'
import Head from 'next/head'
import Nav from '../components/Nav'
import Header from '../components/Header'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'
const Home: NextPage = () => {
  return (
    <div className="font-aciksecim-font">
      <Nav />
      <Header />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home
