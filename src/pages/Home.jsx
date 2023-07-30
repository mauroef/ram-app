import Hero from '../components/Layout/Hero/Hero';
import Section from '../components/Layout/Section/Section';
import Link from '../components/UI/Link/Link';
import Footer from '../components/Layout/Footer/Footer';

const Home = () => {
  return (
    <>
      <main>
        <Hero backgroundURL={'/src/assets/bg-home.png'}>
          <p style={{ minHeight: '10.75rem' }}>
            ¡Wubba lubba dub dub! Bienvenidos a mi dimensión interactiva. Aquí
            podrás sumergirte en el vasto universo de Rick and Morty como nunca
            antes. Prepárate para explorar y descubrir todos los secretos de
            esta serie que desafía la realidad.
          </p>
        </Hero>
        <Section title='Personajes'>
          <p>
            En la sección de Personajes, te invito a conocer a todos los seres
            extravagantes y únicos que habitan este multiverso.
          </p>
          <p>{`Desde el genio
        científico más inteligente (y modesto) de todos los tiempos, hasta
        mi torpe pero valiente nieto Morty. Descubre su trasfondo, sus
        peculiaridades y las sorpresas que cada uno de ellos guarda en su
        interior.`}</p>
          <Link isCTA={true} redirect='/characters'>
            Ver más
          </Link>
        </Section>
        <Section title='Locaciones'>
          <p>
            Las Locaciones te transportarán a lugares asombrosos y a veces
            peligrosos. Desde la dimensión C-137, nuestro hogar principal, hasta
            la Ciudadela de Ricks, un lugar donde convergen innumerables
            versiones de mí mismo.
          </p>
          <p>
            Explora cada rincón de estos escenarios y sumérgete en la magia de
            cada uno de ellos.
          </p>
          <Link isCTA={true} redirect='/locations'>
            Ver más
          </Link>
        </Section>
        <Section title='Episodios'>
          <p>
            Y, por supuesto, no podemos olvidar los Episodios que han hecho
            historia. Revive las aventuras más caóticas, emotivas y alucinantes
            que Rick y Morty han vivido a lo largo de las temporadas.
          </p>
          <p>
            Desde los momentos más hilarantes hasta los giros más sorprendentes,
            cada episodio guarda secretos y referencias que solo los verdaderos
            fanáticos podrán descubrir.
          </p>
          <Link isCTA={true} redirect='/episodes'>
            Ver más
          </Link>
        </Section>
        <Section>
          <p>
            Así que, prepárate para una experiencia interdimensional. Explora,
            descubre y sumérgete en el fascinante universo de Rick and Morty.
            ¡Es hora de dejar tu huella en el multiverso!
          </p>
          <p>
            {`Recuerda, en palabras sabias de un genio como yo: "La ciencia es
        maravillosa, pero el conocimiento compartido es aún más poderoso".
        ¡Empecemos nuestra aventura juntos!`}
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
