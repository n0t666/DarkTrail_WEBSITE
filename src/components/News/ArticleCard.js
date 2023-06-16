import React, { useState } from "react";
import useRipple from "use-ripple-hook";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ArticleCard = ({
  articleId,
  imageUrl,
  title,
  category,
  publishedDate,
  author,
  content,
  iconComponent,
  highlightColor,
}) => {
  const [ripple, event] = useRipple();
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`mb-6 rounded-lg overflow-hidden border-2 border-${highlightColor}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-wrap items-center">
        <div className="mt-6 mb-6 w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12 flex justify-center">
          <div
            className={`relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 ${
              hovered ? "scale-105" : "scale-100"
            } transition-transform duration-300 ease-in-out`}
            ref={ripple}
            onMouseDown={event}
          >
            <div>
              <img src={imageUrl} className="w-full" alt={title} />
            </div>
            <div
              className={`absolute bottom-4 right-4 bg-white rounded-full p-2 ${
                hovered ? "opacity-100" : "opacity-0"
              } transition-opacity duration-300 ease-in-out`}
            >
              <Link to={`/articles/${articleId}`}>
                <FaArrowRight className={`text-${highlightColor}-600`} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-6 w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12 dark:text-white">
          <h5 className="mb-3 text-lg font-bold">{title}</h5>
          <div className={`mb-3 flex items-center justify-center text-sm font-medium ${highlightColor} md:justify-start`}>
            {iconComponent &&
              React.cloneElement(iconComponent, { className: "mr-2 h-5 w-5" })}
            {category}
          </div>
          <p className="mb-6 text-neutral-500 dark:text-neutral-300">
            <small>
              Publicado em <u>{publishedDate}</u> Por {author}
            </small>
          </p>
          <p className="text-neutral-500 dark:text-neutral-300">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
