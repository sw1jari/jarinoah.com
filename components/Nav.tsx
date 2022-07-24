import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react'
import styles from '../styles/Nav.module.css'

type Route = {
  name: string
  path: string
}

const routes: Route[] = [
  {name: 'Home', path: '/'}, 
  {name: 'Posts', path: '/posts'},
  {name: 'Photos', path: '/photos'},
]

function Nav(): JSX.Element {
  const { pathname } = useRouter()
  const rootPath = '/' + pathname.split('/')[1]
  const [current, setCurrent] = useState<string>(rootPath)

  return (
    <nav className={styles.nav}>
      {routes.map((route) => {
        return (
          <Link key={route.name} href={route.path}>
            <button
              className={current == route.path ? styles.selected : undefined}
              onClick={() => setCurrent(route.path)}
            >
              {route.name}
            </button>
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
