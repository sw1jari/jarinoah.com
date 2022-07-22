import type { GetStaticPaths, GetStaticPathsResult, GetStaticProps, GetStaticPropsResult } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import fs from 'fs'

type Post = {
  body: string
}

function Post(post: Post) {

  return (
    <p>{post.body}</p>
  )
}

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps<Post, Params> = async (context) => {
  console.dir(context)
  fs.readdirSync(process.cwd() + '/_posts')
  
  return {
    props: {
      body: 'post body',
    }
  }
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const postsFolder = fs.readdirSync(process.cwd() + '/_posts');
  const posts = postsFolder.map((post) => {
    return { slug: post.split('.md')[0] };
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
