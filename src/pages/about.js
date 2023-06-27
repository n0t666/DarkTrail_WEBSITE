import React, { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBullseye,
  FaCode,
  FaCog,
  FaGamepad,
} from "react-icons/fa";
import { SiTarget } from "react-icons/si";
import { Transition } from "@headlessui/react";

const About = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const cards = [
    {
      icon: <SiTarget />,
      title: "Objetivo do jogo",
      description:
        "O objetivo principal do jogo é derrotar inimigos ao longo das fases, enfrentar chefes desafiadores e fortalecer seu personagem ao obter itens melhores. À medida que você avança, seu objetivo é se tornar cada vez mais poderoso e superar os desafios mais difíceis que o jogo apresenta.",
    },
    {
      icon: <FaCode />,
      title: "Descrição técnica do jogo",
      description:
        "O jogo foi desenvolvido utilizando o Godot 3.5, uma engine de jogo popular e poderosa. A programação foi realizada principalmente em GDScript, uma linguagem de script simples e eficiente para o desenvolvimento de jogos no Godot. O desenvolvimento do jogo foi baseado em tutoriais que forneceram uma base sólida para a implementação das mecânicas e sistemas necessários.",
    },
    {
      icon: <FaCog />,
      title: "Mecânicas de jogo",
      description:
        "O jogo apresenta diversas mecânicas interessantes. O combate é controlado pelo movimento do mouse, onde o jogador pode direcionar os ataques e habilidades do personagem na direção do cursor. Além disso, o jogo possui um sistema de inventário adaptado, permitindo ao jogador coletar e gerenciar itens encontrados ao longo do jogo. Existem também diferentes fontes de loot, como itens encontrados no chão ou em baús espalhados pelo cenário. O jogo também possui um ciclo de dia/noite baseado no horário do sistema. Além disso, diversas condições climáticas aleatórias podem ocorrer.",
    },
    {
      icon: <FaGamepad />,
      title: "Modos de jogo",
      description:
        "Atualmente, o jogo oferece apenas o modo singleplayer, onde os jogadores podem aproveitar a experiência de combate e progressão por conta própria. No entanto, existem planos para adicionar outros modos de jogo no futuro, como multiplayer cooperativo ou modos de desafio adicionais.",
    },
  ];

  useEffect(() => {
    document.title = "Acerca";
  }, []);

  const handleNextCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === cards.length - 1 ? 0 : prevCard + 1
    );
  };

  const handlePrevCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === 0 ? cards.length - 1 : prevCard - 1
    );
  };

  return (
    <div className="mx-auto max-w-screen-xl container px-6 py-16 dark:bg-gray-900 dark:text-white">
      <div className="group relative block h-64 sm:h-80 lg:h-96">
        <span className="absolute inset-0 border-2 border-dashed border-black dark:border-gray-700"></span>
        <div className="relative flex h-full transform items-end border-2 border-black dark:border-gray-700 bg-white dark:bg-gray-800 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
            {cards[currentCard].icon}
            <h2 className="mt-4 text-xl font-medium sm:text-2xl dark:font-bold text-primary dark:text-primary-500">
              {cards[currentCard].title}
            </h2>
          </div>

          <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
            <h3 className="mt-4 text-xl font-medium sm:text-2xl text-primary dark:text-primary-500">
              {cards[currentCard].title}
            </h3>

            <p className="mt-2 text-sm sm:text-base max-h-40 overflow-y-auto">
              {cards[currentCard].description}
            </p>

            <p className="mt-8 font-bold"></p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <FaArrowLeft
          className="text-gray-600 dark:text-white cursor-pointer"
          size={24}
          onClick={handlePrevCard}
        />

        <FaArrowRight
          className="text-gray-600 dark:text-white cursor-pointer"
          size={24}
          onClick={handleNextCard}
        />
      </div>
    </div>
  );
};

export default About;
