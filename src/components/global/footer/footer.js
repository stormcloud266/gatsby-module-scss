import React from "react"
import { Link } from 'gatsby'

import styles from './footer.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={`wrapper ${styles.container}`}>

      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/examples">Examples</Link>
        <Link to="/">Page</Link>
        <Link to="/">Page</Link>
        <Link to="/">Page</Link>
      </nav>

    </div>
  </footer>
)

export default Footer
