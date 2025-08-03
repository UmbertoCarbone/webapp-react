import { Link } from 'react-router-dom';

export default function Card({ movie, showButton = true }) {
    return (
        <div className="container-fluid">
            <div className="card mb-3 text-white" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-4">
                        <img
                            src={movie.image}
                            className="img-fluid h-100"
                            alt={movie.title}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <p className="card-text">{movie.genre}</p>
                            <p className="card-text">{movie.abstract}</p>

                            {showButton && (
                                <Link
                                    to={`/Movies/${movie.id}`}
                                    className="btn-grad">
                                    Vedi Dettagli
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}