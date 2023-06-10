import { Suspense } from 'react';
import { fetchData } from './fetchData';
import Header from './components/Layout/Header/Header';
import Characters from './components/Characters/Characters';
import Hero from './components/Layout/Hero/Hero';

const BASE_URL = 'https://rickandmortyapi.com/api';
const RESOURCES = {
  CHARACTERS: '/character',
  LOCATIONS: '/locations',
  EPISODES: '/episodes',
};
const apiData = fetchData(BASE_URL + RESOURCES.CHARACTERS);

const App = () => {
  const data = apiData.read();

  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Suspense fallback={<div>Loading...</div>}>
          <Characters items={data}/>
        </Suspense>
      </main>
    </>
  );
};

export default App;
