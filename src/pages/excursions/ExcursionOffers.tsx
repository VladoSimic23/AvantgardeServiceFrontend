import { useEffect, useState, useContext } from "react";
import globalStyles from "../../globalCss/globalStyle.module.css"
import client from "../../sanity"
import { urlFor } from "../../components/imageBuilder/imageBuilder";
import taxiStyles from "../taxi/css/taxi.module.css"
import { NavLink } from "react-router-dom";
import { MyContext } from "../../ContextApi";

const hero = `*[_type == "excursions"]`;

const ExcursionOffers = () => {
    const [excData,setExcData] = useState<any[] | []>([]);
    const {handleItemClick} = useContext(MyContext)
    
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
            {item.images && item.images.map((item:any,index:number) => {
              return <div key={index}>
                <img className={taxiStyles.taxiImg} src={item.asset._ref && urlFor(item.asset._ref).url()} width="auto" height="auto" alt={`image${index}`} />
              </div>
            })}
            </div>
            {item.reservation.reservationText && <NavLink onClick={() => handleItemClick(4)} className={globalStyles.btnGreen} to={item.reservation.reservationUrl}>{item.reservation.reservationText}</NavLink>}
          </div>
        }) }
      </div>
      </div>
    </section>
  )
}

export default ExcursionOffers