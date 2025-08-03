import { Link } from 'react-router-dom';

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
                        <h5 className="mb-3">🌐 Seguici</h5>
                        <div className="d-flex gap-3">
                            <a href="#" className="text-white-50 text-decoration-none">
                                📘 Facebook
                            </a>
                            <a href="#" className="text-white-50 text-decoration-none">
                                🐦 Twitter
                            </a>
                            <a href="#" className="text-white-50 text-decoration-none">
                                📷 Instagram
                            </a>
                        </div>
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