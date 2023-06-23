import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import useRipple from "use-ripple-hook";

const Home = () => {
  const [ripple, event] = useRipple();
  const [ripple2, event2] = useRipple();

  useEffect(() => {
    document.title = "Página inicial";
  }, []);

  function handleClick(delay, link) {
    setTimeout(() => {
      window.location.href = link;
    }, delay);
  }

  return (
    <section className="mb-40 no-scrollbar">
      {/* SVG Background */}
      <span className="[&>svg]:absolute [&>svg]:-z-10 [&>svg]:m-auto [&>svg]:block [&>svg]:w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          height="680"
          preserveAspectRatio="none"
          viewBox="0 0 1920 880"
        >
          <g transform="translate(960,440) scale(1,1) translate(-960,-440)">
            <linearGradient
              id="lg-0.047955344060927496"
              x1="0"
              x2="1"
              y1="0"
              y2="0"
            >
              <stop stopColor="hsl(217, 88%, 33.7%)" offset="0"></stop>
              <stop stopColor="hsl(217, 88%, 75.1%)" offset="1"></stop>
            </linearGradient>
            <path d="" fill="url(#lg-0.047955344060927496)" opacity="0.4">
              <animate
                attributeName="d"
                dur="33.333333333333336s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcMode="spline"
                keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                begin="0s"
                values="M0 0L 0 804.2328934685746Q 320 597.3613372284876  640 571.0708916590191T 1280 512.0661063245175T 1920 301.8788007488083L 1920 0 Z;M0 0L 0 877.6839081951588Q 320 668.0720922803877  640 649.0018928349388T 1280 328.7087077664202T 1920 162.95038242563396L 1920 0 Z;M0 0L 0 724.9886210051687Q 320 661.4364572061575  640 623.2173947479624T 1280 359.20353038907734T 1920 135.51673041732283L 1920 0 Z;M0 0L 0 804.2328934685746Q 320 597.3613372284876  640 571.0708916590191T 1280 512.0661063245175T 1920 301.8788007488083L 1920 0 Z"
              ></animate>
            </path>
            <path d="" fill="url(#lg-0.047955344060927496)" opacity="0.4">
              <animate
                attributeName="d"
                dur="33.333333333333336s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcMode="spline"
                keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                begin="-6.666666666666667s"
                values="M0 0L 0 765.3275463984917Q 320 569.2124360763661  640 532.0910564992194T 1280 430.02045020427326T 1920 361.65171460868235L 1920 0 Z;M0 0L 0 924.2484004329333Q 320 607.7201718216592  640 590.2324382382813T 1280 387.8082011983454T 1920 307.82201436341123L 1920 0 Z;M0 0L 0 661.1791808669453Q 320 569.6502886843649  640 526.7206863902631T 1280 427.7748366435453T 1920 365.8036929909521L 1920 0 Z;M0 0L 0 765.3275463984917Q 320 569.2124360763661  640 532.0910564992194T 1280 430.02045020427326T 1920 361.65171460868235L 1920 0 Z"
              ></animate>
            </path>
            <path d="" fill="url(#lg-0.047955344060927496)" opacity="0.4">
              <animate
                attributeName="d"
                dur="33.333333333333336s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcMode="spline"
                keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                begin="-13.333333333333334s"
                values="M0 0L 0 767.269207867421Q 320 616.9131423345997  640 568.9723108266019T 1280 392.14529202983945T 1920 258.3080048581833L 1920 0 Z;M0 0L 0 1056.6804818321544Q 320 769.8978651158321  640 717.0800133797602T 1280 452.10925375198603T 1920 243.71230826439834L 1920 0 Z;M0 0L 0 647.8813304650145Q 320 623.2308041734846  640 591.274484833716T 1280 453.10766109813377T 1920 273.8340130496442L 1920 0 Z;M0 0L 0 767.269207867421Q 320 616.9131423345997  640 568.9723108266019T 1280 392.14529202983945T 1920 258.3080048581833L 1920 0 Z"
              ></animate>
            </path>
          </g>
        </svg>
      </span>

      <div className="flex items-center justify-center">
        <div className="w-100 mx-auto px-6 sm:max-w-2xl md:max-w-3xl md:px-12 lg:max-w-5xl xl:max-w-7xl xl:px-32">
          <div className="text-center mt-32">
            <div
              className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,15%,0.8)] dark:shadow-black/20 md:py-16 md:px-12"
              style={{
                backdropFilter: "saturate(200%) blur(25px)",
              }}
            >
              <h1 className="mt-6 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl dark:text-white">
                Uma experiência de jogo <br />
                <span className="text-primary dark:text-primary-500">divertida e única </span>
              </h1>
              <button
                className="mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                ref={ripple}
                onMouseDown={event}
                onClick={() => handleClick(500, '/about')}
              >
                Começar
              </button>
              <button
                className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40"
                ref={ripple2}
                onMouseDown={event2}
                onClick={() => handleClick(500, '/features')}
              >
                Saber mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
