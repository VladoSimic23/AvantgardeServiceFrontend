import { useEffect, useState } from "react";
import globalStyles from "../../globalCss/globalStyle.module.css"
import client from "../../sanity"
import { urlFor } from "../../components/imageBuilder/imageBuilder";
import taxiStyles from "./css/taxi.module.css"

const hero = `*[_type == "taxiAndTransfers"]`;

const TaxiServicesSection = () => {
    const [taxiData,setTaxiData] = useState<any[] | []>([]);

    useEffect(() => {
        const fetchData = async () => {
          const res = await client.fetch(hero);
          setTaxiData(res)
        }
        fetchData()
      },[])

  return (
    <section className={taxiStyles.taxi}>
        <div className={globalStyles.container}>
            {taxiData[0]?.transportServices.heading && <h1 className={globalStyles.borderGreen}>{taxiData[0]?.transportServices.heading}</h1>}
            {taxiData[0]?.transportServices.text && <p>{taxiData[0]?.transportServices.text}</p>}
            <div className={globalStyles.grid3}>
                {taxiData[0]?.transportServices.services && taxiData[0]?.transportServices.services.map((item:any,index:number) => {
                    return <div key={index}>
                        <img className={taxiStyles.taxiImg} src={item.image.asset._ref && urlFor(item.image.asset._ref).url()} alt="" />
                        {item.heading && <h2 className={globalStyles.borderGreen}>{item.heading}</h2>}
                        {item.text && <p>{item.text}</p>}
                    </div>
                })}
            </div>
        </div>
    </section>
  )
}

export default TaxiServicesSection