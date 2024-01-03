'use client';
import Link from "next/link";
import styles from '../../styles/dashboard.module.css';
import CaixaQuestões from "../../components/CaixaQuestoes";
import { useState } from "react";
import { selecionarQuestoesAleatorias } from "../../service";

export default function dashboard() {

  const quantidadesQuestoes = 10;

  const [questoesSelecionadas, setQuestoesSelecionadas] = useState(selecionarQuestoesAleatorias(quantidadesQuestoes));

  const [perguntaAtual, setPerguntaAtual] = useState(0);

  const avancarParaProximaPergunta = () => {
    setPerguntaAtual(perguntaAtual + 1);
  }

  return (
    <main className={styles.main}>
      <h1>TRIVIA</h1>

      <div>
        <h3>Questões {perguntaAtual + 1} / {quantidadesQuestoes}</h3>
        <div></div>
        <div></div>
      </div>

      {/* {questoesSelecionadas.map((questao) => ( */}
      <CaixaQuestões 
        pergunta={questoesSelecionadas[perguntaAtual].pergunta} 
        respostasErradas={questoesSelecionadas[perguntaAtual].respostasErradas} 
        respostaCorreta={questoesSelecionadas[perguntaAtual].respostaCorreta}
        avancarParaProximaPergunta={avancarParaProximaPergunta}
      />
      {/* ))} */}

      <Link href="/">Home</Link>
    </main>
  )
}