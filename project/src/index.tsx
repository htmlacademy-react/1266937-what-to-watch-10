import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Data = {
  NUMBER_OF_MOVIES: 20,
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      numberOfMovies={Data.NUMBER_OF_MOVIES}
      title={Data.title}
      genre={Data.genre}
      year={Data.year}
    />
  </React.StrictMode>,
);
