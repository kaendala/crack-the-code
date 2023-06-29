import { useEffect, useState } from 'react';
import { Path } from '../../models/learningRoutes.inteface';
import { LearnRoutesServices } from '../../services/routes.service';
import minecraft from '../../assets/images/minecraft.jpeg';
import kids from '../../assets/images/kids.jpg';
import videogames from '../../assets/images/videogames.jpg';
import graphic from '../../assets/images/graphic.jpg';
import video from '../../assets/images/video.jpg';
import dev from '../../assets/images/dev.jpg';
import python from '../../assets/images/python.png';
import Card from '../Card/Card';
import './Grid.css';

const Grid = () => {
  const { getAll } = LearnRoutesServices;
  const [paths, setpaths] = useState<Path[]>([]);
  useEffect(() => {
    getAll().then((res) => setpaths(res.data.all));
  }, []);

  type imagesOp = {
    [key: number]: any;
  };
  const images: imagesOp = {
    16: minecraft,
    1: kids,
    2: videogames,
    10: graphic,
    9: video,
    14: dev,
    15: python,
  };

  return (
    <>
      <div className="RoutesTitle">
        <h2>Rutas de Aprendizaje</h2>
      </div>
      <div className="grid">
        {paths?.length > 0 &&
          paths.map((path) => (
            <Card key={path.id} info={path} image={images[path.id]} />
          ))}
      </div>
    </>
  );
};
export default Grid;
