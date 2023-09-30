import { useContext, useEffect, useState } from "react";
import globalStyles from "../../globalCss/globalStyle.module.css"
import client from "../../sanity"
import ImageSlideshow from "../../components/slideshow/ImageSlideshow";
import {lazy,Suspense} from "react"
import { NavLink } from "react-router-dom";
import { MyContext } from "../../ContextApi";

const hero = `*[_type == "accommodation"]`;

const Videos = lazy(() => import("../../components/videos/Videos"));

const AccHousesSection = () => {
    const [houseData,setHouseData] = useState<any[] | []>([]);
    const {handleItemClick} = useContext(MyContext)        
    
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
                    const {headingWithHouseLink: {heading,houseUrl},images, text,videos} = item;
                    return <div key={index}>
                        {heading && <NavLink onClick={() => handleItemClick(4)} to={houseUrl} className={globalStyles.greenLink}>{heading}</NavLink>}
                        {text && <p className={globalStyles.container800}>{text}</p>}
                        <div>                            
                            <ImageSlideshow images={images}/>
                        </div>
                        <div>
                            {videos.length > 0 && <Suspense fallback={<div>Loading Video...</div>}>
                                <Videos videos={videos}/>
                            </Suspense>}
                        </div>
                    </div>
                })}
            </div>
        </div>
    </section>
  )
}

export default AccHousesSection

