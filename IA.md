<h1><strong>HTML</strong></h1>

- Auxílio na criação da estrutura HTML das novas funcionalidades do site;

<h1><strong>CSS</strong></h1>

- Auxílio na estilização das novas funcionalidades do site;
- Estilização do slideshow, quiz, formulário e troca de tema;
- Criação de botões modernos e transparentes para navegação;
- Implementação de efeitos hover e transições suaves;
- Ajustes de responsividade para dispositivos móveis;
- Implementação de animações suaves no hero da página;

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

<h1><strong>JS</strong></h1>

- Implementação da lógica do slideshow;
- Criação da navegação com botões de próximo e anterior;
- Alteração dinâmica de imagens, títulos e conteúdos do slideshow;
- Auxílio e dicas no desenvolvimento do quiz com perguntas e resultado final;
- Auxílio e dicas na troca de temas utilizando variáveis CSS;
- Explicações sobre arrays, funções, eventos e manipulação do DOM;
- Auxílio na criação de animações e interações visuais;
- Correção de erros encontrados durante o desenvolvimento;
- Apoio no aprendizado e organização da lógica das funcionalidades do projeto.