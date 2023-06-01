import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import screenshot from '../Images/game_img.png'

const Home = () => {
  const [isImageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div className="pb-6 sm:pb-8 lg:pb-12 py-24 dark:text-white">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <section className="mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
          {/* content - start */}
          <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12">
            <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
            Muito orgulho em apresentar
            </p>
            <h1 className="text-black-800 mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">
            Um projeto de jogo inovador
            </h1>
            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="/about"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base dark:bg-indigo-700 dark:ring-indigo-500 dark:hover:bg-indigo-600 dark:focus-visible:ring dark:active:bg-indigo-700"
              >
                Ver detalhes
              </a>
              <a
                href="/contact"
                className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base dark:bg-gray-700 dark:text-gray-300 dark:ring-gray-500 dark:hover:bg-gray-600 dark:focus-visible:ring dark:active:text-gray-700"
              >
                Entrar em contacto
              </a>
            </div>
          </div>
          {/* content - end */}
          {/* image - start */}
          <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg dark:bg-gray-800 lg:h-96 xl:w-5/12">
            <Transition
              show={isImageLoaded}
              enter="transition-opacity duration-1000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
            >
              <img
                src={screenshot}
                loading="lazy"
                alt="Photo by Fakurian Design"
                className="h-full w-full object-cover object-center"
                onLoad={() => setImageLoaded(true)}
              />
            </Transition>
          </div>
          {/* image - end */}
        </section>
      </div>
    </div>
  );
};

export default Home;
