
export default function Participa({ actions = {} }) {
  const { navigateTo } = actions;

  const opciones = [
    {
      id: "voluntariado",
      titulo: "Voluntariado",
      descripcion:
        "Dedicá tu tiempo, conocimientos y habilidades a las actividades de la fundación.",
      detalle: "Conocé cómo participar",
      color: "turquesa",
      icono: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="10" cy="7" r="4" />
          <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      id: "donaciones",
      titulo: "Donaciones",
      descripcion:
        "Realizá un aporte económico para contribuir al sostenimiento de los programas y las actividades.",
      detalle: "Conocé cómo donar",
      color: "coral",
      icono: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
        </svg>
      ),
    },
  ];

  const irA = (destino) => {
    if (typeof navigateTo === "function") {
      navigateTo(destino);
    }
  };

  return (
    <main className="participa-page">
      <section className="participa-hero">
        <div className="participa-container">
          <span className="participa-eyebrow">
            Sumate a nuestra comunidad
          </span>

          <h1>Participá</h1>

          <p>
            Cada gesto cuenta. Elegí cómo querés sumarte a FUDAP y contribuir
            a nuestra comunidad.
          </p>

          <span
            className="participa-hero-decoration participa-decoration-one"
            aria-hidden="true"
          />
          <span
            className="participa-hero-decoration participa-decoration-two"
            aria-hidden="true"
          />
        </div>
      </section>

      <section className="participa-options-section">
        <div className="participa-container">
          <div className="participa-section-heading">
            <h2>¿Cómo querés colaborar?</h2>
            <p>
              Hay distintas maneras de aportar. Elegí la opción que mejor
              se adapte a tus posibilidades.
            </p>
          </div>

          <div className="participa-options-grid">
            {opciones.map((opcion) => (
              <button
                key={opcion.id}
                type="button"
                className={`participa-option participa-option-${opcion.color}`}
                onClick={() => irA(opcion.id)}
                aria-label={`${opcion.titulo}: ${opcion.detalle}`}
              >
                <span className="participa-option-icon">
                  {opcion.icono}
                </span>

                <span className="participa-option-content">
                  <span className="participa-option-title">
                    {opcion.titulo}
                  </span>

                  <span className="participa-option-description">
                    {opcion.descripcion}
                  </span>

                  <span className="participa-option-link">
                    {opcion.detalle}
                    <span aria-hidden="true"> →</span>
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="participa-bottom">
        <div className="participa-container participa-bottom-inner">
          <div>
            <span className="participa-eyebrow">
              Tu compromiso importa
            </span>
            <h2>¿Tenés alguna consulta?</h2>
            <p>
              Comunicate con FUDAP para conocer más sobre las formas de
              colaborar.
            </p>
          </div>

          <button
            type="button"
            className="participa-contact-button"
            onClick={() => irA("contacto")}
          >
            Contactar a FUDAP
            <span aria-hidden="true"> →</span>
          </button>
        </div>
      </section>
    </main>
  );
}
