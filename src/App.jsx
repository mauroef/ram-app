import { Suspense } from 'react';
import { fetchData } from './fetchData';
import Characters from './components/Characters/Characters';

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
      <main>
        <p>
          ¡Wubba lubba dub dub! Bienvenidos a mi dimensión interactiva. Aquí
          podrás sumergirte en el vasto universo de Rick and Morty como nunca
          antes. Prepárate para explorar y descubrir todos los secretos de esta
          serie que desafía la realidad.
        </p>
        <Suspense fallback={<div>Loading...</div>}>
          <Characters items={data}/>
        </Suspense>
      </main>
    </>
  );
};

export default App;
