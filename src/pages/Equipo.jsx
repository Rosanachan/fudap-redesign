
export default function Equipo({ actions }) {
  const { navigateTo } = actions;

  const integrantes = [
    {
      inicial: 'A',
      cargo: '[Cargo por confirmar]',
      color: 'equipo-turquesa',
    },
    {
      inicial: 'B',
      cargo: '[Cargo por confirmar]',
      color: 'equipo-verde',
    },
    {
      inicial: 'C',
      cargo: '[Cargo por confirmar]',
      color: 'equipo-coral',
    },
  ];

  const disciplinas = [
    'Psicología',
    'Trabajo social',
    'Terapia ocupacional',
    '[Otra disciplina]',
    '[Otra disciplina]',
    'Administración',
    'Voluntariado',
    '[Área por confirmar]',
  ];

  return (
    <main className="equipo-page">
      <section className="equipo-intro">
        <div className="equipo-container">
          <nav className="equipo-breadcrumb" aria-label="Ruta de navegación">
            <button onClick={() => navigateTo('inicio')}>Inicio</button>
            <span aria-hidden="true">/</span>
            <span>FUDAP</span>
            <span aria-hidden="true">/</span>
            <span className="equipo-current">Equipo</span>
          </nav>

          <span className="equipo-eyebrow">Las personas detrás de FUDAP</span>
          <h1>Nuestro equipo</h1>
          <p className="equipo-intro-text">
            Profesionales de distintas disciplinas y personas comprometidas
            con el acompañamiento, la autonomía y la inclusión social.
          </p>
          <p className="equipo-pending-note">
            Presentación institucional pendiente de completar y validar con FUDAP.
          </p>
        </div>
      </section>

      <section className="equipo-content">
        <div className="equipo-container">
          <section className="equipo-group" aria-labelledby="equipo-directiva-title">
            <div className="equipo-section-heading">
              <span className="equipo-eyebrow">Organización y liderazgo</span>
              <h2 id="equipo-directiva-title">Comisión directiva y coordinación</h2>
              <p>
                Conocé a las personas responsables de acompañar y coordinar
                el trabajo institucional.
              </p>
            </div>

            <div className="equipo-members-grid">
              {integrantes.map((integrante, index) => (
                <article className="equipo-member-card" key={integrante.inicial}>
                  <div
                    className={`equipo-avatar ${integrante.color}`}
                    aria-hidden="true"
                  >
                    {integrante.inicial}
                  </div>

                  <span className="equipo-member-label">
                    Integrante {index + 1}
                  </span>
                  <h3>[Nombre y apellido]</h3>
                  <p className="equipo-member-role">{integrante.cargo}</p>
                  <p className="equipo-member-note">
                    Pendiente de incorporar fotografía y datos oficiales.
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="equipo-group equipo-interdisciplinario">
            <div className="equipo-section-heading">
              <span className="equipo-eyebrow">Trabajo colaborativo</span>
              <h2>Equipo interdisciplinario</h2>
              <p>
                El abordaje interdisciplinario permite integrar distintas
                perspectivas para acompañar las necesidades de cada persona.
              </p>
              <p className="equipo-pending-note">
                Las disciplinas que se muestran a continuación son orientativas
                y deben confirmarse con la institución.
              </p>
            </div>

            <div className="equipo-disciplines-grid">
              {disciplinas.map((disciplina, index) => (
                <div className="equipo-discipline" key={`${disciplina}-${index}`}>
                  <span
                    className={`equipo-discipline-marker equipo-marker-${index % 3}`}
                    aria-hidden="true"
                  />
                  <span>{disciplina}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="equipo-cta">
            <div className="equipo-cta-copy">
              <h2>Conocé más sobre FUDAP</h2>
              <p>
                Descubrí nuestra misión y el compromiso que orienta
                nuestro trabajo.
              </p>
            </div>

            <div className="equipo-cta-actions">
              <button
                className="equipo-button equipo-button-secondary"
                onClick={() => navigateTo('quienes-somos')}
              >
                Quiénes somos
              </button>
              <button
                className="equipo-button equipo-button-primary"
                onClick={() => navigateTo('mision-vision')}
              >
                Misión y visión
              </button>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
