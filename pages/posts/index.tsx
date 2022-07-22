import type { GetStaticPaths, GetStaticPathsResult, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Body from '../../components/Body'
import Nav from '../../components/Nav'
import { foo } from '../../lib/post-parser'
import styles from '../../styles/PostsIndex.module.css'
import fs from 'fs'
import { join } from 'path'

interface Props {
  titles: string[];
}

const PostsIndex: NextPage<Props> = (props) => {

  return (
    <div className={styles.column}>
      {props.titles.map((title) => {
        return <Link href={'/posts/'+title}><a>{title.replace(/-/, ' ')}</a></Link>
      })}
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (_) => {
  const titles: string[] = fs.readdirSync(join(process.cwd(), '_posts'))
    .map((title) => {
      return title.split('.md')[0]
    })

  return {
    props: {
      titles: titles
    }
  }
}

export default PostsIndex
