// components/Footer.jsx
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className="bg-dark text-white mt-5">
            <div className="container-fluid px-3 px-md-4 py-4">
                <div className="row g-3 g-md-4">
                    {/* Sezione Links */}
                    <div className="col-12 col-sm-6 col-md-4 mb-3 mb-md-0">
                        <h5 className="mb-3 fs-5 fs-md-4">🎬 Movie App</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/" className="text-white-50 text-decoration-none fs-6">
                                    🏠 Home
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/About" className="text-white-50 text-decoration-none fs-6">
                                    👥 About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Sezione Info */}
                    <div className="col-12 col-sm-6 col-md-4 mb-3 mb-md-0">
                        <h5 className="mb-3 fs-5 fs-md-4">📋 Informazioni</h5>
                        <p className="text-white-50 small fs-6 lh-sm">
                            Il tuo database personale per scoprire e recensire i migliori film.
                            Esplora generi, leggi recensioni e trova il tuo prossimo film preferito!
                        </p>
                    </div>

                    {/* Sezione Social */}
                    <div className="col-12 col-md-4">
                        <h5 className="mb-3 fs-5 fs-md-4">
                            <FontAwesomeIcon
                                icon={faEarthEurope}
                                className="me-2"
                                style={{ color: "#74C0FC", fontWeight: '300' }}
                            />
                            Seguici
                        </h5>
                        <div className="row row-cols-2 row-cols-md-1 g-2">
                            <div className="col">
                                <a href="https://facebook.com" className="text-white-50 text-decoration-none fs-6 d-flex align-items-center" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} beatFade style={{ color: "#0866FF" }} className="me-2 flex-shrink-0" />
                                    <span>Facebook</span>
                                </a>
                            </div>
                            <div className="col">
                                <a href="https://instagram.com" className="text-white-50 text-decoration-none fs-6 d-flex align-items-center" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} beatFade style={{ color: "#E4405F" }} className="me-2 flex-shrink-0" />
                                    <span>Instagram</span>
                                </a>
                            </div>
                            <div className="col">
                                <a href="https://github.com/UmbertoCarbone" className="text-white-50 text-decoration-none fs-6 d-flex align-items-center" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} beatFade style={{ color: "#e5eeee" }} className="me-2 flex-shrink-0" />
                                    <span>GitHub</span>
                                </a>
                            </div>
                            <div className="col">
                                <a href="https://linkedin.com/in/umberto-carbone" className="text-white-50 text-decoration-none fs-6 d-flex align-items-center" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} beatFade style={{ color: "#0A66C2" }} className="me-2 flex-shrink-0" />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <hr className="border-secondary mt-4 mb-3" />
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="text-white-50 small mb-0 fs-6 px-2">
                            © 2025 Movie Database - Boolean Academy - Umberto Carbone
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}