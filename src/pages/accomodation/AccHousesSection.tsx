import { useEffect, useState } from "react";
import globalStyles from "../../globalCss/globalStyle.module.css"
import client from "../../sanity"
import ImageSlideshow from "../../components/slideshow/ImageSlideshow";

const hero = `*[_type == "accommodation"]`;

const AccHousesSection = () => {
    const [houseData,setHouseData] = useState<any[] | []>([]);
    
    
    useEffect(() => {
        const fetchData = async () => {
          const res = await client.fetch(hero);
          setHouseData(res)
        }
        fetchData()
      },[])

      if(houseData.length < 1) {
        return;
      }

      const {accommodationSection: {text,heading,addHouse}} = houseData[0];
      
  return (
    <section>
        <div className={globalStyles.container}>
            <div className={globalStyles.textCenter}>
                {heading && <h1 className={globalStyles.borderGreen}>{heading}</h1>}
                {text && <p>{text}</p>}
            </div>
            <div className={globalStyles.textCenter}>
                {addHouse && addHouse.map((item:any,index:number) => {
                    const {headingWithHouseLink: {heading,houseUrl},images, text} = item;
                    return <div key={index}>
                        {heading && <a href={houseUrl || "#"} target="_blank" className={globalStyles.linkBlue}>{heading}</a>}
                        {text && <p className={globalStyles.container800}>{text}</p>}
                        <div>                            
                            <ImageSlideshow images={images}/>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </section>
  )
}

export default AccHousesSection