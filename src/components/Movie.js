import { useContext } from 'react';
import { WatchListContext } from '../providers/watchListProvider';
import movieAPI from '../api/movie-api';
import styles from '../styles/Movie.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faStar } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1560109947-543149eceb16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';

export default function Movie({
  onWatchList,
  id,
  title,
  poster_path,
  overview,
  release_date,
  vote_average,
  hasSeen,
}) {
  const { addToList, removeFromList, markAsSeen } =
    useContext(WatchListContext);

  function addMovie() {
    addToList({
      id,
      title,
      poster_path,
      overview,
      release_date,
      vote_average,
      hasSeen,
    });
  }

  function removeMovie() {
    removeFromList(id);
  }

  function seen(id) {
    markAsSeen(id);
  }

  return (
    <div className={styles.card}>
      {hasSeen && (
        <div className={styles.seenIcon}>
          <FontAwesomeIcon icon={faEye} /> Watched
        </div>
      )}
      <div className={styles.cardImage}>
        <img
          src={poster_path ? movieAPI.IMG_PATH + poster_path : DEFAULT_IMAGE}
          alt={title}
        />
      </div>
      <div className={styles.cardOverlay}>
        <div className={styles.cardHeader}>
          <div className={styles.cardInfo}>
            <h3>{`${title} ${
              release_date && `(${release_date.slice(0, 4)})`
            }`}</h3>
            <p>{overview ? overview : 'Synopsis unavailable'}</p>
          </div>
        </div>
        <div className={styles.cardFooter}>
          {!onWatchList && (
            <button onClick={addMovie}>
              <FontAwesomeIcon icon={faPlus} /> watch list
            </button>
          )}
          {onWatchList && (
            <>
              <button onClick={() => seen(id)}>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={hasSeen && { color: 'green' }}
                />{' '}
                seen
              </button>
              <button onClick={removeMovie}>
                <FontAwesomeIcon icon={faTimes} /> remove
              </button>
            </>
          )}
          <span className={styles.rating}>
            <FontAwesomeIcon icon={faStar} /> {vote_average.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
}
