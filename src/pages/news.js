import { useState, useEffect } from "react";
import ArticleCard from "../components/News/ArticleCard";
import { ArticlesCardData } from "../data/news/ArticleCardData";
import ReactPaginate from "react-paginate";
import HeadlessMenu from "../components/dropdownSort";
const News = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const articlesPerPage = 3;

  const startIndex = currentPage * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;

  const [sortingOption, setSortingOption] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  useEffect(() => {
    document.title = "Notícias";
  }, []);

  const handleSortingOptionChange = (option) => {
    if (option === sortingOption) {
      setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    } else {
      setSortingOption(option);
      setSortOrder("asc");
    }
  };

  let sortedArticles = [...ArticlesCardData];

  if (sortingOption === "Option 1") {
    // Sort by most recent
    sortedArticles.sort((a, b) => {
      const dateA = new Date(a.publishedDate);
      const dateB = new Date(b.publishedDate);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });
  } else if (sortingOption === "Option 2") {
    // Sort alphabetically
    sortedArticles.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      return sortOrder === "asc"
        ? titleA.localeCompare(titleB)
        : titleB.localeCompare(titleA);
    });
  }

  const displayedArticles = sortedArticles.slice(startIndex, endIndex);

  return (
    <div className="container my-8 mx-auto px-4 md:px-8">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center w-full">
          <h2 className="mx-auto text-3xl font-bold dark:text-white">
            Artigos
          </h2>
        </div>
        <HeadlessMenu
          onSortingOptionChange={handleSortingOptionChange}
          sortOrder={sortOrder}
        />
      </div>
      <section className="mb-32 text-center md:text-left">
        {displayedArticles.map((article, index) => (
          <ArticleCard
            key={index}
            imageUrl={article.imageUrl}
            title={article.title}
            category={article.category}
            publishedDate={article.publishedDate}
            author={article.author}
            content={article.content}
            articleId={article.id}
          />
        ))}
        <div className="flex justify-center mt-8">
          <ReactPaginate
            previousLabel={<span className="text-gray-600">&laquo;</span>}
            nextLabel={<span className="text-gray-600">&raquo;</span>}
            pageCount={Math.ceil(ArticlesCardData.length / articlesPerPage)}
            onPageChange={handlePageChange}
            containerClassName="flex justify-center space-x-4"
            pageClassName="inline-block"
            pageLinkClassName="text-lg dark:text-white px-3 py-1 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300"
            previousClassName="inline-block"
            nextClassName="inline-block"
            previousLinkClassName="text-lg px-3 py-1 rounded-full border border-gray-300  dark:border-gray-900 text-gray-600 hover:bg-gray-200 transition-colors duration-300"
            nextLinkClassName="text-lg px-3 py-1 rounded-full border border-gray-300 dark:border-gray-900 text-gray-600 hover:bg-gray-200 transition-colors duration-300"
            breakClassName="inline-block"
            disabledClassName="opacity-50 cursor-not-allowed"
            activeClassName="bg-blue-500 text-white"
          />
        </div>
      </section>
    </div>
  );
};

export default News;
