import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import ScrollToTop from '../src/components/ScrollToTop/'; // FIXME: Add ScrollToTop
import Layout from './components/Layout/Layout';
import HomePage from './pages/Home';
import CharactersPage from './pages/Characters';
import LocationsPage from './pages/Locations';
import EpisodesPage from './pages/Episodes';
import NotFoundPage from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'characters',
        element: <CharactersPage />,
      },
      {
        path: 'locations',
        element: <LocationsPage />,
      },
      {
        path: 'episodes',
        element: <EpisodesPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
