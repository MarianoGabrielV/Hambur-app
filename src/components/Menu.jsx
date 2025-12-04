import { useState } from "react";
import {
  hamburguesas,
  acompanamientos,
  bebidas,
  postres,
} from "../data/hamburgueseriaProducts";

export default function Menu({ addToCart }) {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="container mt-4">

      {/* ==================== HAMBURGUESAS ==================== */}
      <div className="mb-4">
        <h2
          className="section-title"
          onClick={() => toggleSection("hamburguesas")}
          style={{ cursor: "pointer" }}
        >
          🍔 Hamburguesas
        </h2>

        {openSection === "hamburguesas" && (
          <div className="row">
            {hamburguesas.map((item) => (
              <div className="col-md-4 mb-3" key={item.id}>
                <div className="card h-100">
                  <img src={item.image} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="fw-bold">${item.price}</p>
                    <button
                      className="btn btn-primary w-100"
                      onClick={() => addToCart(item)}
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ==================== ACOMPAÑAMIENTOS ==================== */}
      <div className="mb-4">
        <h2
          className="section-title"
          onClick={() => toggleSection("acompanamientos")}
          style={{ cursor: "pointer" }}
        >
          🍟 Acompañamientos
        </h2>

        {openSection === "acompanamientos" && (
          <div className="row">
            {acompanamientos.map((item) => (
              <div className="col-md-4 mb-3" key={item.id}>
                <div className="card h-100">
                  <img src={item.image} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="fw-bold">${item.price}</p>
                    <button
                      className="btn btn-primary w-100"
                      onClick={() => addToCart(item)}
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ==================== BEBIDAS ==================== */}
      <div className="mb-4">
        <h2
          className="section-title"
          onClick={() => toggleSection("bebidas")}
          style={{ cursor: "pointer" }}
        >
          🥤 Bebidas
        </h2>

        {openSection === "bebidas" && (
          <div className="row">
            {bebidas.map((item) => (
              <div className="col-md-4 mb-3" key={item.id}>
                <div className="card h-100">
                  <img src={item.image} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="fw-bold">${item.price}</p>
                    <button
                      className="btn btn-primary w-100"
                      onClick={() => addToCart(item)}
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ==================== POSTRES ==================== */}
      <div className="mb-4">
        <h2
          className="section-title"
          onClick={() => toggleSection("postres")}
          style={{ cursor: "pointer" }}
        >
          🍨 Postres
        </h2>

        {openSection === "postres" && (
          <div className="row">
            {postres.map((item) => (
              <div className="col-md-4 mb-3" key={item.id}>
                <div className="card h-100">
                  <img src={item.image} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="fw-bold">${item.price}</p>
                    <button
                      className="btn btn-primary w-100"
                      onClick={() => addToCart(item)}
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
