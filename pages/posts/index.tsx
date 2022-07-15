import type { NextPage } from 'next'
import Link from 'next/link'
import Body from '../../components/Body'
import Nav from '../../components/Nav'
import styles from '../styles/Posts.module.css'

const Posts: NextPage = () => {
  return (
    <div>
      <Link href={"/posts/api-flask"}><a>How to make a REST API with Flask</a></Link>
    </div>
  )
}

export default Posts
