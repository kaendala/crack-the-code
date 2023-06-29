import './Banner.css';
import banner from '../../assets/images/banner.png';
import { VideoGames } from '../../../src/models/videoGames.interface';

type BannerProps = {
  info?: VideoGames;
};

const Banner = ({ info }: BannerProps) => {
  return (
    <>
      {info && (
        <div className="banner">
          <div className="containerInfo">
            <div className="text">
              <h1>{info.name}</h1>
              <p>{info.call_out}</p>
            </div>
            <div className="imageBanner">
              <img className="img" src={banner} />
            </div>
            <div className="infoCourse">
              <p>De {info.age_range_min_max} años</p>
              <p>{info.available_places} alumnos por clase max.</p>
              <p>Duración: {info.duration.split('.')[0]} meses</p>
            </div>
          </div>
          <div className="shadow" />
        </div>
      )}
    </>
  );
};
export default Banner;
