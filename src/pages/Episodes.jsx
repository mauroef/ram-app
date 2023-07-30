import Hero from '../components/Layout/Hero/Hero';
import Section from '../components/Layout/Section/Section';
import PageNavigation from '../components/PageNavigation/PageNavigation';
import { default as EpisodesElement } from '../components/Episodes/Episodes';
import { PAGE } from '../../config/';
import imagePath from '/src/assets/bg-episodes.jpg';


const Episodes = () => {
  return (
    <main>
      <Hero backgroundURL={imagePath}>
        <p>
          ¡Explora la sección de Episodios y sumérgete en las aventuras más
          alucinantes de Rick and Morty! Revive los momentos más divertidos,
          emocionantes y sorprendentes de la serie. Desde el caos intergaláctico
          hasta los giros inesperados, cada episodio te transportará a través
          del tiempo, el espacio y dimensiones desconocidas. ¡Prepárate para un
          maratón de episodios lleno de diversión y sci-fi!
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
