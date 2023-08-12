import Hero from '../components/Layout/Hero/Hero';
import Section from '../components/Layout/Section/Section';
import PageNavigation from '../components/PageNavigation/PageNavigation';
import { default as LocationsElement } from '../components/Locations/Locations';
import { PAGE } from '../../config/';

const Locations = () => {
  return (
    <main>
      <Hero page={PAGE.LOCATIONS}>
        <p>
          Explora los mundos y dimensiones que Rick and Morty han visitado en
          sus aventuras intergalácticas.
        </p>
        <p>
          Sumérgete en cada locación, descubre sus peculiaridades y prepárate
          para encontrarte con seres de todas las formas y tamaños. ¿Listo para
          embarcarte en un viaje a través del multiverso?
        </p>
      </Hero>
      <Section>
        <PageNavigation currentPage={PAGE.LOCATIONS} />
        <LocationsElement />
      </Section>
    </main>
  );
};

export default Locations;
