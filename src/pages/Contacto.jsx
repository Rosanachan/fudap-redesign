
export default function Contacto({ actions = {} }) {
  const { navigateTo, handleContactForm } = actions;

  const irA = (destino) => {
    if (typeof navigateTo === "function") {
      navigateTo(destino);
    }
  };

  const datos = [
    {
      tipo: "direccion",
      titulo: "Dirección",
      contenido: (
        <>
          <p>[Calle, número, localidad, provincia]</p>
          <span className="contacto-placeholder">
            Completar con la sede real
          </span>
        </>
      ),
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      ),
    },
    {
      tipo: "telefono",
      titulo: "Teléfono",
      contenido: (
        <a href="tel:+540000000000">[Código de área + número]</a>
      ),
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.1 9.89a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7a2 2 0 0 1 1.72 2.05Z" />
        </svg>
      ),
    },
    {
      tipo: "email",
      titulo: "Correo electrónico",
      contenido: (
        <a href="mailto:info@fudap.org.ar">[email@fudap.org.ar]</a>
      ),
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
    },
    {
      tipo: "horario",
      titulo: "Horario de atención",
      contenido: <p>[Lunes a viernes, horario]</p>,
      icono: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      ),
    },
  ];

  return (
    <main className="contacto-page">
      <section className="contacto-hero">
        <div className="contacto-container">
          <nav className="contacto-breadcrumb" aria-label="Ruta de navegación">
            <button type="button" onClick={() => irA("inicio")}>
              Inicio
            </button>
            <span aria-hidden="true">/</span>
            <span className="contacto-breadcrumb-current">Contacto</span>
          </nav>

          <span className="contacto-eyebrow">
            Estamos para escucharte
          </span>

          <h1>Contacto</h1>

          <p>
            Escribinos, llamanos o acercate. Estamos para orientarte y
            responder tus consultas.
          </p>
        </div>
      </section>

      <section className="contacto-main-section">
        <div className="contacto-container">
          <div className="contacto-layout">
            <aside className="contacto-information">
              <span className="contacto-eyebrow">
                Hablemos
              </span>
              <h2>Datos de contacto</h2>
              <p className="contacto-intro">
                Encontrá acá los canales para comunicarte con FUDAP.
              </p>

              <div className="contacto-details">
                {datos.map((dato) => (
                  <div className="contacto-detail" key={dato.tipo}>
                    <span className="contacto-detail-icon">
                      {dato.icono}
                    </span>
                    <div className="contacto-detail-content">
                      <h3>{dato.titulo}</h3>
                      {dato.contenido}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contacto-social">
                <h3>Redes sociales</h3>
                <div className="contacto-social-links">
                  <a href="#" aria-label="Facebook" className="contacto-social-link">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.49V12h2.95V9.8c0-2.91 1.73-4.52 4.39-4.52 1.27 0 2.6.23 2.6.23v2.86h-1.47c-1.44 0-1.89.9-1.89 1.82V12h3.22l-.51 2.89h-2.71v6.99A10 10 0 0 0 22 12Z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Instagram" className="contacto-social-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                    </svg>
                  </a>
                </div>
                <p className="contacto-placeholder">
                  Vincular los perfiles oficiales de FUDAP.
                </p>
              </div>

              <div className="contacto-map-placeholder">
                <span className="contacto-map-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" />
                    <path d="M9 3v15M15 6v15" />
                  </svg>
                </span>
                <h3>¿Cómo llegar?</h3>
                <p>Acá se podrá integrar un mapa con la ubicación de la sede.</p>
                <span className="contacto-placeholder">
                  Pendiente de confirmar la dirección oficial.
                </span>
              </div>
            </aside>

            <section className="contacto-form-column">
              <div className="contacto-form-card">
                <span className="contacto-eyebrow">
                  Enviá tu consulta
                </span>
                <h2>Escribinos</h2>
                <p className="contacto-form-intro">
                  Completá el formulario. La respuesta dependerá de los
                  canales y horarios de atención de la institución.
                </p>

                <form
                  id="form-contacto"
                  className="contacto-form"
                  onSubmit={handleContactForm}
                >
                  <div className="contacto-form-row">
                    <div className="contacto-field">
                      <label htmlFor="ct-nombre">Nombre *</label>
                      <input
                        type="text"
                        id="ct-nombre"
                        name="nombre"
                        autoComplete="name"
                        placeholder="Tu nombre"
                        required
                      />
                    </div>

                    <div className="contacto-field">
                      <label htmlFor="ct-email">Correo electrónico *</label>
                      <input
                        type="email"
                        id="ct-email"
                        name="email"
                        autoComplete="email"
                        placeholder="nombre@correo.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="contacto-field">
                    <label htmlFor="ct-tel">Teléfono</label>
                    <input
                      type="tel"
                      id="ct-tel"
                      name="telefono"
                      autoComplete="tel"
                      placeholder="Tu número de contacto"
                    />
                  </div>

                  <div className="contacto-field">
                    <label htmlFor="ct-asunto">Asunto *</label>
                    <select id="ct-asunto" name="asunto" required defaultValue="">
                      <option value="" disabled>
                        Seleccioná un asunto
                      </option>
                      <option value="programas">
                        Consulta sobre programas / admisión
                      </option>
                      <option value="voluntariado">Voluntariado</option>
                      <option value="donaciones">Donaciones</option>
                      <option value="prensa">Prensa / institucional</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div className="contacto-field">
                    <label htmlFor="ct-msg">Mensaje *</label>
                    <textarea
                      id="ct-msg"
                      name="mensaje"
                      required
                      rows={5}
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="contacto-submit"
                  >
                    Enviar mensaje
                    <span aria-hidden="true"> →</span>
                  </button>

                  <p
                    id="ct-success"
                    className="contacto-success hidden"
                    role="status"
                    aria-live="polite"
                  >
                    Mensaje registrado (prototipo). En producción, el envío
                    deberá estar conectado al correo institucional o a un
                    servicio de formularios.
                  </p>

                  <p className="contacto-form-disclaimer">
                    Los campos marcados con * son obligatorios.
                  </p>
                </form>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
