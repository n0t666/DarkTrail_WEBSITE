import React from "react";

const NotFound = () => {
  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">Erro</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Desculpe, não encontramos esta página.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400">
            Mas não se preocupe, você pode encontrar muitas outras coisas em nossa página inicial.
          </p>
          <a
            href="#_"
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group dark:bg-blue-500 dark:text-white dark:hover:bg-blue-600 dark:hover:text-white"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease dark:bg-blue-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease dark:text-white">
              Voltar para a página inicial
            </span>
            <span className="relative invisible">Voltar para a página inicial</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
