
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import TablePage from './components/pages/TablePage/TablePage';
import NotFound from './components/pages/NotFound/NotFound';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Container from 'react-bootstrap/esm/Container';
import { fetchTables } from './redux/tablesRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <main>
      <Container>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/table/:id" element={<TablePage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/> 
      </Container>      
    </main>
  );
}

export default App;
