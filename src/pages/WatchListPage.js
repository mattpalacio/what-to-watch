import { useContext } from 'react';
import { WatchListContext } from '../providers/watchListProvider';
import Layout from '../components/Layout';
import Movies from '../components/Movies';

export default function WatchListPage() {
  const { watchList } = useContext(WatchListContext);

  return (
    <Layout>
      <h2 style={{ width: '100%' }}>Your Watch List</h2>
      {watchList.length !== 0 ? (
        <Movies movies={watchList} onWatchList />
      ) : (
        <div style={{ width: '100%', textAlign: 'center', fontSize: '1.5rem' }}>
          Your list is empty... :(
        </div>
      )}
    </Layout>
  );
}
