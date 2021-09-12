import Movie from '../components/Movie';

export default function Movies({ movies, onWatchList }) {
  return (
    <>
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} onWatchList={onWatchList} />
      ))}
    </>
  );
}
