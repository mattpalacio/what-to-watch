import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Movies from '../components/Movies';
import useFetch from '../hooks/useFetch';
import movieAPI from '../api/movie-api';

export default function FeaturedPage() {
  const [movies, setMovies] = useState([]);
  const { apiData } = useFetch(movieAPI.FEATURED_API);

  useEffect(() => {
    if (apiData) setMovies(apiData.results);
  }, [apiData]);

  return (
    <Layout>
      <h2 style={{ width: '100%' }}>Featured Titles</h2>
      <Movies movies={movies} />
    </Layout>
  );
}
