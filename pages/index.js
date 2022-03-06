import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button } from '../components'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My first story</title>
        <meta name="description" content="Storybook from scratch" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Button>I am a button</Button>
      </main>
    </div>
  )
}
