import { useState, useEffect } from 'react';
/* component */
import Navbar from "../src/layouts/Navbar";
import Card from "../components/card";
import Footer from "../components/Footer";
import Loader from '../components/Loader';
import { useLoaderContext } from '../contexts/LoaderContext';
// import Loader from ""



export default function HomePage() {
    const [movies, setMovies] = useState([]);
    
    const {isLoading, setIsLoading} = useLoaderContext()


    useEffect(() => {
        setIsLoading(true)
        fetch('http://localhost:3030/api/movies/')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));

    }, []);

    return (
        <>

            <Navbar />
            {isLoading && <Loader />}
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