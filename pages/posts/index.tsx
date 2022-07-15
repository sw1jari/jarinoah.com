import type { NextPage } from 'next'
import Link from 'next/link'
import Nav from '../../components/nav'
import styles from '../styles/Posts.module.css'

const Posts: NextPage = () => {
  return (
    <div>
      <Nav/>
      <Link href={"/posts/api-flask"}><a>How to make a REST API with Flask</a></Link>
    </div>
  )
}

export default Posts
