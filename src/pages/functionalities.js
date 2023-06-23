import { useEffect } from "react";
import { FiCopy, FiSettings, FiLayers } from "react-icons/fi";
import { Card } from "../components/Features/card";

const Functionalities = () => {
  useEffect(() => {
    document.title = "Funcionalidades";
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto max-w-screen-xl">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Explore as <br /> Principais{" "}
          <span className="text-blue-500">Funcionalidades</span>
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
          
            <Card
              icon={<FiCopy className="w-6 h-6" />}
              title="Open-Source"
              description="O software é de código aberto, o que significa que o seu código fonte está disponível para visualização, modificação e distribuição."
            />

            <Card
              icon={<FiLayers className="w-6 h-6" />}
              title="Múltiplos níveis/desafios"
              description="O jogo possui uma variedade de níveis e desafios para explorar e superar. Cada nível apresenta novas dificuldades e obstáculos, garantindo uma experiência envolvente e estimulante."
            />

            <Card
              icon={<FiSettings className="w-6 h-6" />}
              title="Controlos intuitivos"
              description="A interface do jogo é projetada de forma intuitiva, facilitando a compreensão e utilização por parte do jogador. Os controlos são simples e fáceis de aprender, permitindo uma experiência de jogo fluida e agradável."
            />
        </div>
      </div>
    </section>
  );
};

export default Functionalities;
