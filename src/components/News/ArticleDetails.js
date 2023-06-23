import { useParams } from "react-router-dom";
import { ArticlesCardData } from "../../data/news/ArticleCardData";
import { AuthorData } from "../../data/authors/data";
import { NotFoundV2 } from "../../pages/errors/4044";
import {
  TelegramShareButton,
  TelegramIcon,
  RedditShareButton,
  RedditIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";

const renderSection = (section, index) => {
  if (section.type === "paragraph") {
    return (
      <p className="text-lg text-gray-800 dark:text-gray-200 mt-4 mb-4" key={index}>
        {section.content}
      </p>
    );
  }

  if (section.type === "highlight") {
    return (
      <p
        className="text-3xl font-bold text-gray-800 dark:text-blue-400 mt-4 mb-4" 
        key={index}
      >
        {section.content}
      </p>
    );
  }

  if (section.type === "list") {
    return (
      <ul
        className="list-disc list-outside space-y-2 pl-5 text-lg text-gray-800 dark:text-gray-200 mt-4 mb-4"
        key={index}
      >
        {section.items.map((item, itemIndex) => (
          <li className="pl-2" key={itemIndex}>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return null; // Handle other section types if needed
};

const FullDetailPage = () => {
  const { articleId } = useParams();
  const url = window.location.href;


  const errorMessage = `Desculpe,mas nós não conseguimos encontrar o artigo que pretende
  consultar. Poderá encontrar muitos outros na área das notícias.`;

  const article = ArticlesCardData.find(
    (article) => article.id === parseInt(articleId)
  );

  if (!article) {
    return <NotFoundV2 message={errorMessage} />;
  }

  const tagElements = article.tags.map((tag, index) => (
    <div
      key={index}
      className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
    >
      {tag}
    </div>
  ));

  function findAuthorByName(name) {
    return AuthorData.find((author) => author.name === name);
  }

  const author = findAuthorByName(article.author);

  return (
    <>
      {/* Blog Article */}
      <div className="max-w-screen-xl px-32 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-32 mx-auto selection:bg-yellow-300 selection:text-yellow-900 dark:selection:bg-yellow-900 dark:selection:text-yellow-300">
        <div className="max-w-screen-xl">
          {/* Avatar Media */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12 rounded-full"
                  src={author.imageUrl}
                  alt="author"
                />
              </div>
              <div className="grow">
                <div className="grid sm:flex sm:justify-between sm:items-center gap-2">
                  <div>
                    <div className="inline-block">
                      <div className="sm:mb-1 block text-left">
                        <a href={author.authorUrl}>
                          <span className="font-semibold text-gray-800 dark:text-gray-200">
                            {article.author}
                          </span>
                        </a>
                      </div>
                    </div>
                    <ul className="text-xs text-gray-500">
                      <li className="inline-block relative pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                        {article.publishedDate}
                      </li>
                      <li className="inline-block relative pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                        {article.readingTime} minutos de leitura
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Avatar Media */}
          {/* Content */}
          <div className="space-y-3 md:space-y-4">
            <div className="space-y-3 items-center justify-between">
              <div className="flex items-center">
                <p className="text-2xl font-bold md:text-3xl dark:text-white">
                  {article.title}
                </p>
                <div className="flex items-center ml-auto">
                  <CircleMenu
                    startAngle={-90}
                    rotationAngle={360}
                    itemSize={2}
                    radius={5}
                    rotationAngleInclusive={false}
                  >
                    <CircleMenuItem
                      tooltip="Telegram"
                      tooltipPlacement={TooltipPlacement.Top}
                    >
                      <TelegramShareButton
                        url={url}
                        title="Acabei de encontrar um artigo muito interessante acerca do projeto DarkTrail"
                      >
                        <TelegramIcon size={32} round />
                      </TelegramShareButton>
                    </CircleMenuItem>

                    <CircleMenuItem
                      tooltip="Reddit"
                      tooltipPlacement={TooltipPlacement.Top}
                    >
                      <RedditShareButton
                        url={url}
                        quote={"Dummy text!"}
                        hashtag="#muo"
                        title="Acabei de encontrar um artigo muito interessante acerca do projeto DarkTrail"
                      >
                        <RedditIcon size={32} round />
                      </RedditShareButton>
                    </CircleMenuItem>

                    <CircleMenuItem
                      tooltip="Facebook"
                      tooltipPlacement={TooltipPlacement.Bottom}
                    >
                      <FacebookShareButton
                        url={url}
                        quote={"Dummy text!"}
                        hashtag="#DarkTrail"
                      >
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>
                    </CircleMenuItem>

                    <CircleMenuItem
                      tooltip="LinkedIn"
                      tooltipPlacement={TooltipPlacement.Top}
                    >
                      <LinkedinShareButton
                        title="Novo artigo do novo projeto DarkTrail"
                        summary="Acabei de encontrar um artigo muito interessante..."
                        source="DarkTrail"
                        url={url}
                      >
                        <LinkedinIcon size={32} round />
                      </LinkedinShareButton>
                    </CircleMenuItem>
                  </CircleMenu>
                </div>
              </div>
              <p className="text-xl font-bold text-gray-800 dark:text-gray-200">
                {article.content}
              </p>
            </div>
            <div>
              {article.text.map((section, index) =>
                renderSection(section, index)
              )}
              {article.quote && (
                <blockquote className="text-center p-4 sm:px-7">
                  <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-gray-200">
                    {article.quote}
                  </p>
                  <p className="mt-5 text-gray-800 dark:text-gray-200">
                    {author.name}
                  </p>
                </blockquote>
              )}
              <figure>
                <img
                  className="w-full object-cover rounded-xl"
                  src={article.imageUrl}
                  alt="Somehing here"
                />
                <figcaption className="mt-3 text-sm text-center text-gray-500">
                  {article.imageCaption}
                </figcaption>
              </figure>
              <div>{tagElements}</div>
            </div>
            {/* End Content */}
          </div>
        </div>
      </div>
      {/* End Blog Article */}
    </>
  );
};

export default FullDetailPage;
