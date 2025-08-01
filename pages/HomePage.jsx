import { useState, useEffect } from 'react';
import Navbar from "../src/layouts/Navbar";
import Card from "../src/layouts/card";

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
            <div className="container my-4">
                <h1>🎬 Lista Film</h1>
                <div className="row">
                    {movies.map(movie => (
                        <div key={movie.id}>
                            <Card movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}