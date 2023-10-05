import { useEffect, useState, useContext } from "react";
import globalStyles from "../../globalCss/globalStyle.module.css"
import styles from "./css/home.module.css"
import client from "../../sanity"
import { urlFor } from "../../components/imageBuilder/imageBuilder";
import taxiStyles from "../taxi/css/taxi.module.css"
import { NavLink } from "react-router-dom";
import { MyContext } from "../../ContextApi";

const hero = `*[_type == "homepage"]`;

const GetToKnowUsSection = () => {
    const [getToData,setGetToData] = useState<any[] | []>([]);
    const {handleItemClick} = useContext(MyContext)
  
    useEffect(() => {
        const fetchData = async () => {
          const res = await client.fetch(hero);
          setGetToData(res)
        }
        fetchData()
      },[])


  return (
    <section>
    <div className={globalStyles.container}>
        <div className={styles.getToKnow}>
            {getToData[0]?.getToKnowUs.heading && <h1 className={globalStyles.borderGreen}>{getToData[0]?.getToKnowUs.heading}</h1>}
            {getToData[0]?.getToKnowUs.text && <p>{getToData[0]?.getToKnowUs.text}</p>}
        </div>
        <div className={globalStyles.grid3}>
            {getToData[0]?.getToKnowUs.offers && getToData[0]?.getToKnowUs.offers.map((item: any,index: number) => {
                const {Image: {asset: {_ref}},Button_Link: {ButtonLink,ButtonText},Heading,Text} = item;
                return <div key={index} className={styles.getToFlex}>
                    {_ref && <img className={taxiStyles.taxiImg} src={_ref && urlFor(_ref).url()} width="auto" height="auto" alt={String(index)} />}
                    {Heading && <div><h2 className={globalStyles.borderGreen}>{Heading}</h2></div>}
                    {Text && <p>{Text}</p>}
                    {ButtonText && <div><NavLink onClick={() => handleItemClick(index + 1)} to={ButtonLink}>{ButtonText}</NavLink></div>}
                </div>
            } )}
        </div>
    </div>
</section>
  )
}

export default GetToKnowUsSection