import { useEffect } from 'react';


export const Videos = () => {
  useEffect(() => {
    document.title = 'Vídeos';
  }, []);
  return (
    <div>videos</div>
  )
}

export default Videos
