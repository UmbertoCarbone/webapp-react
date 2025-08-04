import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Navbar from "../src/layouts/Navbar";
import Card from "../components/card";
import Footer from "../components/Footer";

export default function SingleMovies() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [newReview, setNewReview] = useState('');

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/movies/${id}`)
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
                
                {/* Recensioni esistenti */}
                <div className="mt-5">
                    <h3 className="text-white mb-3">📝 Recensioni</h3>
                    {movie?.reviews?.map((review, index) => (
                        <div key={index} className="bg-dark p-3 rounded mb-3">
                            <p className="text-white-50 mb-0">{review.text}</p>
                        </div>
                    ))}
                </div>

                {/* Form Recensione */}
                <div className="mt-4">
                    <h3 className="text-white mb-3">Scrivi una recensione</h3>
                    <form>
                        <textarea
                            className="form-control bg-dark text-white border-secondary mb-3"
                            rows="4"
                            placeholder="Condividi la tua opinione sul film..."
                            value={newReview}
                            onChange={(e) => setNewReview(e.target.value)}
                        />
                        <a type="submit" className="btn-grad">
                            Aggiungi Recensione
                        </a>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}