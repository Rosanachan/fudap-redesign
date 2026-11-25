
export default function Donaciones({ actions = {} }) {
  const {
    navigateTo,
    handleDonate,
    selectDonate,
    clearDonateSelection,
  } = actions;

  const irAInicio = () => {
    if (typeof navigateTo === "function") {
      navigateTo("inicio");
    }
  };

  const beneficios = [
    {
      titulo: "Programas de rehabilitación",
      descripcion: "Recursos para el Centro y actividades terapéuticas.",
    },
    {
      titulo: "Inclusión laboral y talleres",
      descripcion: "Materiales, capacitaciones y acompañamiento.",
    },
    {
      titulo: "Apoyo a familias",
      descripcion: "Espacios grupales y orientación.",
    },
  ];

  const montos = [2000, 5000, 10000];

  return (
    <main className="donaciones-page">
      <section className="donaciones-hero">
        <div className="donaciones-container">
          <nav className="donaciones-breadcrumb" aria-label="Ruta de navegación">
            <button type="button" onClick={irAInicio}>
              Inicio
            </button>
            <span aria-hidden="true">/</span>
            <span>Participá</span>
            <span aria-hidden="true">/</span>
            <span className="donaciones-breadcrumb-current">
              Donaciones
            </span>
          </nav>

          <div className="donaciones-hero-content">
            <span className="donaciones-eyebrow">
              Tu aporte importa
            </span>
            <h1>Donaciones</h1>
            <p>
              Tu aporte ayuda a sostener programas de rehabilitación,
              materiales, talleres y el trabajo del equipo.
            </p>
          </div>
          <span className="donaciones-hero-decoration" aria-hidden="true" />
        </div>
      </section>

      <section className="donaciones-main-section">
        <div className="donaciones-container">
          <div className="donaciones-layout">
            <div className="donaciones-info">
              <span className="donaciones-eyebrow">
                ¿Cómo nos ayudás?
              </span>
              <h2>¿En qué se usa tu donación?</h2>
              <p className="donaciones-intro">
                Cada aporte puede contribuir al sostenimiento de las
                actividades y los programas de la institución.
              </p>

              <div className="donaciones-benefits">
                {beneficios.map((beneficio) => (
                  <article
                    className="donaciones-benefit"
                    key={beneficio.titulo}
                  >
                    <span
                      className="donaciones-check"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>
                    <div>
                      <h3>{beneficio.titulo}</h3>
                      <p>{beneficio.descripcion}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="donaciones-other-ways">
                <span className="donaciones-other-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 10h18M7 15h3" />
                  </svg>
                </span>
                <h3>Otras formas de donar</h3>
                <p>
                  <strong>Transferencia bancaria / CBU:</strong>{" "}
                  [Completar datos bancarios oficiales].
                </p>
                <p>
                  <strong>Donaciones en especie:</strong> consultá por
                  los canales de contacto de FUDAP.
                </p>
                <p className="donaciones-note">
                  Los datos de pago y las vías de recepción deben ser
                  confirmados por la institución.
                </p>
                <button
                  type="button"
                  className="donaciones-text-link"
                  onClick={() => {
                    if (typeof navigateTo === "function") {
                      navigateTo("contacto");
                    }
                  }}
                >
                  Consultar otras formas de colaborar
                  <span aria-hidden="true"> →</span>
                </button>
              </div>
            </div>

            <div className="donaciones-widget">
              <div className="donaciones-widget-heading">
                <span className="donaciones-widget-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </span>
                <div>
                  <h2>Doná ahora</h2>
                  <p>Elegí cómo querés colaborar</p>
                </div>
              </div>

              <div className="donaciones-prototype-note">
                Prototipo de interfaz. El pago todavía debe vincularse
                con una plataforma autorizada por FUDAP.
              </div>

              <fieldset className="donaciones-fieldset">
                <legend>Elegí un monto (ARS)</legend>
                <div className="donaciones-amounts">
                  {montos.map((monto) => (
                    <button
                      key={monto}
                      type="button"
                      className={`donaciones-amount ${
                        monto === 5000 ? "selected" : ""
                      }`}
                      onClick={(event) => {
                        if (typeof selectDonate === "function") {
                          selectDonate(event.currentTarget, monto);
                        }
                      }}
                      aria-label={`Donar ${monto.toLocaleString("es-AR")} pesos`}
                    >
                      $ {monto.toLocaleString("es-AR")}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="donaciones-custom-field">
                <label htmlFor="donate-custom">Otro monto</label>
                <div className="donaciones-input-wrap">
                  <span aria-hidden="true">$</span>
                  <input
                    type="number"
                    id="donate-custom"
                    name="customAmount"
                    min="100"
                    step="1"
                    placeholder="Ingresá el monto"
                    onInput={(event) => {
                      if (typeof clearDonateSelection === "function") {
                        clearDonateSelection(event);
                      }
                    }}
                  />
                </div>
                <p className="donaciones-field-hint">
                  El monto mínimo sugerido es de $ 100.
                </p>
              </div>

              <fieldset className="donaciones-fieldset donaciones-frequency">
                <legend>Frecuencia de la donación</legend>
                <div className="donaciones-frequency-options">
                  <label className="donaciones-frequency-option">
                    <input
                      type="radio"
                      name="freq"
                      value="once"
                      defaultChecked
                    />
                    <span>Única vez</span>
                  </label>
                  <label className="donaciones-frequency-option">
                    <input
                      type="radio"
                      name="freq"
                      value="monthly"
                    />
                    <span>Mensual</span>
                  </label>
                </div>
              </fieldset>

              <button
                type="button"
                className="donaciones-submit"
                onClick={handleDonate}
              >
                Continuar al pago
                <span aria-hidden="true"> →</span>
              </button>

              <p
                id="donate-msg"
                className="donaciones-payment-message hidden"
                role="status"
                aria-live="polite"
              >
                Redirección a plataforma de pago (prototipo). Aquí se
                vinculará la URL externa.
              </p>

              <div className="donaciones-secure-note">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>
                  Pasarela de pago pendiente de definición por FUDAP.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="donaciones-cta">
        <div className="donaciones-container donaciones-cta-inner">
          <div>
            <span className="donaciones-eyebrow">
              También podés participar
            </span>
            <h2>Hay muchas formas de colaborar</h2>
            <p>
              Tu tiempo, tus conocimientos y tu compromiso también pueden
              hacer una diferencia.
            </p>
          </div>
          <button
            type="button"
            className="donaciones-cta-button"
            onClick={() => {
              if (typeof navigateTo === "function") {
                navigateTo("voluntariado");
              }
            }}
          >
            Conocé el voluntariado
            <span aria-hidden="true"> →</span>
          </button>
        </div>
      </section>
    </main>
  );
}
