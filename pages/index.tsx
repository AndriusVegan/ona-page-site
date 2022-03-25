import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav';
import Landing from '../components/Landing';
import About from '../components/About';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Vegan website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Landing />
      <About />
      <Projects />
      <Testimonials />
      <Contact />


     
    </div>
  )
}

export default Home
