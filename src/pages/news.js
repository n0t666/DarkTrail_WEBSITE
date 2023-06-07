import { useEffect } from 'react';
import ArticleCard from '../components/News/ArticleCard';

const News = () => {
  useEffect(() => {
    document.title = 'Notícias';
  }, []);
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center md:text-left">
        <h2 className="mb-12 text-center text-3xl font-bold">Latest articles</h2>

        {/* First Article Card */}
        <ArticleCard
          imageUrl="https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg"
          title="Welcome to California"
          category="Travel"
          publishedDate="2023-06-07"
          author="John Doe"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        {/* Second Article Card */}
        <ArticleCard
          imageUrl="https://mdbcdn.b-cdn.net/img/new/standard/city/019.jpg"
          title="Exploring the Wilderness"
          category="Nature"
          publishedDate="2023-06-05"
          author="Jane Smith"
          content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />

        {/* Add more ArticleCard instances for additional articles */}
      </section>
    </div>


  )
}

export default News