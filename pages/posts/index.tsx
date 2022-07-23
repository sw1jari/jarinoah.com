import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import styles from '../../styles/PostsIndex.module.css'
import fs from 'fs'
import { join } from 'path'
import Head from 'next/head'

interface Props {
  titles: string[];
}

const PostsIndex: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>
          Posts | Jari Kasandiredjo
        </title>
      </Head>
      <ul className={styles.list}>
        {props.titles.map((title) => {
          return (
            <li key={title}>
              <Link href={'/posts/'+title}>
                <a>{title.replace(/-/g, ' ')}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (_) => {
  const path = join(process.cwd(), '_posts')
  const titles: string[] = fs.readdirSync(path).map((title) => {
    return title.split('.md')[0]
  })
  titles.splice(titles.indexOf('.gitkeep'), 1)

  return {
    props: {
      titles: titles
    }
  }
}

export default PostsIndex
