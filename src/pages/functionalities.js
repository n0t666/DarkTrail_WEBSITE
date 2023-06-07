import { useEffect } from 'react';


const Functionalities = () => {
  useEffect(() => {
    document.title = 'Funcionalidades';
  }, []);

  return (
    <div>functionalities</div>
  )
}

export default Functionalities