import { Outlet, NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand">
                        🎬 Movie App
                    </NavLink>
                    <ul className="navbar-nav ms-auto d-flex flex-row gap-3">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/About">About Us</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            
            <main className="container my-4">
                <Outlet />
            </main>
        </>
    );
}