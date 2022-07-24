import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Photos.module.css'
import photos from '../lib/photos'

const Photos: NextPage = () => {

  return (
    <div className={styles.photos}>
      <Head>
        <title>Photos | Jari Kasandiredjo</title>
      </Head>
      {photos.map((photo) => {
        return <Image src={photo} placeholder='blur'/>
      })}
    </div>
  )
}

export default Photos
