import type { NextPage } from 'next'
import Head from "next/head";
import Link from 'next/link';
import Nav from '../components/nav';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jari Kasandiredjo</title>
      </Head>
      <Nav/>
      <p>Jari Noah Kasandiredjo</p>
    </div>
  )
}

export default Home
