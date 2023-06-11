import { useEffect, useState } from "react";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

//optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

//Data
import photos from "../data/gallery/photos.ts";

export const Gallery = () => {
  const [index, setIndex] = useState(-1);
  const [targetRowHeight, setTargetRowHeight] = useState(getTargetRowHeight());

  useEffect(() => {
    document.title = "Galeria";
  }, []);

  useEffect(() => {
    function handleResize() {
      setTargetRowHeight(getTargetRowHeight());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getTargetRowHeight() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1200) {
      return 300;
    } else if (screenWidth >= 768) {
      return 250;
    } else {
      return 150;
    }
  }

  return (
    <div className=" my-8 mx-auto px-4 md:px-8">
      <h2 class="flex flex-row flex-nowrap items-center my-8">
        <span
          class="flex-grow block border-t border-black dark:border-white"
          aria-hidden="true"
          role="presentation"
        ></span>
        <span class="flex-none block mx-4   px-4 py-2.5 text-xs leading-none font-medium uppercase bg-black text-white dark:bg-white dark:text-black">
          Galeria de imagens
        </span>
        <span
          class="flex-grow block border-t border-black dark:border-white"
          aria-hidden="true"
          role="presentation"
        ></span>
      </h2>
      <PhotoAlbum
        layout="rows"
        photos={photos}
        targetRowHeight={targetRowHeight}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
};
export default Gallery;
