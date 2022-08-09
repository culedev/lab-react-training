import React from 'react';

const Greetings = ({ lang, children }) => {
  const divStyle = {
    border: '1px solid black',
    padding: '10px',
    margin: '10px',
  };

  const checkLang = (lang) => {
    if (lang === 'es') {
      return <h3>Hola {children}</h3>;
    } else if (lang === 'en') {
      return <h3>Hello {children}</h3>;
    } else if (lang === 'de') {
      return <h3>Hallo {children}</h3>;
    } else if (lang === 'fr') {
      return <h3>Bonjour {children}</h3>;
    }
  };
  return <div style={divStyle}>{checkLang(lang, children)}</div>;
};

export default Greetings;
