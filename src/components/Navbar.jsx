// src/components/Navbar.jsx
export default function Navbar({ cartCount = 0 }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        {/* Marca / Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#top">
          <span
            style={{
              fontSize: "1.8rem",
              marginRight: "0.5rem",
            }}
          >
            🍔
          </span>
          <div className="d-flex flex-column">
            <span className="fw-bold">Hamburguesería Don Gonza</span>
            <small className="text-muted">
              Hechas a la parrilla, como en casa
            </small>
          </div>
        </a>

        {/* Botón hamburguesa mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link" href="#hamburguesas">
                Hamburguesas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#acompanamientos">
                Acompañamientos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#bebidas">
                Bebidas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#postres">
                Postres
              </a>
            </li>

            {/* Ícono carrito */}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <a className="btn btn-outline-light position-relative" href="#cart">
                🛒 Carrito
                {cartCount > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: "0.7rem" }}
                  >
                    {cartCount}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
