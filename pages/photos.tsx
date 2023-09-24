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
        This work by Jari Kasandiredjo is licensed under&nbsp;
        <a href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>
          CC BY-NC-SA 4.0
        </a>
      </p>
      <div className={styles.photos}>
        {photos.map((photo) => {
          const splitFile = photo.src.split('/').slice(-1)[0].split('.')
          const file = splitFile[0] + '.' + splitFile[2]
          return <div key={photo.src} className={styles.container}>
            <Link href={'/photos/'+file}>
              <a target='_blank'>
                <Image 
                src={photo} 
                placeholder='blur' 
                alt='image by Jari Kasandiredjo'/>
              </a>
            </Link>
          </div>
        })}
      </div>
    </div>
  )
}

export default Photos
