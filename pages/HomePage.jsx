import { useState, useEffect } from 'react';
import Navbar from "../src/layouts/Navbar";
import Card from "../components/card";
import Footer from "../components/Footer";  // ← IMPORTA QUI

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/api/movies/')
            .then(response => response.json())
            .then(data => setMovies(data));
    }, []);

    return (
        <>
            <Navbar />
            <h1 className='text-center text-white'>🎬 Lista Film</h1>
            <div className="col-12 col-md-8 col-lg-6 mx-auto">
                {movies.map(movie => (
                    <div key={movie.id}>
                        <Card movie={movie} />
                        <hr className='hr-gradient-sky' />
                    </div>
                ))}
            </div>
            <Footer />  {/* ← AGGIUNGI QUI */}
        </>
    )
}