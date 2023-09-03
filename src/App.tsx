import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Accommodation from './pages/accomodation/Accommodation';
import Taxi from './pages/taxi/Taxi';
import Excursions from './pages/excursions/Excursions';
import ContactUs from './pages/contact/ContactUs';
import PageNotFound from './pages/PageNotFound/PageNotFound';


function App() {

  return (
    <>
      <Router>
      <Menu/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/accommodation' element={<Accommodation/>} />
          <Route path='/taxi' element={<Taxi/>} />
          <Route path='/excursions' element={<Excursions/>} />
          <Route path='/contact' element={<ContactUs/>} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
        <Footer/>
      </Router>      
    </>
  )
}

export default App
