import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
//import sum from './sum.js';

const title = 'This is src/index.js';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

//console.log(sum(2, 5));

module.hot.accept();
