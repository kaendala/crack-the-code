import { Faq } from '../../../src/models/videoGames.interface';
import './Faqs.css';

type FaqsProps = {
  faqs?: Faq[];
};

const Faqs = ({ faqs }: FaqsProps) => {
  return (
    <div className="faqContent">
      <h2 className="title">Preguntas frecuentes</h2>
      <div id="accordion" className="accordion">
        {faqs &&
          faqs.map((faq, index) => (
            <div className="card">
              <div
                className="card-header"
                id="headingOne"
                data-toggle="collapse"
                data-target={`#collapse${index}`}>
                <span className="black">{faq.question}</span>
              </div>

              <div
                id={`collapse${index}`}
                className="collapse collapsed"
                data-parent="#accordion">
                <div className="card-body">{faq.answer}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Faqs;
