---
title: Padrões de renderização
description: Conheça os padrões de renderização mais utilizados no desenvolvimento de aplicações web, suas vantagens e desvantagens e quando utilizá-los.
cover: render.png
date: 2023-11-05
tags:
  - frontend
  - programacao
  - renderizacao
---

# Padrões de renderização

A partir do ponto de vista do frontend, algo que todos temos em comum é que somos usuários de aplicações. Acessamos diariamente sites e aplicativos, seja para trabalhar, estudar, fazer compras online ou relaxar.

O conteúdo que acessamos é disponibilizado para nós como arquivos que nossos navegadores interpretam. A web é construída basicamente com três tipos de arquivos: o HTML, que é como o esqueleto da página; o CSS, que dá estilo à página; e o Javascript, que cuida da interatividade das páginas.

Quando falo em padrão de renderização, refiro-me à forma como esse conteúdo é disponibilizado para o usuário. O que é um padrão de renderização? Em primeiro lugar, quando falamos de renderização, nos referimos ao processo de transformar dados e código em conteúdo que pode ser visualizado pelo usuário final. Esse processo pode ocorrer no lado do cliente, no navegador que estamos utilizando, ou no lado do servidor, onde a aplicação está em execução. Além disso, o processo pode ser realizado de uma vez só ou em partes.

Cada uma dessas abordagens apresenta vantagens e desvantagens no que diz respeito à experiência do usuário, desempenho e experiência do desenvolvedor. Ao considerarmos a experiência do usuário, podemos pensar em quanto tempo a página demora a carregar, interatividade e navegação. Já em relação ao desempenho, tratamos de números, tempo de carregamento, tamanho dos arquivos fornecidos ao cliente e processamento de dados. Por fim, no que diz respeito à experiência do desenvolvedor, podemos considerar a complexidade de gerenciamento, hospedagem e a forma de escrever o código, entre outros fatores.

Assim, sob o ponto de vista desse tripé, vamos conhecer algumas estratégias de renderização, desde as mais comuns até as mais inovadoras.

### Site estático - Static Site Generation - SSG:

O padrão original e mais básico para a construção de websites é o Site Estático, ou Static Site Generation (SSG) em inglês. Nesse padrão, a geração do conteúdo da página ocorre antecipadamente, sendo que os arquivos estáticos resultantes são armazenados em servidores e enviados ao cliente quando acessam o endereço da aplicação.

A grande vantagem desse método é que ele não requer processamento em tempo real para gerar o conteúdo da página a cada nova requisição, garantindo desempenho e rapidez na resposta ao usuário. Isso também permite que o site seja facilmente escalável, pois uma vez que o arquivo já está gerado e armazenado, a mesma página pode ser servida para diversos acessos. Além disso, o custo de hospedagem é reduzido, pois não é necessário um servidor poderoso ou operações complexas em tempo real.

No entanto, esse padrão não é ideal para todas as aplicações, apenas para aquelas com pouca interatividade. Ele tem um custo baixo, pois não há necessidade de um servidor poderoso ou operações complexas em tempo real. Uma vez que a aplicação serve o mesmo arquivo que já está gerado e armazenado, isso permite que ela escale bem e lide com um grande número de acessos.

Atualizar um site estático significa gerar um novo arquivo e substituir o antigo, o que pode ser custoso em atualizações grandes. Portanto, não é recomendado para sites em que os dados mudam com muita frequência, apenas para sites com poucas interações e sem dados dinâmicos.

### Renderização do lado do servidor - Server side rendering - Multi page applications:

Na abordagem de Server Side Rendering (SSR), a lógica de negócios é executada no servidor e o conteúdo HTML é gerado dinamicamente em tempo de execução, a cada requisição do usuário. O servidor processa os dados necessários para construção da página e gera o HTML para aquela requisição específica, que é enviado para o navegador já montado. Essa abordagem permite a criação de páginas com conteúdo dinâmico e personalizado para cada usuário, sem comprometer a experiência de carregamento inicial da página.

Porém, a desvantagem da SSR é que pode ser menos fluida devido à necessidade de carregar uma nova página a cada solicitação, o que pode gerar um atraso na interação do usuário com a aplicação. Além disso, a SSR exige um custo maior, pois precisa de um servidor que processe as requisições e monte as páginas. No entanto, essa abordagem oferece uma melhor leitura por buscadores, o que impacta positivamente no SEO (Search Engine Optimization) da aplicação.

Podemos considerar que essas duas estratégias são suficientes para muitos casos, principalmente para websites com pouca complexidade e baixa frequência de atualizações. Entretanto, com a popularização dos smartphones, aumento das velocidades de internet e maior capacidade de processamento dos dispositivos, a forma de consumo e disponibilização de aplicações Web mudou consideravelmente.Nesse contexto, surgiram novas abordagens para o desenvolvimento de aplicações Web que priorizam a interatividade e a experiência do usuário.

### Renderização do lado do cliente e Single page application:

Nessa estratégia, todo o HTML, CSS e JS necessários são carregados de uma vez no primeiro carregamento da página. A partir desse carregamento, o JavaScript é responsável por todas as atualizações e interações da página, sem a necessidade de recarregamento. Toda a renderização da interface está acontecendo do lado do cliente. Em outras palavras, o SPA carrega todo o código necessário para que a aplicação funcione de uma vez, e as atualizações subsequentes estão sendo feitas do lado do cliente, sem a necessidade de novas solicitações ao servidor.

Quando precisamos manipular dados, fazemos isso via requisições para nossa aplicação backend, que aqui é um serviço a parte. A partir desse padrão, a divisão entre frontend e backend ficou mais clara.

Essa abordagem traz como benefícios a sensação de fluidez ao usar a aplicação, uma interatividade maior e mais responsiva, e as páginas podem ser construídas dinamicamente, permitindo que o conteúdo seja personalizado e adaptado ao usuário.

No entanto, é importante mencionar que a implementação de um SPA pode ser complexa, exigindo mais recursos do dispositivo do cliente, como memória e poder de processamento. Todo o código da aplicação de uma vez, o tempo de carregamento inicial pode ser alto. Essa abordagem pode gerar arquivos JS muito grandes e não ser ideal para carregar páginas em internet mais lenta e que exigem muitos recursos.

Além disso, o SEO (Search Engine Optimization) pode ser afetado, pois o conteúdo dinâmico pode ser mais difícil de ser indexado pelos motores de busca. Os mecanismos de busca têm dificuldade de indexar essa página, afetando a visibilidade da aplicação na busca orgânica.

Outra desvantagem é que, como o JavaScript é responsável por criar elementos na página, pode ser difícil para ferramentas de acessibilidade entenderem e utilizarem corretamente a aplicação. Além disso, aplicações que dependem de muitas requisições ao backend podem acabar tendo muitos carregamentos, perdendo um pouco da fluidez ao serem usadas.

Portanto, é necessário avaliar cuidadosamente a escolha dessa abordagem e considerar os trade-offs envolvidos.

### SSR com hydration(hidratacao):

SSR com hydration é uma estratégia que busca unir o melhor dos dois mundos em relação à renderização de aplicações web. Com essa abordagem, é possível obter boa indexação no mecanismo de busca, mantendo a fluidez e interatividade das SPAs.

Nesse padrão, a primeira requisição para o servidor segue os passos de um SSR tradicional, os dados são processados e a página é devolvida para o cliente. Como resultado, o cliente recebe uma página com o conteúdo já renderizado, o que é bom para o SEO e para o tempo de carregamento. Porém, essa página HTML que foi gerada no servidor é hidratada do lado do cliente para adicionar interatividade. Esse processo de hidratação é feito através do JavaScript. Por exemplo, o servidor retorna um botão, mas a ação desse botão é acionada pelo JavaScript que é adicionado na hidratação.

No entanto, a utilização de SSR com hydration tem suas desvantagens, como o aumento do tempo de processamento do lado do cliente, que pode levar a sensação de que a aplicação está congelada enquanto o JS está hidratando a página. Além disso, o código JavaScript que é baixado pode ser bastante grande, o que pode prejudicar o desempenho em conexões lentas e em dispositivos com recursos limitados. Porém, essa estratégia é uma opção viável para quem busca um equilibrio entre a fluidez das SPAs e a indexação do SEO.

Nessa abordagem voltamos a precisar de um servidor para lidar com as requisições.

Abordagem mais popular no momento.

### Static Site Generator com Hydration -

Nessa estratégia, o conceito de hidratação é estendido para os arquivos estáticos. A renderização das páginas é feita durante a construção da aplicação, antes de ser disponibilizada no servidor. Assim, podemos obter as mesmas vantagens e desvantagens da estratégia de SSR com hydration. A diferença aqui é que, além de já ter as páginas pré-renderizadas e hidratadas, ainda é possível adicionar interatividade após o JavaScript ser carregado no lado do cliente.

O uso de um gerador de sites estáticos como o Gatsby, por exemplo, permite a construção de sites mais rápidos e leves, pois todo o conteúdo é gerado antecipadamente, e as atualizações são feitas apenas quando os dados são alterados. Isso significa que, ao contrário das abordagens anteriores, não há necessidade de se preocupar com um backend dinâmico para atualizar o conteúdo.

No entanto, assim como o SSR com hydration, o processo de hidratação pode levar algum tempo para ser concluído, e a interatividade só é adicionada depois que todo o JavaScript é carregado no lado do cliente.

### ISR - Incremental static regeneration:

Aqui, a estratégia parece com a do SSG, mas tenta resolver o problema de ter sempre um conteúdo que, quando precisa de atualização, precisa de uma nova build. Com o ISR, podemos gerar previamente as páginas e disponibilizá-las como arquivos estáticos. No entanto, essas páginas são renderizadas com metadados que definem um intervalo ou dependências de fontes de dados para serem renderizadas novamente no servidor, incluindo possíveis novas alterações. Além disso, uma vantagem do ISR é que ele pode ser combinado com o conceito de fallback para garantir que o usuário sempre tenha uma página disponível, mesmo que ela ainda não tenha sido gerada pelo servidor.

Quando um intervalo ou uma dependência é alterada, o servidor remonta essa página e substitui a antiga, trazendo os dados mais atualizados. Outra aplicação dessa técnica é criar uma espécie de cache das páginas, onde podemos gerar apenas as páginas mais acessadas ou mais recentes de uma aplicação. Caso o usuário tente acessar uma página que não foi pré-renderizada, o servidor constrói essa página estática e a disponibiliza para o cliente. Essa página que foi gerada agora está disponível como um arquivo estático para outros acessos à aplicação.

A principal vantagem dessa estratégia é diminuir o tempo de build de aplicações estáticas, regerando apenas as páginas que precisam ser atualizadas. Dessa forma, reduz-se o tempo de espera do usuário para obter conteúdo atualizado. No entanto, é importante destacar que a técnica também tem suas limitações, principalmente em relação à complexidade da aplicação e à necessidade de atualizações constantes.

Daqui pra frente são abordagens mais recentes, que estão se popularizando.

### Partial Hydration:

Essa alternativa tenta minimizar o problema da aplicação não estar utilizável e a sensação de aplicação congelada no primeiro carregamento para os padrões que fazem uso de hidratação. Em uma aplicação grande, o JavaScript pode ter muito trabalho a ser realizado, mas nem tudo é visível para o usuário final.

A solução aqui é carregar o conteúdo conforme é exibido para o usuário. A aplicação gera no lado do servidor o HTML da página, mas o JavaScript é quebrado em partes menores e enviado para o cliente quando requisitado, fazendo a hidratação da página por partes, usando técnicas como code splitting e lazy loading.

Partial Hydration permite que a aplicação comece a ser utilizada mais rapidamente, reduzindo o tempo de espera do usuário. Além disso, é uma boa opção para aplicações grandes, que possuem muito conteúdo, scripts e recursos que podem ser carregados sob demanda. Entretanto, é importante lembrar que essa técnica também pode aumentar a complexidade do código e a necessidade de gerenciamento do estado da aplicação.

### Island:

A ideia aqui é evitar que o Javascript domine toda a página. Em vez disso, isolamos as partes que precisam do JS. A aplicação é dividida em várias "ilhas de renderização" que podem ser renderizadas de forma independente no servidor ou no cliente, de acordo com as necessidades da aplicação. Cada ilha se refere a componentes individuais em conteúdo e funcionalidade. Dessa forma, iniciamos com um HTML e hidratamos componentes isolados. O resultado é um site estático com ilhas de interatividade. O benefício dessa abordagem é melhorar o desempenho geral do site, carregando apenas o JS necessário.

Uma vantagem de utilizar esse padrão é que a hidratação pode melhorar o desempenho em aplicações grandes e complexas, reduzindo o JS necessário sem reduzir o desempenho ou escalabilidade. Dividir uma aplicação grande em partes menores e contidas segue o mesmo princípio de hidratação de outros padrões. Os componentes que são estáticos não dependem e não são bloqueados pelo JS.

No entanto, essa abordagem pode aumentar a sobrecarga de rede, já que é necessário enviar mais dados do servidor para o cliente ao dividir a página em várias ilhas. Isso pode ser um problema em conexões de rede mais lentas. Além disso, a divisão da aplicação em ilhas pode tornar o código mais complexo, exigindo mais esforço de desenvolvimento e manutenção.

### Streaming SSR

Nessa técnica, o servidor envia ao cliente o HTML em partes à medida que está sendo gerado, em vez de esperar todo o conteúdo ser renderizado e enviar tudo de uma vez para o cliente. Isso permite que o tempo de renderização da página diminua, uma vez que já temos conteúdo para ser mostrado na tela e não precisamos esperar. Além disso, o servidor pode enviar os recursos prioritários primeiro, melhorando a percepção do usuário sobre o tempo de carregamento.O JavaScript do lado do cliente é responsável por unir essas partes do HTML de maneira coerente, garantindo que a página esteja completa e pronta para interação do usuário.

Essa técnica é particularmente útil em casos de aplicações complexas que demoram a carregar. No entanto, a implementação do Streaming SSR pode ser mais complexa do que outras abordagens de renderização, exigindo mais esforço e tempo de desenvolvimento. Além disso, a técnica pode não ser suportada por todos os navegadores, especialmente aqueles mais antigos ou desatualizados.

Entre as vantagens da técnica de Streaming SSR estão o melhor tempo de resposta e a menor sobrecarga de rede, uma vez que o conteúdo é enviado em partes e pode reduzir o volume de dados transferidos. Além disso, a técnica pode ser escalável, permitindo que diferentes partes da página sejam renderizadas em diferentes servidores, conforme necessário.

### Resumability

A ideia por trás desse processo é quebrar uma operação em etapas menores, permitindo a retomada do processo caso seja interrompido. Em outras palavras, em vez de carregar todo o HTML, CSS e JavaScript inicialmente, a página carrega aos poucos conforme a demanda do cliente. O objetivo aqui é evitar a hidratação como um todo, renderizando no servidor e compartilhando arquivos estáticos e estado da aplicação. Dessa forma, o padrão de resumabilidade permite que uma operação seja dividida em etapas menores e que cada etapa seja salva em um estado intermediário. Se a operação for interrompida por qualquer motivo, como uma falha na rede ou um erro no sistema, ela pode ser retomada a partir do ponto em que parou, em vez de precisar ser iniciada novamente desde o início.

As vantagens do padrão de resumability incluem a redução do tempo e esforço necessário para realizar uma operação, uma vez que não é necessário reiniciar todo o processo caso ocorra uma interrupção, além da redução de erros e falhas que podem ocorrer em operações de longa duração. A melhoria da experiência do usuário também é um benefício, uma vez que os usuários não precisam esperar tanto tempo para realizar uma operação.

No entanto, algumas desvantagens do padrão de resumability incluem o aumento da complexidade do código, uma vez que é necessário dividir a operação em etapas menores e salvar o estado intermediário. Além disso, pode ser mais difícil de implementar dependendo da complexidade da operação e da estrutura da aplicação. É importante avaliar cuidadosamente a necessidade de aplicar o padrão de resumability e em um projeto específico e considerar se os benefícios superam as desvantagens.

Cabe ressaltar que o padrão de resumability é uma solução relativamente recente e ainda não é amplamente utilizado em todos os projetos. No entanto, ele pode ser útil em projetos de grande escala ou em situações em que a interrupção de uma operação pode causar perda de dados ou afetar a experiência do usuário de forma significativa.

### Conclusão

Para concluir, a diversificação das estratégias de renderização pode ser atribuída à constante evolução da tecnologia, à forma como consumimos as aplicações e às necessidades dos negócios. Atualmente, temos diversas opções disponíveis, cada uma com um conjunto de pontos fortes e fracos, e uma solução não é ideal para todos os casos. A escolha entre essas estratégias vai além do frontend. Ao pensar na aplicação como um produto, é necessário conhecer seus requisitos, as demandas do negócio, as expectativas dos usuários e a infraestrutura disponível para suportá-la.

É importante destacar que cada estratégia de renderização possui suas próprias características e requisitos, e a escolha adequada dependerá de uma análise cuidadosa das necessidades da aplicação e das restrições do ambiente em que ela será executada. Em última análise, os desenvolvedores estão sempre buscando novas soluções para melhorar a experiência do usuário, o desempenho e a experiência do desenvolvedor, o que resulta na criação de novos padrões ou melhorias nos já existentes.

---

Referências

<https://gabrieluizramos.com.br/renderizacao-de-aplicacoes-modernas>

<https://www.youtube.com/watch?v=Dkx5ydvtpCA>

<https://blog.casadodesenvolvedor.com.br/renderizacao-web/>

<https://www.freecodecamp.org/news/rendering-patterns/#single-page-applications-spas-with-client-side-rendering-csr->

<https://dev.to/pulkitsingh/top-rendering-patterns-for-your-next-web-app-12f4>

<https://matiashernandez.dev/blog/post/rendering-patterns>

<https://dev.to/this-is-learning/resumability-wtf-2gcm>

<https://nextjs.org/learn/seo/rendering-and-ranking/rendering-strategies>
