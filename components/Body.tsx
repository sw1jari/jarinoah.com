import { ReactNode } from "react"
import styles from "../styles/Body.module.css"

function Body({ children }: { children: ReactNode } ): JSX.Element {
  return (
    <div className={styles.body}>
      {children}
    </div>
  )
}

export default Body
