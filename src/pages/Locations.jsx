import Hero from '../components/Layout/Hero/Hero';
import Section from '../components/Layout/Section/Section';
import { default as LocationsElement } from '../components/Locations/Locations';

const Locations = () => {
  return (
    <main>
      <Hero backgroundURL={'/src/assets/bg-locations.jpg'}>
        <p>
          ¡Bienvenido a la sección de Locaciones! Explora los mundos y
          dimensiones que Rick and Morty han visitado en sus aventuras
          intergalácticas. Desde la dimensión C-137, el hogar principal de
          nuestros protagonistas, hasta lugares tan asombrosos como la Ciudadela
          de Ricks. Sumérgete en cada locación, descubre sus peculiaridades y
          prepárate para encontrarte con seres de todas las formas y tamaños.
          ¿Listo para embarcarte en un viaje a través del multiverso?
        </p>
      </Hero>
      <Section>
        <LocationsElement />
      </Section>
    </main>
  );
};

export default Locations;
