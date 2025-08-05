// components/NotFound.jsx
import { Link } from "react-router-dom";
import FuzzyText from './FuzzyText';
import Navbar from "../src/layouts/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
    return (
        <>
            <Navbar />
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center text-white py-5" style={{ minHeight: '60vh' }}>
                <div className="text-center mb-4">
                    <FuzzyText 
                        baseIntensity={0.25} 
                        hoverIntensity={0.5} 
                        enableHover={true}
                        fontSize="clamp(4rem, 15vw, 12rem)"
                        color="#83a4d4"
                    >
                        Error 404
                    </FuzzyText>
                </div>
                
                <div className="text-center">
                    <h2 className="mb-4 text-white">🎬 Film non trovato</h2>
                    <p className="lead mb-4 text-white-50">
                        Oops! Il film che stai cercando non esiste sul nostro sito.
                    </p>
                    <Link to="/" className="btn-grad">
                        🏠 Torna alla Homepage
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}