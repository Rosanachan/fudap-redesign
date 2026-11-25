
export default function Servicios({ actions }) {
  const { navigateTo } = actions;

  const servicios = [
    {
      id: 'serv-rehab',
      categoria: 'Programa central',
      titulo: 'Centro de Rehabilitación Psicosocial',
      descripcion:
        'Espacio de atención interdisciplinaria orientado a la rehabilitación de personas con padecimiento psíquico. Se proponen actividades terapéuticas, talleres, acompañamiento individual y grupal, y articulación con la red de salud.',
      beneficios: [
        'Abordaje interdisciplinario',
        'Talleres y actividades de rehabilitación',
        'Seguimiento y orientación a familias',
      ],
      imagen:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80',
      alt: 'Imagen ilustrativa de una profesional en un entorno de trabajo',
      nota: 'Completar con modalidades de admisión, horarios y requisitos oficiales.',
      boton: 'Consultar por admisión',
      destino: 'contacto',
      color: 'servicio-turquesa',
      imagenPrimero: true,
    },
    {
      id: 'serv-solidaria',
      categoria: 'Acción comunitaria',
      titulo: 'Programa de Acción Solidaria',
      descripcion:
        'Iniciativas de apoyo solidario y participación comunitaria. Promueve el encuentro, la reciprocidad y el fortalecimiento de redes sociales para personas y familias en situación de vulnerabilidad.',
      beneficios: [
        'Acciones solidarias y de apoyo mutuo',
        'Vinculación con organizaciones locales',
        'Espacios de participación social',
      ],
      imagen:
        'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=900&q=80',
      alt: 'Imagen ilustrativa de personas participando en una acción comunitaria',
      boton: 'Sumarme como voluntario/a',
      destino: 'voluntariado',
      color: 'servicio-coral',
      imagenPrimero: false,
    },
    {
      id: 'serv-laboral',
      categoria: 'Inclusión',
      titulo: 'Servicio de Inserción Laboral',
      descripcion:
        'Acompañamos procesos de inclusión sociolaboral: orientación vocacional, preparación para el empleo, talleres de habilidades y vinculación con empresas y organismos.',
      beneficios: [
        'Orientación y capacitación',
        'Apoyo en la búsqueda laboral',
        'Articulación con el mundo del trabajo',
      ],
      imagen:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80',
      alt: 'Imagen ilustrativa de personas trabajando en una mesa',
      boton: 'Más información',
      destino: 'contacto',
      color: 'servicio-verde',
      imagenPrimero: true,
    },
    {
      id: 'serv-familias',
      categoria: 'Familias',
      titulo: 'Grupos para familiares',
      descripcion:
        'Espacios grupales de escucha, orientación y contención para familiares y referentes afectivos. Compartir experiencias, recibir información y fortalecer recursos de cuidado.',
      beneficios: [
        'Grupos de reflexión y apoyo',
        'Orientación sobre salud mental y cuidados',
        'Encuentros periódicos',
      ],
      imagen:
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80',
      alt: 'Imagen ilustrativa de un grupo de personas reunidas',
      nota: 'Indicar días, modalidad presencial o virtual y cómo inscribirse.',
      boton: 'Consultar horarios',
      destino: 'contacto',
      color: 'servicio-coral',
      imagenPrimero: false,
    },
  ];

  return (
    <main className="servicios-page">
      <section className="servicios-intro">
        <div className="servicios-container">
          <nav className="servicios-breadcrumb" aria-label="Ruta de navegación">
            <button onClick={() => navigateTo('inicio')}>Inicio</button>
            <span aria-hidden="true">/</span>
            <span className="servicios-current">Servicios y programas</span>
          </nav>

          <span className="servicios-eyebrow">Acompañamiento e inclusión</span>
          <h1>Servicios y programas</h1>
          <p>
            Dispositivos de atención, rehabilitación, inclusión laboral y apoyo
            a familias, orientados al acompañamiento integral de las personas.
          </p>
        </div>
      </section>

      <section className="servicios-content">
        <div className="servicios-container">
          <div className="servicios-section-heading">
            <h2>¿Cómo podemos acompañarte?</h2>
            <p>
              Conocé las distintas líneas de trabajo y encontrá información
              sobre cada propuesta.
            </p>
          </div>

          <div className="servicios-list">
            {servicios.map((servicio) => (
              <article
                className={`servicio-item ${servicio.color} ${
                  servicio.imagenPrimero ? 'servicio-imagen-primero' : ''
                }`}
                id={servicio.id}
                key={servicio.id}
              >
                <div className="servicio-image">
                  <img
                    src={servicio.imagen}
                    alt={servicio.alt}
                    loading="lazy"
                  />
                  <span className="servicio-image-note">
                    Imagen ilustrativa
                  </span>
                </div>

                <div className="servicio-details">
                  <span className="servicio-category">
                    <span className="servicio-category-dot" aria-hidden="true" />
                    {servicio.categoria}
                  </span>

                  <h2>{servicio.titulo}</h2>
                  <p className="servicio-description">
                    {servicio.descripcion}
                  </p>

                  <ul className="servicio-benefits">
                    {servicio.beneficios.map((beneficio) => (
                      <li key={beneficio}>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="m5 12 4 4L19 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{beneficio}</span>
                      </li>
                    ))}
                  </ul>

                  {servicio.nota && (
                    <p className="servicio-note">{servicio.nota}</p>
                  )}

                  <div className="servicio-actions">
                    <button
                      className="servicios-button"
                      onClick={() => navigateTo(servicio.destino)}
                    >
                      {servicio.boton}
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="servicios-contact-cta">
        <div className="servicios-container servicios-cta-inner">
          <div>
            <span className="servicios-eyebrow">Estamos para orientarte</span>
            <h2>¿No sabés qué programa es para vos?</h2>
            <p>
              Escribinos y te orientamos según la situación de la persona
              o la familia.
            </p>
          </div>

          <button
            className="servicios-button servicios-button-cta"
            onClick={() => navigateTo('contacto')}
          >
            Contactar al equipo
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}
