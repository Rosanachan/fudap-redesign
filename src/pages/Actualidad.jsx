
export default function Actualidad({ actions = {} }) {
  const { navigateTo, filterNews } = actions;

  const noticias = [
    {
      categoria: "noticia",
      etiqueta: "Noticia",
      fecha: "[Fecha reciente]",
      titulo: "[Título de noticia institucional]",
      descripcion:
        "Completar con noticias reales publicadas por FUDAP. Las novedades actuales deben distinguirse de los contenidos históricos.",
      imagen:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&q=80",
      imagenAlt: "Imagen ilustrativa de un encuentro entre personas",
      color: "turquesa",
    },
    {
      categoria: "actividad",
      etiqueta: "Actividad",
      fecha: "[Fecha]",
      titulo: "[Taller o actividad vigente]",
      descripcion:
        "Agregar detalles de la actividad, lugar y modalidad. Incorporar un enlace de inscripción si corresponde.",
      imagen:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=700&q=80",
      imagenAlt: "Imagen ilustrativa de una actividad grupal",
      color: "coral",
    },
    {
      categoria: "convocatoria",
      etiqueta: "Convocatoria",
      fecha: "Vigente hasta [fecha]",
      titulo: "[Convocatoria de voluntariado, empleo o actividad]",
      descripcion:
        "Completar los requisitos, las fechas y el procedimiento para postularse. Verificar la vigencia antes de publicar.",
      color: "verde",
    },
    {
      categoria: "archivo",
      etiqueta: "Archivo",
      fecha: "2021",
      titulo: "Convocatoria 2021",
      descripcion:
        "Contenido histórico conservado para consulta. Esta convocatoria ya no se presenta como vigente.",
      archivo: "2021",
    },
    {
      categoria: "archivo",
      etiqueta: "Archivo",
      fecha: "2019",
      titulo: "Talleres 2019",
      descripcion:
        "Registro histórico de talleres realizados, separado de las noticias y actividades actuales.",
      archivo: "2019",
    },
    {
      categoria: "noticia",
      etiqueta: "Noticia",
      fecha: "[Fecha]",
      titulo: "[Otra novedad FUDAP]",
      descripcion:
        "Espacio reservado para una segunda noticia institucional vigente.",
      imagen:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=700&q=80",
      imagenAlt: "Imagen ilustrativa de personas colaborando",
      color: "turquesa",
    },
  ];

  const filtros = [
    { id: "all", texto: "Todas" },
    { id: "noticia", texto: "Noticias" },
    { id: "actividad", texto: "Actividades" },
    { id: "convocatoria", texto: "Convocatorias" },
    { id: "archivo", texto: "Archivo" },
  ];

  const irA = (destino) => {
    if (typeof navigateTo === "function") {
      navigateTo(destino);
    }
  };

  const aplicarFiltro = (filtro) => {
    if (typeof filterNews === "function") {
      filterNews(filtro);
    }
  };

  return (
    <main className="actualidad-page">
      <section className="actualidad-hero">
        <div className="actualidad-container">
          <nav className="actualidad-breadcrumb" aria-label="Ruta de navegación">
            <button type="button" onClick={() => irA("inicio")}>
              Inicio
            </button>
            <span aria-hidden="true">/</span>
            <span className="actualidad-breadcrumb-current">
              Actualidad
            </span>
          </nav>

          <span className="actualidad-eyebrow">
            Novedades de la institución
          </span>

          <h1>Actualidad</h1>

          <p>
            Noticias, actividades y convocatorias vigentes. El material
            histórico se conserva en el archivo para que puedas consultarlo.
          </p>
        </div>
      </section>

      <section className="actualidad-filter-section">
        <div className="actualidad-container">
          <div
            className="actualidad-filters"
            role="group"
            aria-label="Filtrar publicaciones"
          >
            {filtros.map((filtro) => (
              <button
                key={filtro.id}
                type="button"
                onClick={() => aplicarFiltro(filtro.id)}
                data-filter={filtro.id}
                className={`news-filter actualidad-filter ${
                  filtro.id === "all" ? "active" : ""
                }`}
                aria-label={`Mostrar ${filtro.texto.toLowerCase()}`}
              >
                {filtro.texto}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="actualidad-list-section">
        <div className="actualidad-container">
          <div id="news-grid" className="actualidad-grid">
            {noticias.map((noticia, indice) => (
              <article
                key={`${noticia.categoria}-${noticia.fecha}-${indice}`}
                className={`news-item actualidad-card ${
                  noticia.categoria === "archivo"
                    ? "actualidad-card-archive"
                    : ""
                }`}
                data-cat={noticia.categoria}
              >
                {noticia.imagen ? (
                  <div className="actualidad-card-image">
                    <img
                      src={noticia.imagen}
                      alt={noticia.imagenAlt}
                      loading="lazy"
                    />
                    <span
                      className={`actualidad-image-accent actualidad-accent-${noticia.color}`}
                      aria-hidden="true"
                    />
                  </div>
                ) : noticia.categoria === "convocatoria" ? (
                  <div className="actualidad-card-graphic actualidad-graphic-call">
                    <span className="actualidad-card-tag actualidad-tag-light">
                      Convocatoria abierta
                    </span>
                    <p>{noticia.titulo}</p>
                    <span className="actualidad-graphic-mark" aria-hidden="true">
                      +
                    </span>
                  </div>
                ) : (
                  <div className="actualidad-card-graphic actualidad-graphic-archive">
                    <span className="actualidad-archive-year">
                      {noticia.archivo}
                    </span>
                    <span>Archivo histórico</span>
                  </div>
                )}

                <div className="actualidad-card-content">
                  <div className="actualidad-card-meta">
                    <span
                      className={`actualidad-card-tag actualidad-tag-${noticia.color || "neutral"}`}
                    >
                      {noticia.etiqueta}
                    </span>
                    <time>{noticia.fecha}</time>
                  </div>

                  <h2>{noticia.titulo}</h2>
                  <p>{noticia.descripcion}</p>

                  {noticia.categoria === "convocatoria" && (
                    <button
                      type="button"
                      className="actualidad-card-link"
                      onClick={() => irA("voluntariado")}
                    >
                      Consultar voluntariado
                      <span aria-hidden="true"> →</span>
                    </button>
                  )}

                  {noticia.categoria === "archivo" && (
                    <span className="actualidad-archive-label">
                      Publicación histórica
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>

          <p className="actualidad-editorial-note">
            <strong>Nota de edición:</strong> completar los títulos, fechas,
            descripciones y convocatorias con información institucional
            verificada antes de publicar el sitio.
          </p>
        </div>
      </section>
    </main>
  );
}

