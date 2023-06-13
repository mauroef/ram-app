import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomePage from './pages/Home';
import CharactersPage from './pages/Characters';
import LocationsPage from './pages/Locations';
import EpisodesPage from './pages/Episodes';
import NotFoundPage from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/Characters' element={<CharactersPage />} />
          <Route path='/Locations' element={<LocationsPage />} />
          <Route path='/Episodes' element={<EpisodesPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
