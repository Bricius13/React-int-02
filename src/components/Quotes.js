import React from 'react';
import './Quotes.css';



const Quotes = ({ quote, character, image }) => (
  <figure className="QuoteCard">
    <img src={image} alt={character} />
    <figcaption>
      <blockquote>{quote}</blockquote>
      <cite>{character}</cite>
    </figcaption>
  </figure>
);

export default Quotes;