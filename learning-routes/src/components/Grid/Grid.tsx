import { useEffect, useState } from 'react';
import { Path } from '../../models/learningRoutes.inteface';
import { LearnRoutesServices } from '../../services/routes.service';
import response from '../../assets/json/learn-paths.json';
import Card from '../Card/Card';
import './Grid.css';

const Grid = () => {
  const { getAll } = LearnRoutesServices;
  useEffect(() => {
    getAll().then((res) => console.log(res));
  }, []);
  return (
    <div className="grid">
      {response?.all.map((path) => (
        <Card key={path.id} info={path} />
      ))}
    </div>
  );
};
export default Grid;
