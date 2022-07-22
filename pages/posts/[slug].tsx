import type { GetStaticPaths, GetStaticPathsResult, GetStaticProps, GetStaticPropsResult } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import fs from 'fs'
import { join } from 'path'

type Props = {
  body: string
}

// TODO: add return type
function Post(props: Props) {

  return (
    <p>{props.body}</p>
  )
}

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const post = fs.readFileSync(join(process.cwd(), '_posts', context.params!.slug + '.md'))

  return {
    props: {
      body: post.toString(),
    }
  }
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const postsFolder = fs.readdirSync(join(process.cwd(), '_posts'))
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
