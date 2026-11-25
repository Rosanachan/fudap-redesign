
import React from "react";

export default function Voluntariado({ actions = {} }) {
  const { navigateTo, handleVolForm } = actions;

  const pasos = [
    {
      numero: "01",
      titulo: "Completá el formulario",
      descripcion:
        "Contanos quién sos, cuáles son tus intereses y de qué manera te gustaría colaborar.",
    },
    {
      numero: "02",
      titulo: "Entrevista de orientación",
      descripcion:
        "Nos pondremos en contacto para conocerte, conversar sobre tus motivaciones y responder tus preguntas.",
    },
    {
      numero: "03",
      titulo: "Incorporación y acompañamiento",
      descripcion:
        "Buscaremos el espacio de participación más adecuado para vos y te acompañaremos durante el proceso.",
    },
  ];

  const areas = [
    {
      titulo: "Acompañamiento comunitario",
      descripcion:
        "Colaboración en propuestas y actividades orientadas a la comunidad.",
      color: "turquesa",
    },
    {
      titulo: "Actividades y talleres",
      descripcion:
        "Apoyo en la organización y el desarrollo de encuentros y actividades.",
      color: "verde",
    },
    {
      titulo: "Comunicación y difusión",
      descripcion:
        "Colaboración con contenidos, campañas y difusión de las iniciativas.",
      color: "coral",
    },
    {
      titulo: "Organización y apoyo institucional",
      descripcion:
        "Participación en tareas de organización, eventos y otras necesidades de la institución.",
      color: "turquesa",
    },
  ];

  const irA = (destino) => {
    if (typeof navigateTo === "function") {
      navigateTo(destino);
    }
  };

  const enviarFormulario = (event) => {
    event.preventDefault();

    if (typeof handleVolForm === "function") {
      handleVolForm(event);
    }
  };

  return (
    <main className="voluntariado-page">
      <section className="voluntariado-hero">
        <div className="voluntariado-container">
          <nav className="voluntariado-breadcrumb" aria-label="Ruta de navegación">
            <button type="button" onClick={() => irA("inicio")}>
              Inicio
            </button>
            <span aria-hidden="true">/</span>
            <span>Voluntariado</span>
          </nav>

          <div className="voluntariado-hero-content">
            <span className="voluntariado-eyebrow">
              Participá con FUDAP
            </span>

            <h1>
              Tu compromiso puede
              <span> generar un cambio.</span>
            </h1>

            <p>
              Sumate a nuestra comunidad de voluntariado y colaborá con
              iniciativas que promueven el bienestar, la inclusión y el
              acompañamiento comunitario.
            </p>

            <button
              type="button"
              className="voluntariado-button voluntariado-button-primary"
              onClick={() =>
                document
                  .getElementById("form-voluntariado")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              Quiero ser voluntario/a
              <span aria-hidden="true"> →</span>
            </button>
          </div>

          <div className="voluntariado-hero-decoration" aria-hidden="true">
            <span className="voluntariado-decoration-circle" />
            <span className="voluntariado-decoration-line" />
          </div>
        </div>
      </section>

      <section className="voluntariado-intro">
        <div className="voluntariado-container voluntariado-intro-grid">
          <div>
            <span className="voluntariado-eyebrow">
              Formar parte
            </span>
            <h2>Hay muchas formas de colaborar</h2>
          </div>

          <p>
            El voluntariado es una oportunidad para compartir conocimientos,
            aportar tiempo y construir vínculos. Queremos conocer tus
            intereses para explorar juntos cómo podés participar.
          </p>
        </div>
      </section>

      <section className="voluntariado-areas">
        <div className="voluntariado-container">
          <div className="voluntariado-section-heading">
            <span className="voluntariado-eyebrow">
              ¿Dónde podés participar?
            </span>
            <h2>Encontrá tu forma de sumar</h2>
            <p>
              Estas son algunas áreas posibles de colaboración. Las
              oportunidades concretas deben coordinarse con el equipo de FUDAP.
            </p>
          </div>

          <div className="voluntariado-areas-grid">
            {areas.map((area) => (
              <article
                className={`voluntariado-area-card voluntariado-area-${area.color}`}
                key={area.titulo}
              >
                <span
                  className="voluntariado-area-mark"
                  aria-hidden="true"
                />

                <h3>{area.titulo}</h3>
                <p>{area.descripcion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="voluntariado-proceso">
        <div className="voluntariado-container">
          <div className="voluntariado-section-heading">
            <span className="voluntariado-eyebrow">
              ¿Cómo empezar?
            </span>
            <h2>Un proceso para conocernos</h2>
            <p>
              Queremos que tu experiencia de voluntariado sea clara,
              acompañada y acorde a tus posibilidades.
            </p>
          </div>

          <div className="voluntariado-steps-grid">
            {pasos.map((paso) => (
              <article className="voluntariado-step" key={paso.numero}>
                <span className="voluntariado-step-number">
                  {paso.numero}
                </span>
                <h3>{paso.titulo}</h3>
                <p>{paso.descripcion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="voluntariado-form-section" id="form-voluntariado">
        <div className="voluntariado-container voluntariado-form-grid">
          <div className="voluntariado-form-copy">
            <span className="voluntariado-eyebrow">
              Sumate a FUDAP
            </span>

            <h2>Contanos un poco sobre vos</h2>

            <p>
              Completá el formulario y dejanos tus datos para que podamos
              conocer tus intereses y conversar sobre posibles formas de
              participación.
            </p>

            <div className="voluntariado-form-note">
              <span aria-hidden="true">✓</span>
              <p>
                No necesitás tener todas las respuestas. Lo importante es
                que nos cuentes qué te motiva a participar.
              </p>
            </div>
          </div>

          <form
            id="form-voluntariado"
            className="voluntariado-form"
            onSubmit={enviarFormulario}
          >
            <div className="voluntariado-field">
              <label htmlFor="vol-nombre">Nombre y apellido *</label>
              <input
                id="vol-nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre completo"
                autoComplete="name"
                required
              />
            </div>

            <div className="voluntariado-field">
              <label htmlFor="vol-email">Correo electrónico *</label>
              <input
                id="vol-email"
                name="email"
                type="email"
                placeholder="nombre@correo.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="voluntariado-field">
              <label htmlFor="vol-tel">Teléfono</label>
              <input
                id="vol-tel"
                name="telefono"
                type="tel"
                placeholder="Tu número de contacto"
                autoComplete="tel"
              />
            </div>

            <div className="voluntariado-field">
              <label htmlFor="vol-area">
                ¿En qué área te gustaría colaborar?
              </label>
              <select id="vol-area" name="area" defaultValue="">
                <option value="" disabled>
                  Seleccioná un área
                </option>
                <option value="comunitaria">
                  Acompañamiento comunitario
                </option>
                <option value="talleres">
                  Actividades y talleres
                </option>
                <option value="comunicacion">
                  Comunicación y difusión
                </option>
                <option value="institucional">
                  Organización y apoyo institucional
                </option>
                <option value="otra">Otra / A conversar</option>
              </select>
            </div>

            <div className="voluntariado-field">
              <label htmlFor="vol-msg">
                ¿Querés contarnos algo más?
              </label>
              <textarea
                id="vol-msg"
                name="mensaje"
                rows="4"
                placeholder="Contanos tus intereses, experiencia o disponibilidad..."
              />
            </div>

            <button
              type="submit"
              className="voluntariado-button voluntariado-button-primary voluntariado-submit"
            >
              Enviar formulario
              <span aria-hidden="true"> →</span>
            </button>

            <p
              id="vol-success"
              className="voluntariado-success hidden"
              role="status"
              aria-live="polite"
            >
              ¡Gracias por tu interés en participar!
            </p>

            <p className="voluntariado-form-disclaimer">
              Formulario de demostración: la recepción efectiva de los datos
              depende de que el envío esté conectado a un servicio o backend.
            </p>
          </form>
        </div>
      </section>

      <section className="voluntariado-contact-cta">
        <div className="voluntariado-container voluntariado-contact-inner">
          <div>
            <span className="voluntariado-eyebrow">
              ¿Tenés alguna consulta?
            </span>
            <h2>Estamos para escucharte</h2>
            <p>
              Si querés conocer más sobre el voluntariado, podés comunicarte
              con FUDAP.
            </p>
          </div>

          <button
            type="button"
            className="voluntariado-button voluntariado-button-outline"
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
