import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Accommodation from './pages/accomodation/Accommodation';
import Taxi from './pages/taxi/Taxi';
import Excursions from './pages/excursions/Excursions';
import ContactUs from './pages/contact/ContactUs';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import {lazy,Suspense} from "react"

const Menu = lazy(() => import("./components/menu/Menu"));
const Footer = lazy(() => import("./components/footer/Footer"));


function App() {

  return (
    <>
      <Router>
      <Suspense fallback={<div>
          <h1>Loading...</h1>
        </div>}>
          <Menu/>
        </Suspense>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/accommodation' element={<Accommodation/>} />
          <Route path='/taxi' element={<Taxi/>} />
          <Route path='/excursions' element={<Excursions/>} />
          <Route path='/contact' element={<ContactUs/>} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
        <Suspense fallback={<div>
          <h1>Loading...</h1>
        </div>}>
          <Footer/>
        </Suspense>
      </Router>      
    </>
  )
}

export default App
