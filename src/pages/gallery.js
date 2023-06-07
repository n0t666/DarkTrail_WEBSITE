import { useEffect } from 'react';

export const Gallery = () => {
  useEffect(() => {
    document.title = 'Galeria';
  }, []);
  return (
    <div>gallery</div>
  )
}
export default Gallery