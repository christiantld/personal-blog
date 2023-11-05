---
title: Práticas Essenciais de Code Review para Bons Programadores
description: O Code Review deve ser um processo natural dentro do fluxo de desenvolvimento. Esse processo ajuda a identificar bugs e más implementações antes da fase de teste e validação.
date: 2023-05-23
cover: code-review.webp
tags:
  - code-review
  - boas-praticas
---

# Práticas Essenciais de Code Review para Bons Programadores

O Code Review deve ser um processo natural dentro do fluxo de desenvolvimento. Esse processo ajuda a identificar bugs e más implementações antes da fase de teste e validação.

O resultado é uma base de código mais estável e de maior qualidade. Outro benefício de realizar code review de um parceiro é reforçar as relações pessoais e o senso de trabalho em equipe. O processo de revisão também permite uma distribuição do conhecimento técnico e compreensão dos processos entre o time.

## Boas práticas na hora de revisar o código

O primeiro aspecto de um bom code review é se atentar ao lado humano antes do código. Abaixo segue uma lista de condutas para se atentar quando revisar o código de outra pessoa:

### Revisor

- Como revisor, você deve pensar como outra pessoa.
- Ao apontar sugestões, tente formular frases a partir de um ponto de vista mais pessoal
  - “Eu sugiro que…”, “Eu acho…”, “Para mim, esse ponto…”
- Sempre, SEMPRE a revisão é sobre o código, nunca sobre o autor.
  - ❌ “Você está fazendo uma implementação errada …” <br/>
    ✅ “ O código está fazendo uma implementação errada…”
- Faça perguntas de pontos que não ficaram claros, ou ofereça sugestões através de perguntas. Por meio das respostas, podemos entender melhor a decisão para certo ponto do código.
- Faça comentários através Observações, Impactos e Requisições
  - Observação “Essa implementação é repetida em outro contexto, poderia ser reutilizada” Impacto “Essa implementação torna a compreensão do real objetivo do método não tão claro para mim” Request “ Para esse cenário eu sugiro usar X padrão de projeto, por N motivos”
- Entenda que existem diferentes soluções para o mesmo problema.
- Distinguir entre boas práticas e gosto pessoal
- Faça elogios ao código quando necessário, mesmo que precise de algum ajuste.
- Se pergunte sempre se sua afirmação é verdadeira, se é necessária e se é gentil.
- Valorize o esforço que o autor teve em escrever o código

### Autor

- Como autor, você deve ter humildade para ouvir sobre o seu trabalho
- É normal acontecer falhas, ou ter implementações melhores, ou esquecermos de algum detalhe
- Lembre-se que um código escrito em 10 horas é revisado em 10 minutos
- Não leve as críticas para o lado pessoal, você não é o seu código
- Você e o revisor estão no mesmo time
- Somos sempre enviesados pelo nosso próprio código. Esteja aberto a opiniões externas

### Código

Ao revisar um código é bom ter um checklist do que precisa ser avaliado. Conferir todos aspectos do código de uma vez pode ser exaustivo e propenso a falhas. É bom atentar-se a um tópico e validar todo conteúdo sob aquela ótica.

[ ] Eu entendo o que o código faz?

[ ] O código preenche todos os requisitos de implementação?

[ ] O código faz o que eu espero que ele faça?

- Usando templates para Pull Requests, fica fácil analisar o que aquela PR deve resolver
- A descrição da PR/commit está de acordo com o que o código executa?
- Atenção a sintaxe, não tem nenhum code smells ?
- Atenção se foi feito um tratamento de exceções
- Atenção ao uso correto dos design patterns e a over-engineering

---

Detalhes e referências:

- [Code Review Guidelines for Humans](https://phauer.com/2018/code-review-guidelines/)
- [How to Make Good Code Reviews Better](https://stackoverflow.blog/2019/09/30/how-to-make-good-code-reviews-better/)
- [Best Practices for Code Review](https://smartbear.com/learn/code-review/best-practices-for-peer-code-review/)
- [A Guide to Effective Pull Request Reviews](https://nebulab.com/blog/a-guide-to-effective-pull-request-reviews)
- [Pull request best practices](https://leoneperdigao.medium.com/pull-request-best-practices-fa20f7daeb3c)
