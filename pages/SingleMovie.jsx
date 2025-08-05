import { data, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Navbar from "../src/layouts/Navbar";
import Card from "../components/card";
import Footer from "../components/Footer";

export default function SingleMovies() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        vote: "",
        text: ''
    });

    function handleSubmit(e) {
        e.preventDefault();
        // Logica per inviare la recensione al server
        console.log("consolelog riuscito!", formData);

        fetch(`${import.meta.env.VITE_API_URL}/api/movies/${id}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data => {
                console.log("Recensione aggiunta:", data);

                // Aggiorna il movie con prevState e spread operator
                setMovie(prevMovie => ({
                    ...prevMovie,
                    reviews: [...(prevMovie.reviews || []), formData]
                }));

                // Reset del form
                setFormData({
                    name: '',
                    vote: "",
                    text: ''
                });

                alert("Recensione aggiunta con successo!");
            })
            .catch(error => {
                console.error("Errore:", error);
                alert("Errore nell'invio della recensione. Riprova.");
            });
    }

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

                <div className="mt-5">
                    <h3 className="text-white mb-3">📝 Recensioni</h3>
                    {/* Form Recensione */}
                    <div className="mt-4">
                        <h3 className="text-white mb-3">Scrivi una recensione</h3>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className="form-control bg-dark text-white border-secondary mb-3"
                                placeholder="Il tuo nome..."
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                minLength="2"
                                maxLength="50"
                            />

                            <input
                                type="number"
                                name="vote"
                                id="vote"
                                className="form-control bg-dark text-white border-secondary mb-3"
                                placeholder="Voto da 1 a 5..."
                                min="1"
                                max="5"
                                value={formData.vote}
                                onChange={(e) => setFormData({ ...formData, vote: e.target.value })}
                                required
                            />

                            <textarea
                                className="form-control bg-dark text-white border-secondary mb-3"
                                rows="4"
                                placeholder="Condividi la tua opinione sul film..."
                                value={formData.text}
                                onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                                required
                                minLength="5"
                                maxLength="255"
                            />
                            <button type="submit" className="btn-grad">
                                Aggiungi Recensione
                            </button>
                        </form>
                    </div>
                    {movie?.reviews?.map((review, index) => (
                        <div key={index} className="bg-dark p-3 rounded mb-3">
                            <p className="text-white-50 mb-0">{review.name}</p>
                            <p className="text-white-50 mb-0">Voto: {review.vote}</p>
                            <p className="text-white-50 mb-0">{review.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}