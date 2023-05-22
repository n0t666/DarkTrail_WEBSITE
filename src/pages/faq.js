import React, { useState, lazy, Suspense } from "react";
import {Error, Sucess} from "../components/Alerts/icon_dismiss";

import { BiError } from "react-icons/bi";
import { AiOutlineFileText, AiOutlineInfoCircle } from "react-icons/ai";
import { CgGames } from "react-icons/cg";

const LazyAccordion = lazy(() => import("../components/accordion"));



const Faq = () => {
  const categories = [
    {
      name: "Problemas/Bugs",
      icon: BiError,
      accordions: [
        {
          question:
            "Estou a enfrentar problemas de colisão, meu personagem fica preso em objetos. Como posso resolver isso?",
          answer:
            "Problemas de colisão podem ocorrer em certas situações. Tente evitar áreas onde ocorrem essas colisões problemáticas. Se o problema persistir, entre em contato com o email de suporte da empresa, fornecendo detalhes sobre a situação específica em que ocorrem as colisões",
        },
        {
          question: "Encontrei um bug ou erro no jogo. O que devo fazer?",
          answer:
            "Se você encontrar um bug ou erro durante o jogo, recomendamos que entre em contacto. Descreva o problema detalhadamente, incluindo informações sobre quando e como o erro ocorreu. Isso ajudará a equipa a identificar e corrigir o problema em futuras atualizações.",
        },
        {
          question:
            "Estou a ter  problemas de desempenho e o jogo está lento. O que posso fazer para melhorar?",
          answer:
            "Verifique se existem outros aplicativos em execução em segundo plano que possam estar a consumir recursos do sistema. Tente fechá-los e execute o jogo novamente. Verifique se existem outros aplicativos em execução em segundo plano que possam estar a consumir recursos do sistema. Tente fechá-los e execute o jogo novamente.",
        },
      ],
    },
    {
      name: "Jogabilidade",
      icon: CgGames,
      accordions: [
        {
          question: "What is your favorite food?",
          answer: "I love pizza and sushi.",
        },
      ],
    },
    {
      name: "Projeto",
      icon: AiOutlineFileText,
      accordions: [
        {
          question: "Where is your dream vacation destination?",
          answer: "I would love to visit the Maldives.",
        },
      ],
    },
    {
      name: "Informação",
      icon: AiOutlineInfoCircle,
      accordions: [
        {
          question: "O jogo está disponível para qual plataforma?",
          answer:
            "Atualmente, o jogo está a ser desenvolvido para ser jogado em computadores.",
        },
        {
          question: "Qual é a plataforma de desenvolvimento do jogo?",
          answer:
            "O jogo foi desenvolvido utilizando o Godot Engine, uma poderosa engine de jogos open-source. O Godot Engine oferece uma variedade de recursos e ferramentas para criar jogos 2D e 3D(Caso queira consultar mais informações acerca pode consultar https://godotengine.org)..",
        },
        {
          question: "Qual é o estilo do meu jogo?",
          answer:
            "O estilo do meu jogo é 2D, com uma perspectiva top-down. Isso significa que os elementos do jogo são apresentados em duas dimensões, e o jogador visualiza o cenário de cima para baixo.",
        },
        {
          question: "Qual é o objetivo do jogo?",
          answer:
            "Apesar do jogo ainda estar numa fase muito inicial, o principal objetivo do jogo é derrotar certos inimigos, e após uma quantidade de fases é apresentado um chefe de fase que é um inimigo mais forte. Por enquanto, um jogo apenas possui alguns aspetos relativamente à história.",
        },
      ],
    },
  ];

  const [collapsedCategories, setCollapsedCategories] = useState(
    categories.map((_, index) => index)
  );

  const [searchQuery, setSearchQuery] = useState("");

  const toggleCategory = (categoryId) => {
    if (collapsedCategories.includes(categoryId)) {
      setCollapsedCategories(
        collapsedCategories.filter((id) => id !== categoryId)
      );
    } else {
      setCollapsedCategories([...collapsedCategories, categoryId]);
    }
  };

  const filteredCategories = categories.filter((category) => {
    const categoryNameMatches = category.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const accordionMatches = category.accordions.some((accordion) =>
      accordion.question.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return categoryNameMatches || accordionMatches;
  });

  return (
    <div className="wrapper mt-20 flex justify-center items-center dark:text-white">
      <div>
        <h1 className="text-center text-5xl font-semibold mb-10">FAQ</h1>
        <div className="max-w-[1000px] w-full mt-10">
          <div className="flex flex-col justify-center items-center mb-4">
            <input
              type="text"
              placeholder="Procurar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-96 border py-2 px-3 mb-4 text-gray-700 placeholder-gray-400 bg-white border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 gap-10">
                {filteredCategories.map((category, categoryId) => {
                  const { name, icon: Icon, accordions } = category;
                  const isCategoryCollapsed =
                    collapsedCategories.includes(categoryId);
                  return (
                    <div
                      className="flex flex-col mb-10 items-center"
                      key={categoryId}
                    >
                      <div
                        className="flex flex-col items-center gap-2 cursor-pointer transition-colors duration-300"
                        onClick={() => toggleCategory(categoryId)}
                      >
                        <Icon
                          size={20}
                          className={`text-xl ${
                            isCategoryCollapsed
                              ? "text-gray-500"
                              : "text-blue-500"
                          }`}
                        />
                        <h2
                          className={`text-xl font-semibold ${
                            isCategoryCollapsed
                              ? "text-gray-500"
                              : "text-blue-500"
                          }`}
                        >
                          {name}
                        </h2>
                      </div>
                      {!isCategoryCollapsed && (
                        <div
                          className={`overflow-auto transition-all duration-500 ${
                            isCategoryCollapsed ? "max-h-0" : "max-h-[300px]"
                          }`}
                        >
                          <Suspense fallback={<div>Loading...</div>}>
                            {accordions.map((accordion, accordionId) => {
                              const { question, answer } = accordion;
                              return (
                                <div
                                  className="bg-darkcolor p-5 rounded-md mt-5 dark:bg-gray-700"
                                  key={accordionId}
                                >
                                  <LazyAccordion
                                    question={question}
                                    answer={answer}
                                  />
                                </div>
                              );
                            })}
                          </Suspense>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <Error Title="Success!" Text="The operation was successful." />
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
