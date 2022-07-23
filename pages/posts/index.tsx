import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import styles from '../../styles/PostsIndex.module.css'
import fs from 'fs'
import { join } from 'path'
import Head from 'next/head'

interface Post {
  slug: string
  title: string
}

interface Props {
  posts: Post[]
}

const PostsIndex: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>
          Posts | Jari Kasandiredjo
        </title>
      </Head>
      <ul className={styles.list}>
        {posts.map((post) => {
          return (
            <li key={post.title}>
              <Link href={'/posts/'+post.slug}>
                <a>{post.title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (_) => {
  const postsFolder = fs.readdirSync(join(process.cwd(), '_posts'))
  const posts: Post[] = postsFolder.map<Post>((file) => {
    const slug = file.split('.md')[0]
    return {
      slug: slug,
      title: slug.replace(/-/g, ' ')
    }
  })

  return {
    props: {
      posts: posts
    }
  }
}

export default PostsIndex
