import  { useState } from 'react';
import styles from "./css/slideshow.module.css"
import { urlFor } from "../../components/imageBuilder/imageBuilder";

const ImageSlideshow = ({ images }: {images: any[] | undefined}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  
  if(!images || images.length < 1) {
      return;
    }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className={styles.imageSlideshow}>
      <div className={`${styles.arrow} ${styles.leftArrow}`} onClick={prevSlide}>
        &lt;
      </div>
       {images[currentIndex].asset._ref && <img src={images[currentIndex].asset._ref && urlFor(images[currentIndex].asset._ref).url()} alt={`Slide ${currentIndex + 1}`} />} 
      <div className={`${styles.arrow} ${styles.rightArrow}`} onClick={nextSlide}>
        &gt;
      </div>
    </div>
  );
};

export default ImageSlideshow;
