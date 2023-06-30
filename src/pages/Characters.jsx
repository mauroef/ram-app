import Hero from '../components/Layout/Hero/Hero';
import Section from '../components/Layout/Section/Section';
import { default as CharactersElement } from '../components/Characters/Characters';

const Characters = () => {
  return (
    <main>
      <Hero backgroundURL={'/src/assets/bg-characters.jpg'}>
        <p>
          ¡Bienvenido a la sección de Personajes! Sumérgete en el fascinante
          elenco de Rick and Morty. Desde el genio científico Rick hasta su
          intrépido nieto Morty, cada personaje tiene su propia historia,
          personalidad y una dosis única de locura. Explora sus perfiles
          detallados, descubre sus motivaciones y acompáñalos en sus aventuras
          interdimensionales. ¿Estás listo para conocer a los personajes más
          extravagantes del multiverso?
        </p>
      </Hero>
      <Section>
          <CharactersElement />
      </Section>
    </main>
  );
};

export default Characters;
