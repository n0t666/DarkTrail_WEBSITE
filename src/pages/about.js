import React, { useEffect } from 'react';

const About = () => {

  useEffect(() => {
    document.title = 'Acerca';
  }, []);

  return (
    <div>about</div>
  )
}

export default About;
