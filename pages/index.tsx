import type { NextPage } from 'next'
import Head from 'next/head'
import NextSeo from '../components/NextSeo'
import Nav from '../components/Nav'
import Header from '../components/Header'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'
import Title1 from '../components/Title1'
import Title2 from '../components/Title2'
import Ozellikler from '../components/Ozellikler'

const Home: NextPage = () => {
  return (
    <>
    <NextSeo
      title={"Açık Seçim"}
      description={"Açık Seçim"}
    />
    <div className="font-aciksecim-font">
      <Nav />
      <Header />
      <Ozellikler />
      <Title1 />
      <Title2 />
      <CallToAction />
      <Footer />
    </div>
  </>
  )
}

export default Home
