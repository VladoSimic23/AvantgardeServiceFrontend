import ContactDetails from "./ContactDetails"
import ContactForm from "./ContactForm"
import ContactHeroSection from "./ContactHeroSection"
import globalStyles from "../../globalCss/globalStyle.module.css"


const ContactUs = () => {
  return (
    <div>
      <ContactHeroSection/>
      <div className={globalStyles.container}>
        <div className={globalStyles.grid2}>
          <ContactDetails/>
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default ContactUs