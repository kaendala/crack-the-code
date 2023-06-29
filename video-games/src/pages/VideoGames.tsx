import Levels from '../../src/components/Levels/Levels';
import Banner from '../../src/components/Banner/Banner';
import { VideogamesServices } from '../../src/services/videogames.service';
import { Course, VideoGames } from '../../src/models/videoGames.interface';
import { useEffect, useState } from 'react';
import Benefits from '../../src/components/Benefits/Benefits';
import Faqs from '../../src/components/Faqs/Faqs';

const VideoGames = () => {
  const { getAll } = VideogamesServices;
  const [data, setData] = useState<VideoGames>();
  const [levels, setLevels] = useState<Course[]>([]);
  useEffect(() => {
    getAll().then((res) => {
      setLevels(res.data.courses);
      setData(res.data);
    });
  }, []);
  return (
    <>
      <Banner info={data} />
      <Levels courses={levels} />
      <Benefits benefits={data?.benefits} />
      <Faqs faqs={data?.faqs} />
    </>
  );
};
export default VideoGames;
