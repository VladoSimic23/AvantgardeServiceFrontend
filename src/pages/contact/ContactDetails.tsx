import { useEffect, useState } from "react";
import globalStyles from "../../globalCss/globalStyle.module.css"
import contactStyles from "./css/contact.module.css"
import client from "../../sanity"
import { urlFor } from "../../components/imageBuilder/imageBuilder";

const contactDetails = `*[_type == "contact"]`;

const ContactDetails = () => {
    const [contactData,setContactData] = useState<any[] | []>([]); 
    const contact =  contactData[0]?.ContactDetails;
    
    useEffect(() => {
        const fetchData = async () => {
          const res = await client.fetch(contactDetails);
          setContactData(res)
        }
        fetchData()
    },[])
    
    if(contactData.length < 1) {
        return;
    }
      
     return (
        <section className={contactStyles.contactDetails}>
            <div>
                {contact?.location?.title && <h4 className={globalStyles.borderGreen}>{contact?.location?.title}</h4>}
                {contact?.location?.theLocation && <h3>{contact?.location.theLocation}</h3>}
            </div>
            <div>
                {contact?.contacts?.title && <h4  className={globalStyles.borderGreen}>{contact?.contacts?.title}</h4>}
                {contact?.contacts?.phoneNumber && <h3>{contact?.contacts?.phoneNumber }</h3>}
                {contact?.contacts?.email && <h3>{contact?.contacts?.email }</h3>}
            </div>
            <div>
                {contact?.socialMedia?.title && <h4  className={globalStyles.borderGreen}>{contact?.socialMedia?.title}</h4>}
                <div className={contactStyles.media}>
                    {contact?.socialMedia?.Media.map((item:any,index: number) => {
                        return <a href={item.mediaUrl} key={index} target="_blank">
                            {item.mediaImage.asset._ref && <img src={urlFor(item.mediaImage.asset._ref).url()} alt={`image${index}`} />}
                        </a>
                    })}
                </div>
            </div>
        </section>
    )
}

export default ContactDetails