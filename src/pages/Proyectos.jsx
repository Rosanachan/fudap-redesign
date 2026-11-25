
export default function Proyectos({ actions }) {
  const { navigateTo } = actions;

  const proyectos = [
    {
      id: 'proyecto-1',
      estado: 'En curso',
      titulo: '[Nombre del proyecto]',
      descripcion:
        'Descripción pendiente de completar con los objetivos, las actividades y la población destinataria del proyecto.',
      etiquetas: ['Rehabilitación', 'Comunidad'],
      imagen:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80',
      alt: 'Imagen ilustrativa de personas trabajando en equipo',
      color: 'proyecto-turquesa',
    },
    {
      id: 'proyecto-2',
      estado: 'En curso',
      titulo: '[Nombre del proyecto]',
      descripcion:
        'Completar con información sobre iniciativas, programas especiales, convenios o alianzas institucionales.',
      etiquetas: ['Inserción laboral'],
      imagen:
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80',
      alt: 'Imagen ilustrativa de un grupo de personas reunidas',
      color: 'proyecto-verde',
    },
    {
      id: 'proyecto-3',
      estado: 'Archivo',
      titulo: '[Nombre del proyecto histórico]',
      descripcion:
        'Espacio para documentar iniciativas anteriores, talleres y actividades pasadas, conservando la memoria institucional.',
      etiquetas: ['Archivo histórico'],
      imagen: null,
      alt: '',
      color: 'proyecto-coral',
    },
  ];

  return (
    <main className="proyectos-page">
      <section className="proyectos-intro">
        <div className="proyectos-container">
          <nav className="proyectos-breadcrumb" aria-label="Ruta de navegación">
            <button onClick={() => navigateTo('inicio')}>Inicio</button>
            <span aria-hidden="true">/</span>
            <span>FUDAP</span>
            <span aria-hidden="true">/</span>
            <span className="proyectos-current">Proyectos</span>
          </nav>

          <span className="proyectos-eyebrow">Iniciativas y programas</span>
          <h1>Nuestros proyectos</h1>
          <p>
            Conocé las iniciativas y líneas de trabajo que buscan ampliar
            el alcance de los programas y fortalecer los vínculos con la comunidad.
          </p>
        </div>
      </section>

      <section className="proyectos-content">
        <div className="proyectos-container">
          <div className="proyectos-section-heading">
            <h2>Iniciativas que nos movilizan</h2>
            <p>
              Un espacio para presentar las propuestas, compartir sus avances
              y mantener viva la memoria de las actividades institucionales.
            </p>
          </div>

          <div className="proyectos-list">
            {proyectos.map((proyecto) => (
              <article
                className={`proyecto-card ${proyecto.color}`}
                key={proyecto.id}
              >
                <div className="proyecto-media">
                  {proyecto.imagen ? (
                    <img
                      src={proyecto.imagen}
                      alt={proyecto.alt}
                      loading="lazy"
                    />
                  ) : (
                    <div className="proyecto-archive-visual">
                      <svg
                        viewBox="0 0 48 48"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M8 15h32v25H8zM5 8h38v7H5zM19 24h10M19 30h10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>Memoria institucional</span>
                    </div>
                  )}
                  {proyecto.imagen && (
                    <span className="proyecto-image-note">
                      Imagen ilustrativa
                    </span>
                  )}
                </div>

                <div className="proyecto-info">
                  <span className="proyecto-status">
                    <span className="proyecto-status-dot" aria-hidden="true" />
                    {proyecto.estado}
                  </span>

                  <h3>{proyecto.titulo}</h3>
                  <p className="proyecto-description">
                    {proyecto.descripcion}
                  </p>

                  <div className="proyecto-tags">
                    {proyecto.etiquetas.map((etiqueta) => (
                      <span className="proyecto-tag" key={etiqueta}>
                        {etiqueta}
                      </span>
                    ))}
                  </div>

                  <p className="proyecto-pending">
                    Contenido pendiente de validación institucional.
                  </p>
                </div>
              </article>
            ))}
          </div>

          <section className="proyectos-cta">
            <div>
              <span className="proyectos-eyebrow">Sumate</span>
              <h2>¿Querés conocer más sobre FUDAP?</h2>
              <p>
                Explorá las formas de participar y colaborar con la institución.
              </p>
            </div>

            <div className="proyectos-cta-actions">
              <button
                className="proyectos-button proyectos-button-secondary"
                onClick={() => navigateTo('voluntariado')}
              >
                Ser voluntario/a
              </button>
              <button
                className="proyectos-button proyectos-button-primary"
                onClick={() => navigateTo('donaciones')}
              >
                Colaborar
              </button>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
