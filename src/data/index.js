const questoes = [
  {
    id: 1, pergunta: 'Qual o navegador explorou o Novo Mundo?',
    respostasErradas: ['Pedro Alvares Cabral', 'Fernan de Magalhães', 'Vasco da Gama'],
    respostaCorreta: 'Cristovão Colombo'
  },
  { 
    id: 2, pergunta: 'Qual foi o 1° homem a pisar na lua?', 
    respostasErradas: ['Yuri Gagarin', 'Buzz Aldrin', 'Jonh Gleen'],
    respostaCorreta: 'Neil Armstrong' 
  },
  { 
    id: 3, pergunta: 'Quem pintou a Cappella Sistina?', 
    respostasErradas: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh'],
    respostaCorreta: 'Michaelangelo'
  },
  {
    id: 4, pergunta: 'Quem é o inventor da luz elétrica?', 
    respostasErradas: ['Nikola Tesla', 'Alexander Graham Bell', 'Charles Babbage'],
    respostaCorreta: 'Thomas Edison'
  },
  { 
    id: 5, pergunta: 'Qual país da Ásia era membro do Eixo na 2° Guerra Mundial?', 
    respostasErradas: ['China', 'Coreia do Sul', 'Coreia do Norte'],
    respostaCorreta: 'Japão'
  },
  { 
    id: 6, pergunta: 'Qual a civilização mais antiga do mundo?', 
    respostasErradas: ['Babilónia', 'Suméria', 'Fenícia'], 
    respostaCorreta: 'Mesopotâmia' 
  },
  { 
    id: 7, pergunta: 'Qual cidade da Grécia Antiga foi incendiada pelos persas?', 
    respostasErradas: ['Esparta', 'Corintio', 'Tebas'], 
    respostaCorreta: 'Atenas'
  },
  { 
    id: 8, pergunta: 'Qual autor escreveu O Guarani e O Gaúcho?', 
    respostasErradas: ['Aluísio de Azevedo', 'Jośe de Anchieta', 'Machado de Assis'], 
    respostaCorreta: 'José de Alencar' 
  },
  { 
    id: 9, pergunta: 'O Homem Vitruviano é um desenho de qual artista?', 
    respostasErradas: ['Van Gogh', 'Pablo Picasso', 'Donatello'], 
    respostaCorreta: 'Leonardo da Vinci'
  },
  { 
    id: 10, pergunta: 'Qual país foi dividido em 1949?', 
    respostasErradas: ['Bélgica', 'Polônia', 'Áustria'], 
    respostaCorreta: 'Alemanha' 
  },
  { 
    id: 11, pergunta: 'Qual a montanha mais alta do mundo?', 
    respostasErradas: ['Monte Chimborazo', 'Monte Kilimanjaro', 'Monte Fuji'], 
    respostaCorreta: 'Monte Everest' 
  },
  { 
    id: 12, pergunta: 'Quem inventou a 1° linguagem de programação?', 
    respostasErradas: ['Charles Babbage', 'Alan Turing', 'Grace Hopper'], 
    respostaCorreta: 'Ada Lovelace' 
  },
  { 
    id: 13, pergunta: 'Quem inventou a lâmpada?', 
    respostasErradas: ['Benjamin Franklin', 'Graham Bell', 'Nikola Tesla'], 
    respostaCorreta: 'Thomas Edison'
  },
  { 
    id: 14, pergunta: 'Que grande evento histórico aconteceu em 1822 no Brasil?', 
    respostasErradas: ['Revolução Farroupilha', 'Abolição da Escravidão',  'Ditadura Militar'],
    respostaCorreta: 'Independência do Brasil'
  },
  { 
    id: 15, pergunta: 'Quem foi a primeira mulher a viajar para o espaço?', 
    respostasErradas: ['Kathryn D. Sullivan', 'Svetlana Savitskaya', 'Mae Jemison'], 
    respostaCorreta: 'Valentina Tereshkova'
  },
  { 
    id: 16, pergunta: 'Qual foi a invenção feita por Robert Kahn e Vint Cerf?', 
    respostasErradas: ['Televisão', 'Computador', 'Rádio-gravador'], 
    respostaCorreta: 'Internet' 
  },
  { 
    id: 17, pergunta: 'Quanto tempo durou o regime do apartheid na África do Sul?', 
    respostasErradas: ['51 anos', '37 anos', '22 anos'],
    respostaCorreta: '46 anos'
  },
  { 
    id: 18, pergunta: 'Que atleta é o detentor do recorde de medalhas olímpicas?', 
    respostasErradas: ['Usain Bolt', 'Carl Lewis', 'Michael Jordan'],
    respostaCorreta: 'Michael Phelps'
  },
  { 
    id: 19, pergunta: 'Quem foi o inventor da vacina?', 
    respostasErradas: ['Louis Pasteus', 'Albert Sabin', 'Robert Koch'],
    respostaCorreta: 'Eduard Jenner'
  },
  { 
    id: 20, pergunta: 'Em qual ano ocorreu a Revolta da Vacina no Rio de Janeiro?', 
    respostasErradas: '1904' 
  },
  { id: 21, pergunta: 'Em que ano o Brasil sediou a Copa do Mundo pela primeira vez?', respostasErradas: '1950' },
  { id: 22, pergunta: 'Em que ano foi adotado o Acordo de Paris sobre mudanças climáticas?', respostasErradas: '2015' },
  { id: 23, pergunta: 'Em qual ano ocorreu a guerra das Malvinas?', respostasErradas: '1982' },
  { id: 24, pergunta: 'Qual foi o ano em que Martin Luther King realizou o discurso "Eu Tenho um Sonho"?', respostasErradas: '1963' },
  { id: 25, pergunta: 'Em que ano a União Europeia (UE) foi estabelecida?', respostasErradas: '1993' },
  { id: 26, pergunta: 'Em que ano a Guerra Civil Espanhola começou?', respostasErradas: '1936' },
  { id: 27, pergunta: 'Em que ano Nelson Mandela foi libertado da prisão?', respostasErradas: '1990' },
  { id: 28, pergunta: 'Em que ano a Alemanha foi reunificada após a Guerra Fria?', respostasErradas: '1990' },
  { id: 29, pergunta: 'Qual foi o ano do acidente nuclear em Chernobyl?', respostasErradas: '1986' },
  { id: 30, pergunta: 'Em que ano o homem pisou na Lua pela primeira vez?', respostasErradas: '1969' }
];