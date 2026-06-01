<h2><strong>Detalhamento — IA utilizada: ChatGPT</strong></h2>

**Botões de navegação do slideshow**

- Solicitado: Posicionamento dos botões de navegação nas laterais da seção;
- Retornado: Sugestão de posicionamento absoluto com alinhamento às extremidades esquerda e direita da section;
- Alterado/rejeitado: Os botões receberam fundo transparente para melhor integração com o design do projeto;

**Quiz de conscientização**

- Solicitado: Ajuda na construção e na lógica do quiz;
- Retornado: Estrutura HTML, dicas e lógica JavaScript utilizando arrays, eventos e manipulação do DOM;
- Alterado/rejeitado: Algumas perguntas foram substituídas para melhor alinhamento com a proposta do projeto;

**Formulário de contato**

- Solicitado: Implementação de um formulário contendo campos para nome, e-mail e mensagem;
- Retornado: Estrutura HTML;
- Alterado/rejeitado: Sugestão aceita sem alterações relevantes;

**Troca de tema**

- Solicitado: Implementação de um sistema de alternância de temas visuais no site;
- Retornado: Sugestão de utilização de variáveis CSS alteradas dinamicamente por JavaScript;
- Alterado/rejeitado: A proposta inicial com múltiplos botões foi substituída por um único botão que alterna os temas em sequência;

**Responsividade das novas funcionalidades**

- Solicitado: Adaptação do slideshow, quiz, formulário e troca de tema para dispositivos móveis;
- Retornado: Sugestões de media queries e reorganização dos elementos em telas menores;
- Alterado/rejeitado: Sugestões aceitas com pequenos ajustes de espaçamento e alinhamento;

**Estilização do slideshow**

- Solicitado: Criação de uma aparência moderna e compatível com a identidade visual do projeto;
- Retornado: Sugestão de utilização de Flexbox, espaçamentos, bordas arredondadas e transições suaves;
- Alterado/rejeitado: Posteriormente foram adicionados efeitos visuais aos botões de navegação;

**Estilização do quiz**

- Solicitado: Melhorar a aparência visual do quiz mantendo a identidade do projeto;
- Retornado: Sugestão de utilização de Flexbox, botões personalizados e espaçamentos padronizados;
- Alterado/rejeitado: Ajustes adicionais de fonte e alinhamento foram realizados posteriormente;

**Estilização do formulário**

- Solicitado: Criação de uma interface moderna e compatível com a identidade visual do projeto;
- Retornado: Sugestão de campos escuros, bordas suaves, cantos arredondados e botão destacado;
- Alterado/rejeitado: Sugestão aceita sem alterações significativas;

**Animações do hero**

- Solicitado: Orientações para implementação de animações visuais na seção hero;
- Retornado: Sugestões de animações de entrada e desaparecimento utilizando CSS e JavaScript;
- Alterado/rejeitado: Parte das sugestões foi utilizada como referência durante o desenvolvimento;

**Frases de impacto para o slideshow**

- Solicitado: Criação de frases curtas e impactantes relacionadas à prevenção de desastres em barragens;
- Retornado: Diversas sugestões alinhadas à proposta do projeto;
- Alterado/rejeitado: Foram selecionadas as frases "O perigo começa com pequenos sinais.", "Cada segundo de antecipação salva vidas." e "Prever tragédias é possível.";

<h1><strong>IMAGENS</strong></h1> <h2><strong>IA utilizada: ChatGPT</strong></h2>

**Slideshow — Imagem 1**

- Solicitado: "Barragem moderna monitorada por tecnologia avançada, vista aérea ampla, estrutura robusta cercada por vegetação, atmosfera séria e profissional, estilo fotográfico realista, alta resolução, sem texto, cores azul-marinho e dourado, tema tecnológico relacionado à prevenção de desastres.";
- Retornado: Geração de imagem alinhada à identidade visual e tecnológica do projeto;
- Alterado/rejeitado: Imagem utilizada como gerada, sem edição;

**Slideshow — Imagem 2**

- Solicitado: "Centro de monitoramento tecnológico analisando dados de uma barragem em tempo real, grandes telas exibindo gráficos e alertas de risco, ambiente moderno, iluminação azul, estilo fotográfico realista, alta resolução, sem texto.";
- Retornado: Geração de imagem alinhada à identidade visual e tecnológica do projeto;
- Alterado/rejeitado: Imagem utilizada como gerada, sem edição;

**Slideshow — Imagem 3**

- Solicitado: "Barragem monitorada por satélites e sensores inteligentes, representação visual da prevenção de desastres, ambiente seguro, tecnologia avançada, estilo fotográfico realista, alta resolução, sem texto, atmosfera futurista.";
- Retornado: Geração de imagem alinhada à identidade visual e tecnológica do projeto;
- Alterado/rejeitado: Imagem utilizada como gerada, sem edição;

**Imagem adicional — Barragem**

- Solicitado: "Barragem de mineração de grande porte vista ao amanhecer, estrutura detalhada, água refletindo a luz do sol, montanhas ao fundo, estilo fotográfico ultrarrealista, alta resolução, sem pessoas, sem texto e sem marca d'água.";
- Retornado: Geração de imagem alinhada à identidade visual e tecnológica do projeto;
- Alterado/rejeitado: Imagem utilizada como gerada, sem edição;

<h2><strong>Detalhamento — IA utilizada: Claude</strong></h2>

**Fundo com gradiente radial fixo**
- Solicitado: Criação de um fundo escuro com profundidade, sem cor chapada e fixo durante a rolagem da página;
- Retornado: Sugestão de `radial-gradient` no `background-image` em conjunto com `background-attachment: fixed`;
- Alterado/rejeitado: Sugestão aceita, com adaptação das cores para as variáveis do projeto (`--fundo`);

**Visual dos cards das seções**
- Solicitado: Padronização das seções no formato de card, com leve profundidade e cantos arredondados;
- Retornado: Sugestão de `linear-gradient` de fundo, `border` translúcida (`rgba`), `border-radius` e `box-shadow`;
- Alterado/rejeitado: Sugestão aceita, com redução da intensidade da sombra para um efeito mais discreto;

**Inversão do lado da imagem em seções alternadas**
- Solicitado: Alternância da posição de imagem e texto a cada seção, evitando repetição visual;
- Retornado: Sugestão de `section:nth-of-type(even) { flex-direction: row-reverse; }`;
- Alterado/rejeitado: Sugestão aceita sem alterações;

**Reorganização do menu em dispositivos móveis**
- Solicitado: Reorganização do menu de navegação em telas pequenas, com os links posicionados abaixo do logo;
- Retornado: Sugestão de uso de `order` e `flex-basis: 100%` na lista dentro do `@media (max-width: 768px)`;
- Alterado/rejeitado: Sugestão aceita sem alterações;

<h1><strong>IMAGENS</strong></h1>

<h2><strong>IA utilizada: Gemini</strong></h2>

**Seção Tecnologia — `foto.jpeg`**
- Solicitado: "Ilustração técnica realista de um satélite de radar InSAR em órbita, escaneando uma barragem de mineração e o terreno ao redor, com pequenos sensores na estrutura transmitindo dados. Visual moderno, profissional e tecnológico, em tons de azul-marinho com detalhes dourados. Vista ampla, fotorrealista, alta resolução, sem texto e sem marca d'água. Enquadramento horizontal 4:3.";
- Retornado: Geração da imagem dentro do esperado;
- Alterado/rejeitado: Imagem utilizada como gerada, sem edição;

**Seção Objetivos — `objetivo.png`**
- Solicitado: "Sala de controle moderna monitorando uma barragem, com um grande painel exibindo um alerta de risco em destaque e o nível subindo. Operador analisando dados de deformação do terreno. Ambiente profissional e tecnológico, em tons de azul-marinho com detalhes dourados e uma luz de alerta suave. Estilo fotográfico realista, enquadramento horizontal 4:3, alta resolução, sem texto e sem marca d'água.";
- Retornado: Geração da imagem dentro do esperado;
- Alterado/rejeitado: Nova geração solicitada com o mesmo prompt, sendo utilizada a segunda versão;

**Seção Benefícios — `beneficio.png`**
- Solicitado: "Pequena cidade tranquila no vale logo abaixo de uma barragem, ao amanhecer, transmitindo segurança e proteção. Atmosfera serena e esperançosa, em tons de azul e dourado quente. Estilo fotográfico realista, enquadramento horizontal 4:3, alta resolução.";
- Retornado: Geração da imagem dentro do esperado;
- Alterado/rejeitado: Imagem utilizada como gerada, sem edição;

**Seção Aplicação no dia a dia — `aplicacao.png`**
- Solicitado: "Mão segurando um celular com o aplicativo Safe Earth aberto, exibindo um medidor de nível de risco e um alerta automático na tela. Ao fundo, desfocada, uma barragem real. Visual limpo, moderno e profissional, em tons de azul-marinho e dourado. Estilo fotográfico realista, enquadramento horizontal 4:3, alta resolução.";
- Retornado: Geração da imagem dentro do esperado;
- Alterado/rejeitado: Imagem utilizada como gerada, sem edição;

