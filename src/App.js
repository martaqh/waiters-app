import styles from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import TablePage from './components/pages/TablePage/TablePage';
import NotFound from './components/pages/NotFound/NotFound';

function App() {
  return (
    <div className={styles.App}>
      <p>Hey Venus</p>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:id" element={<TablePage />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
