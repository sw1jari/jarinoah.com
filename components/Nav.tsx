import Link from "next/link"
import { useState } from "react"
import styles from '../styles/Nav.module.css'

function Nav() {
  const [current, setCurrent] = useState<number>(0)

  const setNewCurrent = (index: number): void => {
    setCurrent(index)
  }

  return (
    <div>
      <nav className={styles.nav}>
        <Link href={"/"}>
          <button 
            className={current == 0 ? styles.selected : undefined}
            onClick={() => setCurrent(0)}
            >
              Home
            </button>
        </Link>
        <Link href={"/posts"}>
          <button 
            className={current == 1 ? styles.selected : undefined}
            onClick={() => setCurrent(1)}
            >
              Posts
          </button>
        </Link>
      </nav>
    </div>
  )
}

export default Nav
