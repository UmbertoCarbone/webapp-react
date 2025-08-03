import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from '../pages/HomePage'
import Movies from "../pages/Movies"
import AboutUs from "../pages/AboutUs"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Movies/:id" element={<Movies />} />
        <Route path="/About" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}