import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';
export default function Footer() {
    return (
        <footer className="bg-dark text-white mt-5">
            <div className="container py-4">
                <div className="row">
                    {/* Sezione Links */}
                    <div className="col-md-4 mb-3">
                        <h5 className="mb-3">🎬 Movie App</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/" className="text-white-50 text-decoration-none">
                                    🏠 Home
                                </Link>
                            </li>
                            <li className="mb-2">
                                {/*   <Link to="/about" className="text-white-50 text-decoration-none">
                                    ℹ️ About Us
                                </Link> */}
                            </li>
                            {/* <li className="mb-2">
                                <Link to="/contact" className="text-white-50 text-decoration-none">
                                    📧 Contatti
                                </Link>
                            </li> */}
                        </ul>
                    </div>

                    {/* Sezione Info */}
                    <div className="col-md-4 mb-3">
                        <h5 className="mb-3">📋 Informazioni</h5>
                        <p className="text-white-50 small">
                            Il tuo database personale per scoprire e recensire i migliori film.
                            Esplora generi, leggi recensioni e trova il tuo prossimo film preferito!
                        </p>
                    </div>

                    {/* Sezione Social */}
                    <div className="col-md-4 mb-3">
                        <h5 className="mb-3">
                            <FontAwesomeIcon
                                icon={faEarthEurope}
                                className="me-2"
                                style={{
                                    color: "#ffffff9f",
                                    fontWeight: '100'  // ← Rende l'icona più thin
                                }}
                            />
                            Seguici
                        </h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" className="text-white-50 text-decoration-none">
                                    <FontAwesomeIcon
                                        icon={faFacebook}
                                        beatFade
                                        style={{ color: "#0866FF" }}
                                        className="me-2"
                                    />
                                    Facebook
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white-50 text-decoration-none">
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        beatFade
                                        style={{ color: "#E4405F" }}
                                        className="me-2"
                                    />
                                    Instagram
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="https://github.com/UmbertoCarbone"
                                    className="text-white-50 text-decoration-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        beatFade
                                        style={{ color: "#e5eeeeff" }}
                                        className="me-2"
                                    />
                                    GitHub
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="https://linkedin.com/in/umberto-carbone"
                                    className="text-white-50 text-decoration-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        beatFade
                                        style={{ color: "#0A66C2" }}
                                        className="me-2"
                                    />
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <hr className="border-secondary mt-4" />
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="text-white-50 small mb-0">
                            © 2025 Movie Database - Boolean Academy - Umberto Carbone
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}