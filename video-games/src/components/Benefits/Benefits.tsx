import { Learning } from '../../../src/models/videoGames.interface';
import {
  CodeSandboxOutlined,
  BgColorsOutlined,
  RadarChartOutlined,
} from '@ant-design/icons';
import './Benefits.css';

type BenefitsProps = {
  benefits?: Learning[];
};
const Benefits = ({ benefits }: BenefitsProps) => {
  type imagesOp = {
    [key: number]: any;
  };
  const icons: imagesOp = {
    0: <CodeSandboxOutlined rev />,
    1: <BgColorsOutlined rev />,
    2: <RadarChartOutlined rev />,
  };
  return (
    <>
      {benefits && (
        <div className="benefits">
          <h2>Obtendrás estos conocimientos:</h2>
          <div className="contentBenefits">
            {benefits.map((benefit: Learning, index: number) => (
              <div className="benefit">
                <div className="iconB">{icons[index]}</div>
                <div>{benefit.title}</div>
                <div>{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Benefits;
