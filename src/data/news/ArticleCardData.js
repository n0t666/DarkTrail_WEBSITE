import {AiOutlineWarning} from 'react-icons/ai'

let idCounter = 1;


export const ArticlesCardData = [
  {
    id: idCounter++,
    imageUrl: "https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg",
    imageCaption: "imagem bue fixe",
    title: "Página de notícias em construção",
    category: "Modificações website",
    publishedDate: "2023-06-07",
    author: "Leandro Pereira",
    content: "Apresentamos com entusiasmo a mais recente adição ao nosso website: uma nova seção de notícias. Mantenha-se atualizado com as informações mais relevantes e interessantes, abrangendo uma ampla variedade de tópicos.",
    readingTime: "10",
    tags: ["Website", "React"],
    icon: <AiOutlineWarning/>,
    color: "text-red-600 dark-text-500",
  },
  {
    id: idCounter++,
    imageUrl: "https://example.com/image2.jpg",
    title: "Article 2",
    category: "Category 2",
    publishedDate: "2023-06-08",
    author: "Jane Smith",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    readingTime: "10",
  },
  {
    id: idCounter++,
    imageUrl: "https://example.com/image3.jpg",
    title: "Article 3",
    category: "Category 3",
    publishedDate: "2023-06-09",
    author: "Mark Johnson",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    readingTime: "10",
  },
];
