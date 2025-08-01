import { Link } from 'react-router-dom';

export default function Card({ movie }) {
    return (
        <div className="card h-100 shadow">
            <img
                src={movie.image}
                className="card-img-top"
                alt={movie.title}
                style={{ height: '300px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">Genere: {movie.genre}</p>
                <div className="mt-auto">
                    <Link
                        to={`/Movies/${movie.id}`}
                        className="btn btn-primary"
                    >
                        Vedi Dettagli
                    </Link>
                </div>
            </div>
        </div>
    );
}