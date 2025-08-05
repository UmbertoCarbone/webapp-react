// pages/SingleMovie.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Navbar from "../src/layouts/Navbar";
import Card from "../components/card";
import Footer from "../components/Footer";
import FormReviews from "../components/FormReviews";

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

                <FormReviews
                    handleSubmit={handleSubmit}
                    formData={formData}
                    setFormData={setFormData}
                    reviews={movie?.reviews}
                />
            </div>
            <Footer />
        </>
    );
}