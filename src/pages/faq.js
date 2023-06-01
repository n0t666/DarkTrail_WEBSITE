const Home = () => {
  return (
    <div className="pb-6 sm:pb-8 lg:pb-12 py-24 dark:text-white">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <section className="mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
          {/* content - start */}
          <div className="flex flex-col justify-center text-center lg:py-12 lg:text-left xl:w-5/12">
            <p className="mb-4 font-semibold text-blue-500 md:mb-6 md:text-lg xl:text-xl">
              Very proud to introduce
            </p>
            <h1 className="text-black-800 mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">
              Revolutionary way to build the web
            </h1>
            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#"
                className="inline-block rounded-lg bg-blue-500 px-8 py-3 text-sm font-semibold text-white outline-none ring-2 ring-blue-500 transition duration-300 hover:bg-blue-600 focus:ring-4 focus-visible:ring-blue-500 md:text-base dark:bg-blue-700 dark:hover:bg-blue-600 dark:focus:ring-4 dark:focus-visible:ring-blue-500 dark:active:bg-blue-700"
              >
                Start now
              </a>
              <a
                href="#"
                className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-sm font-semibold text-gray-500 outline-none ring-2 ring-blue-500 transition duration-300 hover:bg-gray-300 focus:ring-4 focus-visible:ring-blue-500 active:text-gray-700 md:text-base dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:focus:ring-4 dark:focus-visible:ring-blue-500 dark:active:text-gray-700"
              >
                Take tour
              </a>
            </div>
          </div>
          {/* content - end */}
          {/* image - start */}
          <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg dark:bg-gray-800 lg:h-96 xl:w-5/12">
            <img
              src="https://images.unsplash.com/photo-1618556450991-2f1af64e8191?auto=format&q=75&fit=crop&w=1000"
              alt="Photo by Fakurian Design"
              className="h-full w-full object-cover object-center transform transition-transform hover:scale-105"
            />
          </div>
          {/* image - end */}
        </section>
      </div>
    </div>
  );
};

export default Home;
