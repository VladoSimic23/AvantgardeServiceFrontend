import { useEffect, useState } from "react";
import style from "./css/footer.module.css"
import client from "../../sanity"
import { urlFor } from "../imageBuilder/imageBuilder";

const testi = `*[_type == "footer"]`;

const Footer = () => {
    const [footerData,setFooterData] = useState<any[] | []>([]);
    
    useEffect(() => {
        const fetchData = async () => {
          const res = await client.fetch(testi);
          setFooterData(res)
        }
        fetchData()
      },[])
  return (
    <div className={style.footer} style={{backgroundImage: `url(${footerData[0]?.BackgroundImage.asset._ref && urlFor(footerData[0]?.BackgroundImage.asset._ref).url()})`}}>
      <div className={style.footerOverlay}></div>
      fsdfsdf
      <div className={style.footerContent}>
        {footerData[0]?.heading && <h1>{footerData[0]?.heading}</h1>}
        {footerData[0]?.text && <p>{footerData[0]?.text}</p>}
        {footerData[0]?.book && <h3>{footerData[0]?.book}</h3>}
        <div>
          {footerData[0]?.media && footerData[0]?.media.map((item:any,index:number) => {
            return <div className={style.media} key={index}>
              {item.mediaImage.asset._ref && <img src={urlFor(item.mediaImage.asset._ref).url()} alt={item.media} />}
              <span>{item.mediaName}</span>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Footer