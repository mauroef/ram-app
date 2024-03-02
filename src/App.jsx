import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';
const CharactersPage = lazy(() => import('./pages/Characters'));
const LocationsPage = lazy(() => import('./pages/Locations'));
const EpisodesPage = lazy(() => import('./pages/Episodes'));

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
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <CharactersPage />
          </Suspense>
        ),
      },
      {
        path: 'locations',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <LocationsPage />
          </Suspense>
        ),
      },
      {
        path: 'episodes',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <EpisodesPage />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
