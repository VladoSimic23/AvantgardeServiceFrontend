import ContactForm from "./ContactForm"
// import ContactHeroSection from "./ContactHeroSection"
import {lazy,Suspense} from "react"

const ContactHeroSection = lazy(() => import("./ContactHeroSection"));

const ContactUs = () => {
  return (
    <div>
      <Suspense fallback={<div>
          <h1>Loading...</h1>
        </div>}>
          <ContactHeroSection/>
        </Suspense>
      <ContactForm/>
    </div>
  )
}

export default ContactUs