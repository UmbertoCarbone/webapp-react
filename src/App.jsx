import './index.css' 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from '../pages/HomePage'
import Movies from "../pages/Movies"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Movies/:id" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  )
}