// import TaxiHeroSection from './TaxiHeroSection'
import TaxiServicesSection from './TaxiServicesSection'
import {lazy,Suspense} from "react"

const TaxiHeroSection = lazy(() => import("./TaxiHeroSection"));

const Taxi = () => {
  return (
    <div>
       <Suspense fallback={<div>
          <h1>Loading...</h1>
        </div>}>
          <TaxiHeroSection/>
        </Suspense>
      <TaxiServicesSection/>
    </div>
  )
}

export default Taxi