import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Navbar from "../src/layouts/Navbar";
import Card from "../components/card";

export default function SingleMovies() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3030/api/movies/${id}`)
            .then(response => response.json())
            .then(data => setMovie(data));
    }, [id]);

    return (
        <>
            <Navbar />
            <h1 className='text-center text-white'>
                🎬 {movie?.title || 'Caricamento...'}
            </h1>
            <div className="col-12 col-md-8 col-lg-6 mx-auto">
                {movie && <Card movie={movie} showButton={false} />}
            </div>
        </>
    )
}