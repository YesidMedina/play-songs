import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="text">Prueba</div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <Link to="/artists">
            <span className="text-1">LISTA DE ARTISTAS</span>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
