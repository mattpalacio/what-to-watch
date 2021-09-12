import { createContext, useState, useEffect } from 'react';

export const WatchListContext = createContext();

export default function WatchListProvider({ children }) {
  const [watchList, setWatchList] = useState(() => {
    const lsWatchList = localStorage.getItem('watch-list');

    return lsWatchList !== null ? JSON.parse(lsWatchList) : [];
  });

  function addToList(movie) {
    watchList.some((item) => item.id === movie.id) ||
      setWatchList([...watchList, { ...movie, hasSeen: false }]);
  }

  function removeFromList(movieId) {
    setWatchList(watchList.filter((item) => item.id !== movieId));
  }

  function markAsSeen(movieId) {
    setWatchList(
      watchList.map((item) =>
        item.id === movieId ? { ...item, hasSeen: !item.hasSeen } : { ...item }
      )
    );

    console.log(watchList);
  }

  useEffect(() => {
    localStorage.setItem('watch-list', JSON.stringify(watchList));
  }, [watchList]);

  return (
    <WatchListContext.Provider
      value={{ watchList, addToList, removeFromList, markAsSeen }}>
      {children}
    </WatchListContext.Provider>
  );
}
