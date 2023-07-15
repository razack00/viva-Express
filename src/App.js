
import './App.css'
import Home from './pages/home';
import Blog from './pages/Blog'

import travelSearchList from './travelSearchList'
import data from "./data";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './pages/About'
import Contact from './pages/Contact'
import Details from './pages/Details';
import Reservation from './pages/Reservation'

function App() {
  return (
    <>
      <Router>
      <NavBar />
        <Routes>
          <Route path='/viva-Express' element={<Home data={data} travelSearchList={travelSearchList} />} exact />
          <Route path='/blog' element={<Blog data={data}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blogs/:id' element={<Details />} />
          <Route path='/reservation' element={<Reservation />} />
        </Routes>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
