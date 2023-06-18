import { useEffect } from "react";
import VideoGallery from "../components/videoGallery";
export const Videos = () => {
  useEffect(() => {
    document.title = "Vídeos";
  }, []);

  return <VideoGallery />;
};

export default Videos;
