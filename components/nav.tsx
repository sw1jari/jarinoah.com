import Link from "next/link"
import styles from '../styles/Nav.module.css'

function Nav() {
  return (
    <div>
      <nav className={styles.nav}>
        <Link href={"/"}><button>Home</button></Link>
        <Link href={"/posts"}><button>Posts</button></Link>
      </nav>
      <hr/>
    </div>
  )
}

export default Nav