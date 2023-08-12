import Hero from '../components/Layout/Hero/Hero';
import Section from '../components/Layout/Section/Section';
import PageNavigation from '../components/PageNavigation/PageNavigation';
import { default as EpisodesElement } from '../components/Episodes/Episodes';
import { PAGE } from '../../config/';

const Episodes = () => {
  return (
    <main>
      <Hero page={PAGE.EPISODES}>
        <p>
          ¡Explora la sección de Episodios y sumérgete en las aventuras más
          alucinantes de Rick and Morty!
        </p>
        <p>
          Desde el caos intergaláctico hasta los giros inesperados, cada
          episodio te transportará a través del tiempo, el espacio y dimensiones
          desconocidas.
        </p>
      </Hero>
      <Section>
        <PageNavigation currentPage={PAGE.EPISODES} />
        <EpisodesElement />
      </Section>
    </main>
  );
};

export default Episodes;
