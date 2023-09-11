// import ExcHeroSection from './ExcHeroSection'
import ExcursionOffers from './ExcursionOffers'
import {lazy,Suspense} from "react"

const ExcHeroSection = lazy(() => import("./ExcHeroSection"));

const Excursions = () => {
  return (
    <div>
       <Suspense fallback={<div>
          <h1>Loading...</h1>
        </div>}>
          <ExcHeroSection/>
        </Suspense>
      <ExcursionOffers/>
    </div>
  )
}

export default Excursions