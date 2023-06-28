import './Banner.css';
import banner from '../../assets/images/banner.png';

const Banner = () => {
  return (
    <div className="banner">
      <div className="imageBanner">
        <img className="img" src={banner} />
      </div>
      <div className="text">
        <h1>Rutas de aprendizaje</h1>
        <h3>
          Nuestros programas de 3 a 5 cursos organizados en niveles para que tu
          hij@ profundice en el tema que le apasiona.
        </h3>
      </div>
      <div className="shadow" />
    </div>
  );
};
export default Banner;
