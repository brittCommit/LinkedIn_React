import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = {
  name: "Tulum",
  country: "Mexico"
};

ReactDOM.render(
  <h1 id = "heading" className = "cool-text">
    {city.name} is in {city.country}
  </h1>,
  document.getElementById('root')
);

