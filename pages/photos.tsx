import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Photos.module.css'
import photos from '../lib/photos'

const Photos: NextPage = () => {

  return (
    <div className={styles.flex}>
      <Head>
        <title>Photos | Jari Kasandiredjo</title>
      </Head>
      <p>
        &copy; 2022 Jari Kasandiredjo<br/>
        Do not use without 
        permission, <a href='mailto:jarikasan@gmail.com'>jarikasan@gmail.com</a>
      </p>
      <div className={styles.photos}>
        {photos.map((photo) => {
          return <div key={photo.src} className={styles.container}>
            <Image 
            src={photo} 
            placeholder='blur' 
            alt='image taken by me'/>
          </div>
        })}
      </div>
    </div>
  )
}

export default Photos
