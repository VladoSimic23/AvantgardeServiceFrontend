import { useEffect, useState } from "react";
import globalStyles from "../../globalCss/globalStyle.module.css"
import client from "../../sanity"
import { urlFor } from "../../components/imageBuilder/imageBuilder";
import taxiStyles from "../taxi/css/taxi.module.css"

const hero = `*[_type == "excursions"]`;

const ExcursionOffers = () => {
    const [excData,setExcData] = useState<any[] | []>([]);
    
  useEffect(() => {
      const fetchData = async () => {
        const res = await client.fetch(hero);
        setExcData(res)
      }
      fetchData()
    },[])
    
  return (
    <section>
      <div className={globalStyles.container}>
      <div className={`${globalStyles.textCenter} ${globalStyles.container800}`}>
        {excData[0]?.excrusions.heading && <h1 className={globalStyles.borderGreen}>{excData[0]?.excrusions.heading}</h1>}
        {excData[0]?.excrusions.text && <p>{excData[0]?.excrusions.text}</p>}
      </div>
      <div>
        {excData[0]?.excrusions.addTown && excData[0]?.excrusions.addTown.map((item:any,index: number) => {
          return <div key={index} className={globalStyles.textCenter} >
            <div className={globalStyles.container800}>
              {item.heading && <h2 className={globalStyles.borderGreen}>{item.heading}</h2>}
              {item.text && <p>{item.text}</p>}
            </div>
            <div className={globalStyles.grid3}>
            {item.images.map((item:any,index:number) => {
              return <div key={index}>
                <img className={taxiStyles.taxiImg} src={item.asset._ref && urlFor(item.asset._ref).url()} width="auto" height="auto" alt={`image${index}`} />
              </div>
            })}
            </div>
            {item.reservation.reservationText && <a className={globalStyles.btnGreen} href={item.reservation.reservationUrl} target="_blank">{item.reservation.reservationText}</a>}
          </div>
        }) }
      </div>
      </div>
    </section>
  )
}

export default ExcursionOffers