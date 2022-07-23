import type { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import fs from 'fs'
import { join } from 'path'
import { unified } from 'unified'
import remarkParse from 'remark-parse/lib'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import styles from '../../styles/Post.module.css'
import Head from 'next/head'

type Props = {
  title: string
  body: string
}

// TODO: add return type
function Post(props: Props) {
  const html = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .processSync(props.body)
    .toString()

  return (
    <>
      <Head>
        <title>
          {props.title+' | Jari Kasandiredjo'}
        </title>
      </Head>
      <h1>{props.title}</h1>
      <div className={styles.post} dangerouslySetInnerHTML={{__html: html}}/>
    </>
  )
}

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const slug = context.params!.slug
  const file = join(process.cwd(), '_posts', slug + '.md')
  const body = fs.readFileSync(file).toString()
  const title = slug.replace(/-/g, ' ')

  return {
    props: {
      title: title,
      body: body,
    }
  }
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const postsFolder = fs.readdirSync(join(process.cwd(), '_posts'))
  postsFolder.splice(postsFolder.indexOf('.gitkeep'), 1)
  const posts = postsFolder.map((post) => {
    return { slug: post.split('.md')[0] }
  })

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default Post
