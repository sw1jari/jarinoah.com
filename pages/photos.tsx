import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Photos.module.css'
import photos from '../lib/photos'
import Link from 'next/link'

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
          const splitFile = photo.src.split('/').slice(-1)[0].split('.')
          const file = splitFile[0] + '.' + splitFile[2]
          return <div key={photo.src} className={styles.container}>
            <Link href={'/photos/'+file}>
              <a>
                <Image 
                src={photo} 
                placeholder='blur' 
                alt='image taken by me'/>
              </a>
            </Link>
          </div>
        })}
      </div>
    </div>
  )
}

export default Photos
