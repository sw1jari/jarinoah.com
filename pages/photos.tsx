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
      <p>
        &copy; 2022 Jari Kasandiredjo<br/>
        Do not use without 
        permission, <a href='mailto:jarikasan@gmail.com'>jarikasan@gmail.com</a>
      </p>
      {photos.map((photo) => {
        return <div className={styles.container}>
          <Image 
          key={photo.src} 
          src={photo} 
          placeholder='blur' 
          alt='image taken by me'/>
        </div>
      })}
    </div>
  )
}

export default Photos
