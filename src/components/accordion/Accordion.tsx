import  { useState } from 'react';
import styles from "./css/accordion.module.css"
import { urlFor } from "../../components/imageBuilder/imageBuilder";

const Accordion = ({ ...item }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const {country: {asset: {_ref}},personName, rating: {value},text} = item;

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionHeader} onClick={toggleAccordion}>
        <img src={urlFor(_ref).url()} alt={personName} />
        <h3>{personName}</h3>
        <p>{value} / 10</p>
        <span className={`icon ${isOpen ? styles.rotateDot : styles.rotateZero}`}>▼</span>
      </div>
      {isOpen && <div className={styles.accordionContent}>{text && <p>{text}</p>}</div>}
    </div>
  );
};

export default Accordion;
