import Hero from '../components/Layout/Hero/Hero';

const NotFound = () => {
  return (
    <main>
      <Hero backgroundURL={'/src/assets/bg-not-found.jpg'}>
        <h2>Pagina no encontrada</h2>
        <p>Wubba lubba dub dub! Parece que te has aventurado en un lugar desconocido, esta página no existe en nuestro multiverso.</p>
      </Hero>
    </main>
  );
};

export default NotFound;
