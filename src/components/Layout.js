import { NavLink } from 'react-router-dom';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>What to Watch</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Featured Titles</NavLink>
            </li>
            <li>
              <NavLink to="/search">Search Movies</NavLink>
            </li>
            <li>
              <NavLink to="/watch-list">Watch List</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.container}>{children}</main>
    </>
  );
}
