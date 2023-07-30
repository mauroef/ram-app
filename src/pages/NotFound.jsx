import Hero from '../components/Layout/Hero/Hero';
import imagePath from '/src/assets/bg-not-found.jpg';

const NotFound = () => {
  return (
    <main>
      <Hero backgroundURL={imagePath}>
        <h2>Pagina no encontrada</h2>
        <p>Wubba lubba dub dub! Parece que te has aventurado en un lugar desconocido, esta página no existe en nuestro multiverso.</p>
      </Hero>
    </main>
  );
};

export default NotFound;
