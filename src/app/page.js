import styles from './page.module.css'
import { FiCheckCircle } from 'react-icons/fi';
import Link from 'next/link'


export default function Home() {

  return (
    <main className={styles.main}>
      <h1>TRIVIA</h1>

      <div className={styles.container}>
        <h2>Regras do jogo</h2>
        <div className={styles.regras_container}>
          <div className={styles.regras}>
            <FiCheckCircle size={24} color='aqua'/>
            <p>No jogo, você deve responder 10 perguntas.</p>
          </div>
          <div className={styles.regras}>
            <FiCheckCircle size={24} color='aqua'/>
            <p>Cada pergunta contém 4 respostas de multipla-escolha.</p>
          </div>
          <div className={styles.regras}>
            <FiCheckCircle size={24} color='aqua'/>
            <p>Você tem 1 minuto para responder cada pergunta.</p>
          </div>
          <div className={styles.regras}>
            <FiCheckCircle size={24} color='aqua'/>
            <p>Se não responder dentro do prazo, a resposta será considerada incorreta.</p>
          </div>
        </div>
      </div>

      <Link className={styles.link} href="/dashboard">Iniciar Jogo</Link>
    </main>
  )
}
