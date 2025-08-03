import Navbar from "../src/layouts/Navbar";
import Footer from "../components/Footer";

export default function AboutUs() {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {/* Header */}
                        <div className="text-center mb-5">
                            <h1 className="text-white mb-3">
                                🎬 Chi Siamo
                            </h1>
                            <p className="text-white-50 lead">
                                La tua destinazione per scoprire il meglio del cinema
                            </p>
                        </div>

                        {/* Sezione Principale */}
                        <div className="bg-dark p-4 rounded mb-4">
                            <h2 className="text-white h4 mb-3">🌟 La Nostra Missione</h2>
                            <p className="text-white-50">
                                Benvenuto in <strong className="text-white">Movie Database</strong>,
                                la piattaforma dedicata agli amanti del cinema di tutto il mondo.
                                Crediamo che ogni film racconti una storia unica e meriti di essere
                                scoperto, discusso e celebrato.
                            </p>
                        </div>

                        {/* Cosa Offriamo */}
                        <div className="bg-dark p-4 rounded mb-4">
                            <h2 className="text-white h4 mb-3">🎯 Cosa Offriamo</h2>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div className="d-flex align-items-start">
                                        <span className="me-3">🎥</span>
                                        <div>
                                            <h5 className="text-white h6">Database Completo</h5>
                                            <p className="text-white-50 small">
                                                Una vasta collezione di film con informazioni dettagliate,
                                                cast, trame e molto altro.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="d-flex align-items-start">
                                        <span className="me-3">⭐</span>
                                        <div>
                                            <h5 className="text-white h6">Recensioni Autentiche</h5>
                                            <p className="text-white-50 small">
                                                Leggi e condividi opinioni sincere sui tuoi film preferiti
                                                con la community.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="d-flex align-items-start">
                                        <span className="me-3">🔍</span>
                                        <div>
                                            <h5 className="text-white h6">Ricerca Avanzata</h5>
                                            <p className="text-white-50 small">
                                                Trova facilmente film per genere, anno, regista
                                                o qualsiasi criterio tu preferisca.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="d-flex align-items-start">
                                        <span className="me-3">💫</span>
                                        <div>
                                            <h5 className="text-white h6">Raccomandazioni</h5>
                                            <p className="text-white-50 small">
                                                Scopri nuovi titoli basati sui tuoi gusti
                                                e sulle tendenze della community.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Team */}
                        <div className="bg-dark p-4 rounded mb-4">
                            <h2 className="text-white h4 mb-3">👥 Il Nostro Team</h2>
                            <p className="text-white-50">
                                Siamo un gruppo di appassionati di cinema, sviluppatori e critici
                                cinematografici uniti dalla passione per la settima arte.
                                Il nostro obiettivo è creare uno spazio dove cinefili di ogni livello
                                possano incontrarsi, condividere e scoprire insieme.
                            </p>
                            <div className="text-center mt-4">
                                <p className="text-white-50 small">
                                    Sviluppato con ❤️ da <strong className="text-white">Umberto Carbone</strong>
                                    - Boolean Academy 2025
                                </p>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="text-center bg-dark p-4 rounded">
                            <h3 className="text-white h5 mb-3">🚀 Unisciti alla Community</h3>
                            <p className="text-white-50 mb-3">
                                Inizia oggi stesso a esplorare il mondo del cinema con noi!
                            </p>
                            <div className="d-flex justify-content-center gap-3">
                                <a href="/" className="btn-grad">
                                    🏠 Torna alla Home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}