
export default function MisionVision({ actions }) {
  const { navigateTo } = actions;

  const valores = [
    {
      titulo: 'Respeto',
      descripcion: 'Por la singularidad y los derechos de cada persona.',
      color: 'mv-respeto',
    },
    {
      titulo: 'Solidaridad',
      descripcion: 'Construcción colectiva de apoyos y oportunidades.',
      color: 'mv-solidaridad',
    },
    {
      titulo: 'Compromiso',
      descripcion: 'Con la calidad del cuidado y la continuidad.',
      color: 'mv-compromiso',
    },
    {
      titulo: 'Transparencia',
      descripcion: 'En la gestión y la comunicación institucional.',
      color: 'mv-transparencia',
    },
  ];

  return (
    <main className="mision-vision">
      <section className="mv-intro">
        <div className="mv-container">
          <nav className="mv-breadcrumb" aria-label="Ruta de navegación">
            <button onClick={() => navigateTo('inicio')}>Inicio</button>
            <span aria-hidden="true">/</span>
            <span>FUDAP</span>
            <span aria-hidden="true">/</span>
            <span className="mv-current">Misión y visión</span>
          </nav>

          <div className="mv-heading">
            <span className="mv-eyebrow">Nuestra identidad</span>
            <h1>Misión y visión</h1>
            <p>
              Los principios que orientan nuestro trabajo y nuestro compromiso
              con las personas y la comunidad.
            </p>
          </div>
        </div>
      </section>

      <section className="mv-content">
        <div className="mv-container">
          <div className="mv-panels">
            <article className="mv-panel mv-panel-mision">
              <div className="mv-icon mv-icon-mision" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13 2 4.5 13H12l-1 9 8.5-12H12l1-8Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <span className="mv-label">Nuestro propósito</span>
              <h2>Misión</h2>

              <p className="mv-panel-text">
                Promover el desarrollo de actividades psicosociales que
                favorezcan la rehabilitación, la autonomía y la inclusión
                social de personas en situación de vulnerabilidad psíquica y
                social, junto a sus familias y comunidades.
              </p>

              <p className="mv-editorial-note">
                Texto provisional: validar con la redacción institucional
                oficial de FUDAP.
              </p>
            </article>

            <article className="mv-panel mv-panel-vision">
              <div className="mv-icon mv-icon-vision" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>

              <span className="mv-label">Nuestro horizonte</span>
              <h2>Visión</h2>

              <p className="mv-panel-text">
                Ser una organización de referencia en rehabilitación
                psicosocial e inclusión, reconocida por su calidad de
                acompañamiento, su compromiso ético y su capacidad de
                articular con el sistema de salud y la comunidad.
              </p>

              <p className="mv-editorial-note">
                Texto provisional: validar con la redacción institucional
                oficial de FUDAP.
              </p>
            </article>
          </div>

          <section className="mv-values" aria-labelledby="mv-values-title">
            <div className="mv-section-heading">
              <span className="mv-eyebrow">Lo que nos guía</span>
              <h2 id="mv-values-title">Nuestros valores</h2>
              <p>
                Principios que buscamos reflejar en cada acción y vínculo
                con la comunidad.
              </p>
            </div>

            <div className="mv-values-grid">
              {valores.map((valor, index) => (
                <article
                  key={valor.titulo}
                  className={`mv-value-card ${valor.color}`}
                >
                  <span className="mv-value-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{valor.titulo}</h3>
                  <p>{valor.descripcion}</p>
                </article>
              ))}
            </div>

            <p className="mv-values-note">
              Los valores deben revisarse y validarse con la documentación
              institucional de FUDAP.
            </p>
          </section>

          <div className="mv-bottom-cta">
            <div>
              <h2>Conocé más sobre FUDAP</h2>
              <p>Descubrí quiénes somos y las personas que forman nuestro equipo.</p>
            </div>
            <div className="mv-cta-actions">
              <button
                className="mv-button mv-button-secondary"
                onClick={() => navigateTo('quienes-somos')}
              >
                Quiénes somos
              </button>
              <button
                className="mv-button mv-button-primary"
                onClick={() => navigateTo('equipo')}
              >
                Conocer al equipo
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
