const CaixaQuestoes = ({ pergunta, respostasErradas, respostaCorreta, avancarParaProximaPergunta }) => {

  return(
    <div>
      <p>{pergunta}</p>
      <div></div>
      <div></div>
      <div></div>
      <button onClick={avancarParaProximaPergunta}>Próxima Pergunta</button>
    </div>
  )
}

export default CaixaQuestoes;