import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react"
import styles from '../styles/Nav.module.css'

// TODO: change to map and use map function to create all the buttons
enum Routes {
  Home = "/",
  Posts = "/posts",
}

function Nav() {
  const { pathname } = useRouter();
  const rootPath = "/" + pathname.split("/")[1];
  const [current, setCurrent] = useState<string>(rootPath)

  return (
    <div>
      <nav className={styles.nav}>
        <Link href={Routes.Home}>
          <button 
            className={current == Routes.Home ? styles.selected : undefined}
            onClick={() => setCurrent(Routes.Home)}
            >
              Home
            </button>
        </Link>
        <Link href={Routes.Posts}>
          <button 
            className={current == Routes.Posts ? styles.selected : undefined}
            onClick={() => setCurrent(Routes.Posts)}
            >
              Posts
          </button>
        </Link>
      </nav>
    </div>
  )
}

export default Nav
