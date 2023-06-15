import { AiOutlineWarning } from "react-icons/ai";

let idCounter = 1;

export const ArticlesCardData = [
  {
    id: idCounter++,
    imageUrl: "https://wallpapercave.com/wp/wp5405231.jpg",
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
    quote: "Uma frase extremamente complexa...",
    text: [
      {
        type: "paragraph",
        content: "Paragraph 1 of the article content.",
      },
      {
        type: "paragraph",
        content: "Paragraph 2 of the article content.",
      },
      {
        type: "paragraph",
        content: "Paragraph 3 of the article content.",
      },
      {
        type: "paragraph",
        content: "Paragraph 4 of the article content.",
      },
      {
        type: "highlight",
        content: "This is a highlighted section of the article.",
      },
      {
        type: "list",
        items: ["List item 1", "List item 2", "List item 3"],
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
