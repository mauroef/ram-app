import { Suspense } from 'react';
import { fetchData } from './fetchData';
import Header from './components/Layout/Header/Header';
import Characters from './components/Characters/Characters';
import Hero from './components/Layout/Hero/Hero';
import Section from './components/Layout/Section/Section';

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
      <Header />
      <main>
        <Hero />
        <Section title='Personajes'>
          <p>
            En la sección de Personajes, te invito a conocer a todos los seres
            extravagantes y únicos que habitan este multiverso. Desde el genio
            científico más inteligente (y modesto) de todos los tiempos, hasta
            mi torpe pero valiente nieto Morty. Descubre su trasfondo, sus
            peculiaridades y las sorpresas que cada uno de ellos guarda en su
            interior.
          </p>
        </Section>
        <Section title='Locaciones'>
          <p>
            Las Locaciones te transportarán a lugares asombrosos y a veces
            peligrosos. Desde la dimensión C-137, nuestro hogar principal, hasta
            la Ciudadela de Ricks, un lugar donde convergen innumerables
            versiones de mí mismo. Explora cada rincón de estos escenarios y
            sumérgete en la magia de cada uno de ellos.
          </p>
        </Section>
        <Section title='Episodios'>
          <p>
            Y, por supuesto, no podemos olvidar los Episodios que han hecho
            historia. Revive las aventuras más caóticas, emotivas y alucinantes
            que Rick y Morty han vivido a lo largo de las temporadas. Desde los
            momentos más hilarantes hasta los giros más sorprendentes, cada
            episodio guarda secretos y referencias que solo los verdaderos
            fanáticos podrán descubrir.
          </p>
        </Section>
        <Section>
          <p>
            Así que, prepárate para una experiencia interdimensional. Explora,
            descubre y sumérgete en el fascinante universo de Rick and Morty.
            ¡Es hora de dejar tu huella en el multiverso!
          </p>
          <p>
            {`Recuerda, en palabras sabias de un genio como yo: 'La ciencia es
            maravillosa, pero el conocimiento compartido es aún más poderoso'.
            ¡Empecemos nuestra aventura juntos!"`}
          </p>
        </Section>
        <Suspense fallback={<div>Loading...</div>}>
          <Characters items={data} />
        </Suspense>
      </main>
    </>
  );
};

export default App;
