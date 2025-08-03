import { Link } from 'react-router-dom';

export default function ButtonHover(movie) {
    return (
        <Link
            to={`/Movies/${movie.id}`}
            className="btn-grad">
            Vedi Dettagli
        </Link>
    )
}