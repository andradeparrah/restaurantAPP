
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Eleven Coffee
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/Postres">
              Postres
            </NavLink>
            <NavLink className="nav-link" to="/Cafe">
              Cafés
            </NavLink>
            <NavLink className="nav-link" to="/Reserva">
              Reserva
            </NavLink>
            <NavLink className="nav-link" aria-current="page" to="/CrudApp">
            Inicia Sesión
            </NavLink>
            
          </div>
        </div>
      </div>
    </nav>
  );
};
