import { useParams } from "react-router-dom";
import { ArticlesCardData } from "../../data/news/ArticleCardData"; // Import the ArticlesCardData array

const FullDetailPage = () => {
  const { articleId } = useParams();

  // Find the article with the matching ID
  const article = ArticlesCardData.find((article) => article.id === parseInt(articleId));

  if (!article) {
    // Handle the case when the article is not found
    return <div>Article not found</div>;
  }

  // Render the page with the full article details
  return (
    <div>
      <h1>Full Detail Page</h1>
      <p>Article ID: {articleId}</p>
      <p>Title: {article.title}</p>
      <p>Category: {article.category}</p>
      <p>Published Date: {article.publishedDate}</p>
      <p>Author: {article.author}</p>
      <p>Content: {article.content}</p>
      {/* Render other details of the article */}
    </div>
  );
};

export default FullDetailPage;
