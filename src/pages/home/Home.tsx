import ExperienceSection from "./ExperienceSection";
import GetToKnowUsSection from "./GetToKnowUsSection";
import TestimonialsSection from "./TestimonialsSection";
import {lazy,Suspense} from "react"

const HeroSection = lazy(() => import("./HeroSection"));

const Home = () => {
  return (
    <div>
        <Suspense fallback={<div>
          <h1>Loading...</h1>
        </div>}>
          <HeroSection/>
        </Suspense>
        <ExperienceSection/>
        <GetToKnowUsSection/>
        <TestimonialsSection/>
    </div>
  )
}

export default Home