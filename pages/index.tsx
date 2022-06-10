import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button} id="click-id">click</button>

      <Link href="/congratulations">
        <button className={styles.button} id="next-page-id">next page</button>
      </Link>

    </div>
  )
}

export default Home
