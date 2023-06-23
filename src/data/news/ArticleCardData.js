import { AiOutlineWarning } from "react-icons/ai";
let idCounter = 1;

export const ArticlesCardData = [
  {
    id: idCounter++,
    imageUrl: require("../../Images/articles/opera_Rdqs9UthpU.png"),
    imageCaption: "imagem bue fixe",
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
    imageUrl: "https://wallpapercave.com/wp/wp5405231.jpg",
    title: "Article 2",
    category: "Category 2",
    publishedDate: "2023-06-08",
    author: "Jane Smith",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    readingTime: "10",
  },
  {
    id: idCounter++,
    imageUrl: "https://example.com/image3.jpg",
    title: "Article 3",
    category: "Category 3",
    publishedDate: "2023-06-09",
    author: "Mark Johnson",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    readingTime: "10",
  },
];
