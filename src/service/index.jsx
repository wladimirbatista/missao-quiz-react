import questoes from '../data'

const selecionarQuestoesAleatorias = (quantidadesQuestoes) => {
  const questoesAleatorias = questoes.sort(() => Math.random() - 0.5);
  return questoesAleatorias.slice(0, quantidadesQuestoes);  
}

export { selecionarQuestoesAleatorias }