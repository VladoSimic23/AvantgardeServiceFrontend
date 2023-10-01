import { useEffect, useState } from "react";
import globalStyles from "../../globalCss/globalStyle.module.css"
import client from "../../sanity"
import { urlFor } from "../../components/imageBuilder/imageBuilder";

const hero = `*[_type == "homepage"]`;

const ExperienceSection = () => {
    const [experienceData,setExperienceData] = useState<any[] | []>([]);
    
    useEffect(() => {
        const fetchData = async () => {
          const res = await client.fetch(hero);
          setExperienceData(res)
        }
        fetchData()
      },[])


  return (

    <section className={globalStyles.container}>
    <div className={globalStyles.grid2}>
      {experienceData[0]?.experience.ImageThenText && experienceData[0]?.experience.ImageThenText?.map((item:any,index:number) => {
          return <div key={index}>
              {item.Experience_Image.asset._ref && <img src={item.Experience_Image.asset._ref && urlFor(item.Experience_Image.asset._ref).url()} width="auto" height="auto" alt={`image${index}`} />}
              {item.Experience_Heading && <h1 className={globalStyles.borderGreen}>{item.Experience_Heading}</h1>}
              {item.Experience_Text && <p>{item.Experience_Text}</p>}
          </div>
      })}
      {experienceData[0]?.experience.TextThenImage && experienceData[0]?.experience.TextThenImage.map((item:any,index:number) => {
          return <div  key={index}>
              {item.Experience_Heading && <h1 className={`${globalStyles.borderGreen} ${globalStyles.headMargin}`} >{item.Experience_Heading}</h1>}
              {item.Experience_Text && <p>{item.Experience_Text}</p>}
              {item.Experience_Image.asset._ref && <img src={item.Experience_Image.asset._ref && urlFor(item.Experience_Image.asset._ref).url()} width="auto" height="auto" alt={`image${index}`} />}
          </div>
      })}
    </div>
  </section>
  )
}

export default ExperienceSection