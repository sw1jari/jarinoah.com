import type { NextPage } from 'next'
import Head from "next/head";
import Image from 'next/image';
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
      {/* <Image src={""} className={styles.profile}></Image> */}
      <p>Jari Kasandiredjo</p>
    </div>
  )
}

export default Home
