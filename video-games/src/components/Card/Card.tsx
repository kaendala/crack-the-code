import { Course } from '../../../src/models/videoGames.interface';
import first from '../../assets/images/1.png';
import second from '../../assets/images/2.png';
import third from '../../assets/images/3.jpg';
import './Card.css';
type CardProps = {
  info: Course;
};

type imagesOp = {
  [key: number]: any;
};
const images: imagesOp = {
  9: first,
  10: second,
  11: third,
};
const Card = ({ info }: CardProps) => {
  return (
    <div className="CardV">
      <div className="title">{info.name}</div>
      <div className="contentImage">
        <img className="image" src={images[info.id]}></img>
      </div>
      <div className="description">
        <p>{info.project_summary}</p>
      </div>
      <div className="infoContent">
        <div className="mainInfo">
          <div>
            <span className="black">Duración: </span>
            {`${info.duration.split('.')[0]} meses`}
          </div>
          <div>
            <span className="black">Clases: </span>
            {`${info.number_of_sessions} clases`}
          </div>
        </div>
        <div className="learnContent">
          <p className="black">Skills que aprenderas:</p>
          {info.skills_to_develop?.length > 0 &&
            info.skills_to_develop.map((skill) => (
              <div key={skill} className="skill">
                <span>{skill} </span>
              </div>
            ))}
        </div>
      </div>
      <div className="price">
        {parseInt(info.discount_percentage) > 0 && (
          <p className="discount">${info.amount_usd} USD</p>
        )}
        <p className="total black">
          $
          {parseInt(info.discount_percentage) > 0
            ? info.amount_after_discount_usd
            : info.amount_usd}{' '}
          USD
        </p>
      </div>
    </div>
  );
};
export default Card;
