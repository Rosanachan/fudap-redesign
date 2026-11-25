
export default function Footer({ actions = {} }) {
  const { navigateTo } = actions;
  const year = new Date().getFullYear();

  return (
    <footer className="fudap-footer">
      <div className="fudap-footer-container">
        <div className="fudap-footer-grid">
          <div className="fudap-footer-brand">
            <div className="fudap-footer-logo">
              <img
                src="/logotipo.png"
                alt="FUDAP - Fundación para el Desarrollo de Actividades Psicosociales"
                className="fudap-footer-logo-image"
              />
            </div>

            <p className="fudap-footer-description">
              Fundación para el Desarrollo de Actividades Psicosociales.
              Rehabilitación, inclusión y acompañamiento comunitario.
            </p>
          </div>

          <div className="fudap-footer-column">
            <h3 className="fudap-footer-heading">Navegación</h3>
            <ul className="fudap-footer-links">
              <li>
                <button onClick={() => navigateTo("inicio")}>Inicio</button>
              </li>
              <li>
                <button onClick={() => navigateTo("quienes-somos")}>
                  Quiénes somos
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("servicios")}>
                  Servicios
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("actualidad")}>
                  Actualidad
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("contacto")}>
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div className="fudap-footer-column">
            <h3 className="fudap-footer-heading">Participá</h3>
            <ul className="fudap-footer-links">
              <li>
                <button onClick={() => navigateTo("voluntariado")}>
                  Voluntariado
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("donaciones")}>
                  Donaciones
                </button>
              </li>
            </ul>

            <h3 className="fudap-footer-heading fudap-footer-subheading">
              Programas
            </h3>
            <ul className="fudap-footer-links">
              <li>
                <button onClick={() => navigateTo("servicios")}>
                  Rehabilitación psicosocial
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("servicios")}>
                  Inserción laboral
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("servicios")}>
                  Grupos para familiares
                </button>
              </li>
            </ul>
          </div>

          <div className="fudap-footer-column fudap-footer-contact">
            <h3 className="fudap-footer-heading">Contacto</h3>
            <ul className="fudap-footer-contact-details">
              <li>[Dirección completa]</li>
              <li>[Teléfono]</li>
              <li>[Email institucional]</li>
            </ul>

            <button
              onClick={() => navigateTo("donaciones")}
              className="fudap-donate-button"
            >
              Donar
            </button>
          </div>
        </div>

        <div className="fudap-footer-bottom">
          <p className="fudap-footer-copyright">
            © {year} FUDAP — Fundación para el Desarrollo de Actividades
            Psicosociales. Todos los derechos reservados.
          </p>
          <p className="fudap-footer-prototype">
            Prototipo de rediseño UX/UI · Alta fidelidad navegable
          </p>
        </div>
      </div>
    </footer>
  );
}
