import { Path } from '../../../src/models/learningRoutes.inteface';
import './Card.css';

type CardProps = {
  info: Path;
};
const Card = ({ info }: CardProps) => {
  return (
    <div className="card">
      <div className="ribbon ribbon-top-left">
        <span>{info.age_range_min_max}</span>
      </div>
      <div className="picture">
        <img
          alt="pictureCourse"
          className="pictureCourse"
          src={`https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/15/Minecraft_Java_%26_Bedrock_Edition_for_PC_square_key_art.jpg/revision/latest?cb=20220610115912`}></img>
      </div>
      <div className="description">
        <h2 className="title">{info.name}</h2>
        <p className="info">{info.call_out}</p>
        <div className="pathContainer">
          <div className="path"></div>
          {info.courses.map((course, index) => (
            <div className="route">
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
