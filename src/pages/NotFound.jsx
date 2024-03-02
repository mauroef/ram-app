import Hero from '../components/Layout/Hero/Hero';
import Header from '../components/Layout/Header/Header';
import { PAGE } from '../../config/';

const NotFound = () => {
  return (
    <>
      <Header />
      <main>
        <Hero page={PAGE.NOT_FOUND}>
          <h2>Pagina no encontrada</h2>
          <p>
            Wubba lubba dub dub! Parece que te has aventurado en un lugar
            desconocido, esta página no existe en nuestro multiverso.
          </p>
        </Hero>
      </main>
    </>
  );
};

export default NotFound;
