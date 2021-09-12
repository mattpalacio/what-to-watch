import { useState } from 'react';
import movieAPI from '../api/movie-api';
import Layout from '../components/Layout';
import Movies from '../components/Movies';
import styles from '../styles/SearchPage.module.css';

export default function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (search) {
      fetch(movieAPI.SEARCH_API + search)
        .then((response) => response.json())
        .then((data) => setMovies(data.results))
        .catch((error) => console.log(error));

      setSearchTerm(search);
    }

    setSearch('');
  }

  return (
    <Layout>
      {movies.length > 0 ? (
        <>
          <div className={styles.resetSearch}>
            <span>
              You searched for movies titled <strong>"{searchTerm}"</strong>.
              Did not find what you are looking for?
            </span>
            <button onClick={() => setMovies([])}>Search Again</button>
          </div>
          <Movies movies={movies} />
        </>
      ) : (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <label htmlFor="search">
            Looking for movies? Enter the movie title below.
          </label>
          <input
            type="search"
            name="search"
            id="search"
            value={search}
            onChange={handleChange}
          />
        </form>
      )}
    </Layout>
  );
}
