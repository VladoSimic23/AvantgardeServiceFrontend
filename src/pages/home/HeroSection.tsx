import { useEffect, useState } from "react";
import styles from "./css/home.module.css"
import globalStyles from "../../globalCss/globalStyle.module.css"
import client from "../../sanity"
import { urlFor } from "../../components/imageBuilder/imageBuilder";

const hero = `*[_type == "homepage"]`;

const HeroSection = () => {
    const [heroData,setHeroData] = useState<any[] | []>([]);

    useEffect(() => {
        const fetchData = async () => {
          const res = await client.fetch(hero);
          setHeroData(res)
        }
        fetchData()
      },[])
  return (
    <div className={styles.hero} style={{backgroundImage: `url(${heroData[0]?.hero.HeroBgImage.asset._ref && urlFor(heroData[0]?.hero.HeroBgImage.asset._ref).url()})`}}>
        {heroData[0]?.hero.HeroBgImage.asset && <div className={globalStyles.imageOverlay}></div>}
        <div className={styles.heroText}>
        {heroData[0]?.hero.heroHeading && <h1 className={globalStyles.borderGreen}>{heroData[0]?.hero.heroHeading}</h1>}
        {heroData[0]?.hero.heroText && <h2>{heroData[0]?.hero.heroText}</h2>}
        {heroData[0]?.hero.heroButton && <a href={heroData[0]?.hero.heroButton.url}>{heroData[0]?.hero.heroButton.label}</a>}
        </div>
    </div>
  )
}

export default HeroSection