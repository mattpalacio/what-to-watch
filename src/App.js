import { Switch, Route } from 'react-router-dom';
import FeaturedPage from './pages/FeaturedPage';
import SearchPage from './pages/SearchPage';
import WatchListPage from './pages/WatchListPage';
import WatchListProvider from './providers/watchListProvider';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <WatchListProvider>
        <Switch>
          <Route exact path="/">
            <FeaturedPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/watch-list">
            <WatchListPage />
          </Route>
        </Switch>
      </WatchListProvider>
    </div>
  );
}

export default App;
