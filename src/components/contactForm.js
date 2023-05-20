import React from "react";
import { useForm } from "@formcarry/react";
import Toast from "./Notifications/ToastNormal";
import { HiCheck } from "react-icons/hi";

function ContactForm() {
  // Call the "useForm" hook in your function component
  const { state, submit } = useForm({
    id: "z9zntFXUFI",
  });

  // Success message
  if (state.submitted) {
     const toastText = "Mensagem enviada com sucesso!.";
      const toast = (
        <Toast text="Mensagem enviada com sucesso!." icon={<HiCheck />}  color="lime"/>
      );

      return toast;

  }

  return (

    <form className="mt-6" onSubmit={submit}>
      <div className="flex-1">
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Nome Completo
        </label>
        <input
          required
          name="name"
          type="text"
          placeholder="John Doe"
          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div className="flex-1 mt-6">
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Endereço Email
        </label>
        <input
          required
          name="email"
          type="email"
          placeholder="johndoe@example.com"
          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div className="w-full mt-6">
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Mensagem:
        </label>
        <textarea
          required
          name="msg"
          className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="corpo da mensagem"
          defaultValue={""}
        />
      </div>
      <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" type="submit">
        CONTACTAR
      </button>
    </form>
  );
}

export default ContactForm;
