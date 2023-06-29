import { Path } from '../../../src/models/learningRoutes.inteface';
import { useNavigate } from 'react-router-dom';
import './Card.css';

type CardProps = {
  info: Path;
  image: any;
};
const Card = ({ info, image }: CardProps) => {
  let navigate = useNavigate();
  return (
    <div className="card">
      <div className="ribbon ribbon-top-left">
        <span>{info.age_range_min_max}</span>
      </div>
      <div className="picture">
        <img alt="pictureCourse" className="pictureCourse" src={image}></img>
      </div>
      <div className="description">
        <h2 className="title">{info.name}</h2>
        <p className="info">{info.call_out}</p>
        <div className="pathContainer">
          <div className="path"></div>
          {info.courses.map((course, index) => (
            <div key={`course-${course.id}`} className="route">
              <div className="number">{index + 1}</div>
              <p className="name">{course.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Card;
