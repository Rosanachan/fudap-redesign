
export default function Inicio({ actions }) {
  const { navigateTo } = actions;

  return (
    <div className="inicio">
      {/* HERO */}
      <section className="inicio-hero">
        <div className="inicio-container inicio-hero-grid">
          <div className="inicio-hero-content">
            <span className="inicio-eyebrow">
              <span className="inicio-eyebrow-dot" />
              Fundación · Actividades psicosociales
            </span>

            <h1 className="inicio-title">
              Acompañamos procesos de
              <span> rehabilitación e inclusión</span>
            </h1>

            <p className="inicio-intro">
              FUDAP es una fundación dedicada al desarrollo de actividades
              psicosociales. Trabajamos junto a personas en situación de
              vulnerabilidad, sus familias y la comunidad.
            </p>

            <div className="inicio-actions">
              <button
                onClick={() => navigateTo('servicios')}
                className="inicio-button inicio-button-primary"
              >
                Conocé nuestros programas
              </button>

              <button
                onClick={() => navigateTo('participa-hub')}
                className="inicio-button inicio-button-secondary"
              >
                Quiero participar
              </button>
            </div>
          </div>

          <div className="inicio-hero-visual">
            <div className="inicio-hero-image">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
                alt="Personas participando en una actividad comunitaria"
                loading="eager"
              />

              <div className="inicio-image-caption">
                <p>Espacios de encuentro, rehabilitación y pertenencia</p>
                <span>
                  Imagen ilustrativa — reemplazar por una fotografía
                  institucional de FUDAP
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ ES FUDAP */}
      <section className="inicio-section">
        <div className="inicio-container inicio-about-grid">
          <div>
            <p className="inicio-section-label">Qué es FUDAP</p>
            <h2 className="inicio-section-title">
              Una fundación al servicio de las personas
            </h2>
          </div>

          <div className="inicio-about-copy">
            <p className="inicio-lead">
              La <strong>Fundación para el Desarrollo de Actividades
              Psicosociales (FUDAP)</strong> impulsa dispositivos de atención,
              rehabilitación e inclusión social para personas con padecimiento
              psíquico y en situación de vulnerabilidad.
            </p>

            <p>
              Desde un enfoque comunitario y de derechos, articulamos centros
              de rehabilitación, programas de acción solidaria, inserción
              laboral y espacios de apoyo a familias.
            </p>

            <button
              onClick={() => navigateTo('quienes-somos')}
              className="inicio-text-link"
            >
              Conocé más sobre nosotros <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* SERVICIOS DESTACADOS */}
      <section className="inicio-section inicio-services">
        <div className="inicio-container">
          <div className="inicio-section-heading">
            <div>
              <p className="inicio-section-label">Qué hacemos</p>
              <h2 className="inicio-section-title">Servicios y programas</h2>
            </div>

            <button
              onClick={() => navigateTo('servicios')}
              className="inicio-text-link"
            >
              Ver todos <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="inicio-service-grid">
            <article className="inicio-card">
              <div className="inicio-card-icon inicio-icon-turquoise">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16M2 21h20M9 7h2m-2 4h2m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
                </svg>
              </div>
              <h3>Centro de Rehabilitación Psicosocial</h3>
              <p>
                Dispositivo de atención y rehabilitación para personas con
                padecimiento psíquico, con abordaje interdisciplinario.
              </p>
              <button onClick={() => navigateTo('servicios')} className="inicio-card-link">
                Más información →
              </button>
            </article>

            <article className="inicio-card">
              <div className="inicio-card-icon inicio-icon-coral">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
                </svg>
              </div>
              <h3>Programa de Acción Solidaria</h3>
              <p>
                Iniciativas solidarias y de apoyo comunitario que fortalecen
                redes y promueven la participación social.
              </p>
              <button onClick={() => navigateTo('servicios')} className="inicio-card-link">
                Más información →
              </button>
            </article>

            <article className="inicio-card">
              <div className="inicio-card-icon inicio-icon-green">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 8h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Zm6 4h6M2 8h20" />
                </svg>
              </div>
              <h3>Inserción Laboral</h3>
              <p>
                Acompañamiento en procesos de inclusión sociolaboral,
                capacitación y vinculación con el mundo del trabajo.
              </p>
              <button onClick={() => navigateTo('servicios')} className="inicio-card-link">
                Más información →
              </button>
            </article>

            <article className="inicio-card">
              <div className="inicio-card-icon inicio-icon-turquoise">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="7" r="3" />
                  <path d="M6 21v-2a6 6 0 0 1 12 0v2M5 11a3 3 0 0 0-3 3v2h4m13-5a3 3 0 0 1 3 3v2h-4" />
                </svg>
              </div>
              <h3>Grupos para familiares</h3>
              <p>
                Espacios de escucha, orientación y contención para familiares
                y referentes afectivos de las personas acompañadas.
              </p>
              <button onClick={() => navigateTo('servicios')} className="inicio-card-link">
                Más información →
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* A QUIÉN ACOMPAÑAMOS */}
      <section className="inicio-community">
        <div className="inicio-container inicio-community-grid">
          <div>
            <p className="inicio-section-label">A quiénes</p>
            <h2 className="inicio-community-title">
              Acompañamos a personas, familias y comunidad
            </h2>
          </div>

          <div className="inicio-community-items">
            <article>
              <div className="inicio-community-icon" aria-hidden="true">👤</div>
              <h3>Personas</h3>
              <p>
                Con padecimiento psíquico o en situación de vulnerabilidad
                psicosocial.
              </p>
            </article>

            <article>
              <div className="inicio-community-icon" aria-hidden="true">👨‍👩‍👧</div>
              <h3>Familias</h3>
              <p>
                Referentes afectivos que necesitan orientación, escucha y
                redes de apoyo.
              </p>
            </article>

            <article>
              <div className="inicio-community-icon" aria-hidden="true">🏘️</div>
              <h3>Comunidad</h3>
              <p>
                Organizaciones, vecinos y actores locales que construyen
                inclusión.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PARTICIPACIÓN */}
      <section className="inicio-section">
        <div className="inicio-container">
          <div className="inicio-centered-heading">
            <p className="inicio-section-label">Sumate</p>
            <h2 className="inicio-section-title">Participá en FUDAP</h2>
            <p>
              Hay muchas formas de ser parte. Tu tiempo, tu compromiso o tu
              aporte hacen posible el acompañamiento cotidiano.
            </p>
          </div>

          <div className="inicio-participate-grid">
            <article className="inicio-feature-card">
              <div className="inicio-feature-image">
                <img
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80"
                  alt="Personas colaborando en una actividad comunitaria"
                  loading="lazy"
                />
              </div>
              <div className="inicio-feature-content">
                <h3>Voluntariado</h3>
                <p>
                  Sumá tu tiempo y habilidades en actividades, talleres y
                  acompañamiento. Te orientamos según tu disponibilidad y perfil.
                </p>
                <button
                  onClick={() => navigateTo('voluntariado')}
                  className="inicio-button inicio-button-primary"
                >
                  Quiero ser voluntario/a
                </button>
              </div>
            </article>

            <article className="inicio-feature-card">
              <div className="inicio-feature-image">
                <img
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80"
                  alt="Manos colaborando en una iniciativa solidaria"
                  loading="lazy"
                />
              </div>
              <div className="inicio-feature-content">
                <h3>Donaciones</h3>
                <p>
                  Tu aporte económico sostiene programas, materiales y el
                  trabajo del equipo. Doná a través de los canales habilitados
                  por la fundación.
                </p>
                <button
                  onClick={() => navigateTo('donaciones')}
                  className="inicio-button inicio-button-primary"
                >
                  Donar ahora
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ACTUALIDAD */}
      <section className="inicio-section inicio-news">
        <div className="inicio-container">
          <div className="inicio-section-heading">
            <div>
              <p className="inicio-section-label">Novedades</p>
              <h2 className="inicio-section-title">Actualidad</h2>
            </div>

            <button
              onClick={() => navigateTo('actualidad')}
              className="inicio-text-link"
            >
              Ver todas <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="inicio-news-grid">
            <article className="inicio-news-card">
              <div className="inicio-news-image">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80"
                  alt="Imagen ilustrativa de una actividad institucional"
                  loading="lazy"
                />
              </div>
              <div className="inicio-news-content">
                <div className="inicio-news-meta">
                  <span className="inicio-tag inicio-tag-turquoise">Noticia</span>
                  <time>[Fecha]</time>
                </div>
                <h3>[Título de noticia vigente — placeholder]</h3>
                <p>
                  Resumen breve de la novedad institucional. Completar con
                  contenido real de FUDAP.
                </p>
              </div>
            </article>

            <article className="inicio-news-card">
              <div className="inicio-news-image">
                <img
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&q=80"
                  alt="Imagen ilustrativa de una actividad grupal"
                  loading="lazy"
                />
              </div>
              <div className="inicio-news-content">
                <div className="inicio-news-meta">
                  <span className="inicio-tag inicio-tag-coral">Actividad</span>
                  <time>[Fecha]</time>
                </div>
                <h3>[Próxima actividad o taller — placeholder]</h3>
                <p>
                  Descripción de la actividad abierta a la comunidad o interna
                  de los programas.
                </p>
              </div>
            </article>

            <article className="inicio-news-card">
              <div className="inicio-news-callout">
                <span className="inicio-tag inicio-tag-white">Convocatoria</span>
                <h3>[Convocatoria vigente]</h3>
                <p>
                  Espacio para convocatorias abiertas de voluntariado, empleo
                  o actividades.
                </p>
              </div>
              <div className="inicio-news-content">
                <button
                  onClick={() => navigateTo('actualidad')}
                  className="inicio-card-link"
                >
                  Ver convocatoria →
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="inicio-contact">
        <div className="inicio-contact-content">
          <h2>¿Tenés consultas o querés acercarte?</h2>
          <p>
            Escribinos o visitanos. El equipo de FUDAP está disponible para
            orientarte sobre programas, voluntariado y donaciones.
          </p>
          <button
            onClick={() => navigateTo('contacto')}
            className="inicio-button inicio-button-white"
          >
            Ir a Contacto
          </button>
        </div>
      </section>
    </div>
  );
}