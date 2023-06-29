import Slider from '../slider/Slider';
import { Course } from '../../../src/models/videoGames.interface';
import Card from '../Card/Card';
import './Levels.css';
type LevelsProps = {
  courses?: Course[];
};
const Levels = ({ courses }: LevelsProps) => {
  return (
    <div className="levels">
      <h2 className="title">Cursos</h2>
      {courses && courses.length > 0 && (
        <Slider>
          {courses.map((level: Course) => (
            <Card key={level.id} info={level} />
          ))}
        </Slider>
      )}
    </div>
  );
};
export default Levels;
