import { useParams } from "react-router-dom";
import { ArticlesCardData } from "../../data/news/ArticleCardData";
import {
  TelegramShareButton,
  TelegramIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
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

const FullDetailPage = () => {
  const { articleId } = useParams();
  const url = window.location.href;

  const article = ArticlesCardData.find(
    (article) => article.id === parseInt(articleId)
  );

  if (!article) {
    return (
      <section>
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-600 dark:text-blue-500">
              404
            </h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Algo não está certo.
            </p>
            <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Desculpe,mas nós não conseguimos encontrar o artigo que pretende
              consultar. Poderá encontrar muitos outros na área das notícias.{" "}
            </p>
            <a
              href="/"
              class="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900 my-4"
            >
              Voltar para a página principal
            </a>
          </div>
        </div>
      </section>
    );
  }

  const tagElements = article.tags.map((tag, index) => (
    <div
      key={index}
      className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
    >
      {tag}
    </div>
  ));

  return (
    <>
      {/* Blog Article */}
      <div className="max-w-screen-xl px-32 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-32 mx-auto selection:bg-purple-300 selection:text-purple-900">
        <div className="max-w-screen-xl">
          {/* Avatar Media */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Image Description"
                />
              </div>
              <div className="grow">
                <div className="grid sm:flex sm:justify-between sm:items-center gap-2">
                  <div>
                    <div className="inline-block">
                      <div className="sm:mb-1 block text-left">
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                          {article.author}
                        </span>
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
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3 items-center justify-between">
              <div className="flex items-center">
                <h2 className="text-2xl font-bold md:text-3xl dark:text-white">
                  {article.title}
                </h2>
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
                      tooltip="Email"
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
              <p className="text-lg text-gray-800 dark:text-gray-200">
                At preline, our mission has always been focused on bringing
                openness and transparency to the design process. We've always
                believed that by providing a space where designers can share
                ongoing work not only empowers them to make better products, it
                also helps them grow.
              </p>
            </div>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              We're proud to be a part of creating a more open culture and to
              continue building a product that supports this vision.
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              As we've grown, we've seen how Preline has helped companies such
              as Spotify, Microsoft, Airbnb, Facebook, and Intercom bring their
              designers closer together to create amazing things. We've also
              learned that when the culture of sharing is brought in earlier,
              the better teams adapt and communicate with one another.
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              That's why we are excited to share that we now have a{" "}
              <a
                className="text-blue-600 decoration-2 hover:underline font-medium"
                href="#"
              >
                free version of Preline
              </a>
              , which will allow individual designers, startups and other small
              teams a chance to create a culture of openness early on.
            </p>
            <blockquote className="text-center p-4 sm:px-7">
              <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-gray-200">
                To say that switching to Preline has been life-changing is an
                understatement. My business has tripled and I got my life back.
              </p>
              <p className="mt-5 text-gray-800 dark:text-gray-200">
                Nicole Grazioso
              </p>
            </blockquote>
            <figure>
              <img
                className="w-full object-cover rounded-xl"
                src={article.imageUrl}
                alt="Image Description"
              />
              <figcaption className="mt-3 text-sm text-center text-gray-500">
                {article.imageCaption}
              </figcaption>
            </figure>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold dark:text-white">
                Bringing the culture of sharing to everyone
              </h3>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                We know the power of sharing is real, and we want to create an
                opportunity for everyone to try Preline and explore how
                transformative open communication can be. Now you can have a
                team of one or two designers and unlimited spectators (think
                PMs, management, marketing, etc.) share work and explore the
                design process earlier.
              </p>
            </div>
            <ul className="list-disc list-outside space-y-5 pl-5 text-lg text-gray-800 dark:text-gray-200">
              <li className="pl-2">
                Preline allows us to collaborate in real time and is a really
                great way for leadership on the team to stay up-to-date with
                what everybody is working on,"{" "}
                <a
                  className="text-blue-600 decoration-2 hover:underline font-medium"
                  href="#"
                >
                  said
                </a>{" "}
                Stewart Scott-Curran, Intercom's Director of Brand Design.
              </li>
              <li className="pl-2">
                Preline opened a new way of sharing. It's a persistent way for
                everyone to see and absorb each other's work," said David Scott,
                Creative Director at{" "}
                <a
                  className="text-blue-600 decoration-2 hover:underline font-medium"
                  href="#"
                >
                  Eventbrite
                </a>
                .
              </li>
            </ul>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              Small teams and individual designers need a space where they can
              watch the design process unfold, both for themselves and for the
              people they work with – no matter if it's a fellow designer,
              product manager, developer or client. Preline allows you to invite
              more people into the process, creating a central place for
              conversation around design. As those teams grow, transparency and
              collaboration becomes integrated in how they communicate and work
              together.
            </p>
            <div>{tagElements}</div>
          </div>
          {/* End Content */}
        </div>
      </div>
      {/* End Blog Article */}
    </>
  );
};

export default FullDetailPage;
