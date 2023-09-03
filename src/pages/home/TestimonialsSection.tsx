import { useEffect, useState } from "react";
import globalStyles from "../../globalCss/globalStyle.module.css"
import client from "../../sanity"
import Accordion from "../../components/accordion/Accordion";

const testi = `*[_type == "homepage"]`;

const TestimonialsSection = () => {
    const [testiData,setTestiData] = useState<any[] | []>([]);
    
    useEffect(() => {
        const fetchData = async () => {
          const res = await client.fetch(testi);
          setTestiData(res)
        }
        fetchData()
      },[])

  return (
    <section>
         <div className={globalStyles.testimonials}>
            {testiData[0]?.testimonials.heading && <h1 className={globalStyles.borderGreen}>{testiData[0]?.testimonials.heading}</h1>}
            {testiData[0]?.testimonials.text &&<p>{testiData[0]?.testimonials.text}</p>}
            {testiData[0]?.testimonials.reviews && testiData[0]?.testimonials.reviews.map((item:any,index: number) => {
               return <Accordion key={index} {...item} />
            })}
        </div>
    </section>
  )
}

export default TestimonialsSection