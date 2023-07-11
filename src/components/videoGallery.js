import React, { useState } from "react";

const VideoGallery = () => {
  const videosPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const videos = [
    {
      id: 1,
      title: "Video 1",
      url: "https://youtu.be/QCsEAhXfz8g",
      description:
        "Um pequeno teste da movimentação do personagens,assim bem como o combate utilizando a espada de ferro.",
    },
    {
      id: 2,
      title: "Video 2",
      url: "https://www.youtube-nocookie.com/embed/t0Q2otsqC4I",
      description:
        "Some video description or additional information.Some video description or additional information.Some video description or additional information.Some video description or additional information.",
    },
    {
      id: 3,
      title: "Video 4",
      url: "https://www.youtube-nocookie.com/embed/t0Q2otsqC4I",
      description:
        "Some video description or additional information.Some video description or additional information.Some video description or additional information.Some video description or additional information.",
    },
    {
      id: 4,
      title: "Video 4",
      url: "https://www.youtube-nocookie.com/embed/t0Q2otsqC4I",
      description:
        "Some video description or additional information.Some video description or additional information.Some video description or additional information.Some video description or additional information.",
    },
  ];

  // Calculate total pages
  const totalPages = Math.ceil(videos.length / videosPerPage);

  // Get videos for current page
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 max-w-screen-xl mt-6">
      {currentVideos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {currentVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 dark:bg-gray-800"
            >
              <div className="aspect-w-8 aspect-h-4">
                <iframe
                  title={video.title}
                  src={video.url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-medium mb-2 dark:text-gray-200">
                  {video.title}
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No videos available.</p>
      )}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`mx-1 px-3 py-2 rounded-lg focus:outline-none ${
                index + 1 === currentPage
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-white"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
