import { AiOutlineWarning } from "react-icons/ai";
let idCounter = 1;

export const ArticlesCardData = [
  {
    id: idCounter++,
    imageUrl: require("../../Images/articles/opera_Rdqs9UthpU.png"),
    imageCaption: "Layout da página de notícias em construção",
    title: "Página de notícias em construção",
    category: "Modificações website",
    publishedDate: "2023-06-07",
    author: "Leandro Pereira",
    content:
      "Apresentamos com entusiasmo a mais recente adição ao nosso website: uma nova seção de notícias. Mantenha-se atualizado com as informações mais relevantes e interessantes, abrangendo uma ampla variedade de tópicos.",
    readingTime: "10",
    tags: ["Website", "React"],
    icon: <AiOutlineWarning />,
    color: "text-red-600 dark-text-500",
    quote: "",
    text: [
      {
        type: "paragraph",
        content:
          "Apesar de o website e o jogo em geral ainda estarem numa fase muito inicial, planeio adicionar muitas funcionalidades. No entanto, devido ao tempo limitado que tenho para trabalhar neles, a tarefa torna-se complicada.Recentemente, implementei uma nova aba de notícias no nosso website do projeto. Esta adição permitirá que os visitantes do website se mantenham informados sobre as últimas atualizações e acontecimentos relacionados ao projeto.",
      },
      {
        type: "paragraph",
        content:
          "É importante destacar que, como o projeto é desenvolvido por uma única pessoa, há limitações em termos de recursos e tempo disponível. Sendo um projeto escolar, é necessário focar nos elementos mais básicos para a entrega.No entanto, tenho grandes ambições para o futuro do projeto. Pretendo implementar diversas melhorias tanto no website quanto no jogo em si. Estas melhorias incluem recursos adicionais, aprimoramentos de jogabilidade e muito mais.",
      },
      {
        type: "highlight",
        content: "Melhorias que eu pretendo implementar no futuro:",
      },
      {
        type: "list",
        items: ["Sistema de Login", "Fóruns de discussão"],
      },
    ],
  },

  {
    id: idCounter++,
    imageUrl: require("../../Images/articles/opera_Rdqs9UthpU.png"),
    imageCaption: "imagem bue fixe",
    title: "Novas armas adicionadas ao jogo",
    category: "Modificações jogo",
    publishedDate: "2023-06-24",
    author: "Leandro Pereira",
    content:
      "Estamos entusiasmados em anunciar a adição de duas novas armas ao nosso jogo. Essas armas proporcionarão aos jogadores opções estratégicas adicionais durante as batalhas.",
    readingTime: "5",
    tags: ["Jogo", "Armas", "Combate"],
    icon: <AiOutlineWarning />,
    color: "text-blue-600 dark-text-500",
    quote: "",
    text: [
      {
        type: "paragraph",
        content:
          "Após meses de desenvolvimento e trabalho árduo, temos o prazer de apresentar duas novas armas que foram adicionadas ao nosso jogo. Estas armas trazem uma nova dimensão estratégica para as batalhas e fornecem aos jogadores opções interessantes para explorar.",
      },
      {
        type: "paragraph",
        content:
          "A primeira arma é a Besta, uma poderosa arma de longo alcance. Semelhante a um arco, a besta permite que os jogadores ataquem seus inimigos à distância com precisão. O destaque desta arma é a capacidade de disparar um número maior de flechas ao manter o botão pressionado. Isso permite ataques contínuos e a capacidade de manter os inimigos sob constante pressão.",
      },
      {
        type: "paragraph",
        content:
          "A segunda arma é o Martelo, uma arma poderosa que causa um grande impacto. Embora seja mais lenta em comparação com outras armas, o Martelo compensa com seu alto poder destrutivo. Ao segurar o botão pressionado antes de desferir um ataque, os jogadores podem aumentar ainda mais o dano causado. Essa mecânica oferece uma oportunidade estratégica para causar golpes devastadores e derrotar inimigos mais fortes.",
      },
      {
        type: "paragraph",
        content:
          "Além das novas armas, também dedicámos esforços para corrigir um bug relacionado ao sistema de salvamento do jogo. Anteriormente, o sistema mantinha os dados das sessões antigas, o que causava problemas para os jogadores. No entanto, esse problema foi resolvido, garantindo uma experiência de jogo mais estável e livre de erros.",
      },
      {
        type: "paragraph",
        content:
          "Embora estejamos entusiasmados com as adições recentes, é importante ressaltar que, atualmente, a equipa responsável pelo desenvolvimento do jogo é composta por apenas um membro, ou seja, eu. Como único desenvolvedor, enfrento limitações em termos de recursos e tempo disponíveis. No entanto, isso não diminui minha determinação em melhorar o jogo e oferecer uma experiência cativante aos jogadores.",
      },
      {
        type: "paragraph",
        content:
          "Também reconhecemos que a diversidade de itens no jogo é limitada neste momento. A pool de itens disponíveis é bastante pequena, oferecendo poucas opções aos jogadores. No entanto, é importante destacar que tenho planos ambiciosos para o futuro do jogo. Pretendo expandir significativamente a variedade de itens, introduzindo novas armas, equipamentos e recursos para enriquecer a jogabilidade.",
      },
    ],
  },
];
