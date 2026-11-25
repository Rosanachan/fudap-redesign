
export default function QuienesSomos({ actions }) {
  const { navigateTo } = actions;

  const enfoques = [
    {
      titulo: 'Derechos humanos',
      descripcion:
        'La dignidad y la autonomía de las personas guían cada intervención y dispositivo.',
      clase: 'qs-icon-turquoise',
      icono: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3 4.5 6v5.2c0 4.6 3.2 7.8 7.5 9.8 4.3-2 7.5-5.2 7.5-9.8V6L12 3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      titulo: 'Salud mental comunitaria',
      descripcion:
        'Trabajamos en territorio, con la red social y los recursos de la comunidad.',
      clase: 'qs-icon-green',
      icono: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5.5a3 3 0 0 1 0 5.8M18 14a4 4 0 0 1 3 4v2" />
        </svg>
      ),
    },
    {
      titulo: 'Abordaje integral',
      descripcion:
        'Interdisciplina, continuidad de cuidados e inclusión sociolaboral y familiar.',
      clase: 'qs-icon-coral',
      icono: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 7v5h-5M4 17v-5h5" />
          <path d="M5.5 9a7 7 0 0 1 11.8-2L20 12M4 12l2.7 5a7 7 0 0 0 11.8-2" />
        </svg>
      ),
    },
  ];

  return (
    <main className="quienes-somos">
      {/* ENCABEZADO DE PÁGINA */}
      <section className="qs-page-heading">
        <div className="qs-container">
          <nav className="qs-breadcrumb" aria-label="Ruta de navegación">
            <button onClick={() => navigateTo('inicio')}>Inicio</button>
            <span aria-hidden="true">/</span>
            <span>FUDAP</span>
            <span aria-hidden="true">/</span>
            <span className="qs-breadcrumb-current">Quiénes somos</span>
          </nav>

          <p className="qs-eyebrow">Conocé nuestra fundación</p>

          <h1>Quiénes somos</h1>

          <p className="qs-page-intro">
            Conocé la historia, el enfoque y el compromiso de la Fundación
            para el Desarrollo de Actividades Psicosociales.
          </p>
        </div>
      </section>

      {/* IDENTIDAD */}
      <section className="qs-identity-section">
        <div className="qs-container">
          <div className="qs-identity-grid">
            <div className="qs-identity-content">
              <p className="qs-section-label">Nuestra identidad</p>

              <h2 className="qs-section-title">Quiénes somos y qué nos guía</h2>

              <div className="qs-body-copy">
                <p>
                  <strong>FUDAP</strong> — Fundación para el Desarrollo de
                  Actividades Psicosociales — es una organización sin fines
                  de lucro orientada a la rehabilitación, la inclusión social
                  y el fortalecimiento de redes comunitarias.
                </p>

                <p className="qs-content-placeholder">
                  [Completar con la historia fundacional, año de creación,
                  contexto de origen y valores centrales de FUDAP. No inventar
                  datos no verificados.]
                </p>

                <p>
                  Trabajamos desde un paradigma de derechos humanos, con
                  perspectiva de salud mental comunitaria, interdisciplina y
                  participación de las personas usuarias y sus familias.
                </p>
              </div>

              <div className="qs-actions">
                <button
                  onClick={() => navigateTo('mision-vision')}
                  className="qs-button qs-button-primary"
                >
                  Misión y visión
                </button>

                <button
                  onClick={() => navigateTo('equipo')}
                  className="qs-button qs-button-secondary"
                >
                  Conocé al equipo
                </button>
              </div>
            </div>

            <div className="qs-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=900&q=85"
                alt="Imagen ilustrativa de un grupo de personas reunidas"
                loading="lazy"
              />
              <div className="qs-image-caption">
                Imagen ilustrativa. Reemplazar por una fotografía institucional
                autorizada de FUDAP.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENFOQUE */}
      <section className="qs-approach-section">
        <div className="qs-container">
          <div className="qs-centered-heading">
            <p className="qs-section-label">Nuestros principios</p>
            <h2 className="qs-section-title">Nuestro enfoque</h2>
            <p>
              Principios que orientan nuestra manera de acompañar a las
              personas, las familias y la comunidad.
            </p>
          </div>

          <div className="qs-approach-grid">
            {enfoques.map((enfoque) => (
              <article className="qs-approach-card" key={enfoque.titulo}>
                <div className={`qs-approach-icon ${enfoque.clase}`}>
                  {enfoque.icono}
                </div>

                <h3>{enfoque.titulo}</h3>
                <p>{enfoque.descripcion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
