// import AccHeroSection from "./AccHeroSection"
import AccHousesSection from "./AccHousesSection"
import {lazy,Suspense} from "react"

const AccHeroSection = lazy(() => import("./AccHeroSection"));


const Accommodation = () => {
  return (
    <div>
         <Suspense fallback={<div>
          <h1>Loading...</h1>
        </div>}>
          <AccHeroSection/>
        </Suspense>
        <AccHousesSection/>
    </div>
  )
}

export default Accommodation