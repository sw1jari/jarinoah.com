import type { NextPage } from 'next'
import Head from "next/head";
import Link from 'next/link';
import Body from '../components/Body';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jari Kasandiredjo</title>
      </Head>
      <p>Jari Noah Kasandiredjo</p>
    </div>
  )
}

export default Home
