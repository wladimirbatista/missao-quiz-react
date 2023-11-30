import Image from 'next/image'
import styles from './page.module.css'
// import Button from '@/components/Button'
import Link from 'next/link'


export default function Home() {
  return (
    <main>
      <div className={styles.description}>
        <h1>Missão 25</h1>

        <Link href="/dashboard">Dashboard</Link>
      </div>
    </main>
  )
}
