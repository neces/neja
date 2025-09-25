import React, { useState, useEffect } from 'react';
import filmsData from './films.json';
import './Watchlist.css';

interface Film {
  id: string;
  title: string;
  year: number;
  genre: string;
  description: string;
  poster: string;
  pstreamUrl: string;
}

const FilmWatchlist: React.FC = () => {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    setFilms(filmsData);
  }, []);

  const openPstreamInNewTab = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="film-watchlist">
      <div className="film-watchlist-header">
        <h2>Watchlist</h2>
      </div>

      <div className="films-list">
        <h3>{films.length} films and and shows I plan to watch</h3>
        <div className="films-container">
          {films.map((film) => (
            <div key={film.id} className="film-item">
              <div className="film-header">
                <div className="film-poster-container">
                  <div className="film-poster">
                    <img
                      src={film.poster}
                      alt={film.title}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/150x225/cccccc/666666?text=No+Poster';
                      }}
                    />
                  </div>
                </div>
                <div className="film-info-header">
                  <h4 className="film-title">{film.title}</h4>
                  <div className="film-meta">
                    <span className="film-year">{film.year}</span>
                    <span className="film-genre">{film.genre}</span>
                  </div>
                </div>
                <button
                  onClick={() => openPstreamInNewTab(film.pstreamUrl)}
                  className="play-button"
                  aria-label={`Watch ${film.title} on pstream.mov`}
                >
                  ▶
                </button>
              </div>
              <div className="film-details">
                <p className="film-description">{film.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilmWatchlist;