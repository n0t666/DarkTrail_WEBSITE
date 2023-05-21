import React, { useState } from 'react';
import Accordion from '../components/accordion';
import { FaPaintBrush, FaUtensils, FaMapMarkerAlt } from 'react-icons/fa'; // Import necessary icons

const Faq = () => {
  const [collapsedCategories, setCollapsedCategories] = useState([]);

  const toggleCategory = (categoryId) => {
    if (collapsedCategories.includes(categoryId)) {
      setCollapsedCategories(collapsedCategories.filter((id) => id !== categoryId));
    } else {
      setCollapsedCategories([...collapsedCategories, categoryId]);
    }
  };

  const categories = [
    {
      name: 'Color',
      icon: FaPaintBrush,
      accordions: [
        {
          question: "Estou a enfrentar problemas de colisão, meu personagem fica preso em objetos. Como posso resolver isso?",
          answer: "My favorite color is blue.",
        },
      ],
    },
    {
      name: 'Food',
      icon: FaUtensils,
      accordions: [
        {
          question: "What is your favorite food?",
          answer: "I love pizza and sushi.",
        },
      ],
    },
    {
      name: 'Vacation',
      icon: FaMapMarkerAlt, 
      accordions: [
        {
          question: "Where is your dream vacation destination?",
          answer: "I would love to visit the Maldives.",
        },
      ],
    },
  ];

  return (
    <div className="wrapper mt-20 flex justify-center items-center dark:text-white">
      <div>
        <h1 className="text-center text-5xl font-semibold mb-10">FAQ</h1>
        <div className="max-w-[1000px] w-full mt-10 grid md:grid-cols-2 gap-10">
          {categories.map((category, categoryId) => {
            const { name, icon: Icon, accordions } = category;
            const isCategoryCollapsed = collapsedCategories.includes(categoryId);

            return (
              <div className="flex flex-col mb-10" key={categoryId}>
                <div
                  className="flex items-center gap-2 cursor-pointer transition-colors duration-300"
                  onClick={() => toggleCategory(categoryId)}
                >
                  <Icon size={20} className={`text-xl ${isCategoryCollapsed ? 'text-gray-500' : 'text-blue-500'}`} />
                  <h2 className={`text-xl font-semibold ${isCategoryCollapsed ? 'text-gray-500' : 'text-blue-500'}`}>{name}</h2>
                </div>
                {!isCategoryCollapsed && (
                  <div className={`overflow-hidden transition-all duration-500 ${isCategoryCollapsed ? 'max-h-0' : 'max-h-[1000px]'}`}>
                    {accordions.map((accordion, accordionId) => {
                      const { question, answer } = accordion;
                      return (
                        <div className="bg-darkcolor p-5 rounded-md mt-5 dark:bg-gray-700" key={accordionId}>
                          <Accordion question={question} answer={answer} />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
