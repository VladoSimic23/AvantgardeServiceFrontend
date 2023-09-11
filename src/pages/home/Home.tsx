import {lazy,Suspense} from "react"
const HeroSection = lazy(() => import("./HeroSection"));
const ExperienceSection= lazy(() => import("./ExperienceSection"));
const TestimonialsSection = lazy(() => import("./TestimonialsSection"));

const Home = () => {
  return (
    <div>
       { HeroSection && <Suspense fallback={<div>
          <h1>Loading...</h1>
        </div>}>
          <HeroSection/>
        </Suspense>}
        { ExperienceSection && <Suspense fallback={<div>
          <h1>Loading...</h1>
        </div>}>
          <ExperienceSection/>
        </Suspense>}
        { TestimonialsSection && <Suspense fallback={<div>
          <h1>Loading...</h1>
        </div>}>
          <TestimonialsSection/>
        </Suspense>}
    </div>
  )
}

export default Home