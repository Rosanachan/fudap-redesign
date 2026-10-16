export default function Actualidad({ actions }) {
  const { navigateTo, filterNews } = actions;
  return (
    <>
<section className="bg-fudap-50 border-b border-fudap-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <nav className="text-sm text-fudap-500 mb-4" aria-label="Breadcrumb">
            <button onClick={() => navigateTo('inicio')} className="hover:text-fudap-700">Inicio</button>
            <span className="mx-2">/</span>
            <span className="text-fudap-800 font-medium">Actualidad</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-fudap-900 mb-4">Actualidad</h1>
          <p className="text-lg text-fudap-600 max-w-2xl">Noticias, actividades y convocatorias vigentes. El material histórico se conserva en Archivo.</p>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-fudap-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar actualidad">
            <button onClick={() => filterNews('all')} data-filter="all" className="news-filter focus-ring px-4 py-2 rounded-full text-sm font-medium bg-fudap-700 text-white">Todas</button>
            <button onClick={() => filterNews('noticia')} data-filter="noticia" className="news-filter focus-ring px-4 py-2 rounded-full text-sm font-medium bg-fudap-50 text-fudap-700 hover:bg-fudap-100">Noticias</button>
            <button onClick={() => filterNews('actividad')} data-filter="actividad" className="news-filter focus-ring px-4 py-2 rounded-full text-sm font-medium bg-fudap-50 text-fudap-700 hover:bg-fudap-100">Actividades</button>
            <button onClick={() => filterNews('convocatoria')} data-filter="convocatoria" className="news-filter focus-ring px-4 py-2 rounded-full text-sm font-medium bg-fudap-50 text-fudap-700 hover:bg-fudap-100">Convocatorias</button>
            <button onClick={() => filterNews('archivo')} data-filter="archivo" className="news-filter focus-ring px-4 py-2 rounded-full text-sm font-medium bg-fudap-50 text-fudap-700 hover:bg-fudap-100">Archivo</button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-sand-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div id="news-grid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Vigentes */}
            <article className="news-item card-hover bg-white rounded-2xl overflow-hidden border border-fudap-100 shadow-soft" data-cat="noticia">
              <div className="aspect-[16/10] img-placeholder">
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80" alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="news-tag bg-fudap-100 text-fudap-700 px-2 py-0.5 rounded font-semibold">Noticia</span>
                  <time className="text-xs text-fudap-400">[Fecha reciente]</time>
                </div>
                <h2 className="font-display font-semibold text-fudap-900 mb-2">[Título de noticia institucional]</h2>
                <p className="text-sm text-fudap-600 line-clamp-3">Extracto. Completar con noticias reales publicadas por FUDAP. No mezclar con contenidos de años anteriores en el listado principal.</p>
              </div>
            </article>
            <article className="news-item card-hover bg-white rounded-2xl overflow-hidden border border-fudap-100 shadow-soft" data-cat="actividad">
              <div className="aspect-[16/10] img-placeholder">
                <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&q=80" alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="news-tag bg-coral-400/20 text-coral-600 px-2 py-0.5 rounded font-semibold">Actividad</span>
                  <time className="text-xs text-fudap-400">[Fecha]</time>
                </div>
                <h2 className="font-display font-semibold text-fudap-900 mb-2">[Taller o actividad vigente]</h2>
                <p className="text-sm text-fudap-600 line-clamp-3">Detalle de la actividad, lugar y modalidad. CTA a inscripción si aplica.</p>
              </div>
            </article>
            <article className="news-item card-hover bg-white rounded-2xl overflow-hidden border border-fudap-100 shadow-soft" data-cat="convocatoria">
              <div className="aspect-[16/10] bg-gradient-to-br from-fudap-600 to-fudap-800 flex items-center justify-center p-6">
                <div className="text-center">
                  <span className="news-tag bg-white/20 text-white px-2 py-0.5 rounded font-semibold">Convocatoria abierta</span>
                  <p className="text-white font-display font-semibold text-lg mt-3">[Título convocatoria]</p>
                </div>
              </div>
              <div className="p-5">
                <time className="text-xs text-fudap-400">Vigente hasta [fecha]</time>
                <h2 className="font-display font-semibold text-fudap-900 mt-1 mb-2">[Convocatoria de voluntariado / empleo / actividad]</h2>
                <p className="text-sm text-fudap-600 line-clamp-2">Requisitos y cómo postularse. Separado de convocatorias vencidas (2021, etc.).</p>
                <button onClick={() => navigateTo('voluntariado')} className="mt-3 text-fudap-600 text-sm font-semibold hover:text-fudap-800">Postularme →</button>
              </div>
            </article>
            {/* Archivo */}
            <article className="news-item card-hover bg-white rounded-2xl overflow-hidden border border-fudap-100 shadow-soft opacity-80" data-cat="archivo">
              <div className="aspect-[16/10] bg-fudap-100 flex items-center justify-center">
                <span className="text-fudap-500 text-sm font-medium">Archivo · 2021</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="news-tag bg-sand-200 text-fudap-600 px-2 py-0.5 rounded font-semibold">Archivo</span>
                  <time className="text-xs text-fudap-400">2021</time>
                </div>
                <h2 className="font-display font-semibold text-fudap-800 mb-2">Convocatoria 2021</h2>
                <p className="text-sm text-fudap-600">Contenido histórico conservado. Ya no aparece en el menú principal; vive en Archivo para consulta.</p>
              </div>
            </article>
            <article className="news-item card-hover bg-white rounded-2xl overflow-hidden border border-fudap-100 shadow-soft opacity-80" data-cat="archivo">
              <div className="aspect-[16/10] bg-fudap-100 flex items-center justify-center">
                <span className="text-fudap-500 text-sm font-medium">Archivo · 2019</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="news-tag bg-sand-200 text-fudap-600 px-2 py-0.5 rounded font-semibold">Archivo</span>
                  <time className="text-xs text-fudap-400">2019</time>
                </div>
                <h2 className="font-display font-semibold text-fudap-800 mb-2">Talleres 2019</h2>
                <p className="text-sm text-fudap-600">Registro de talleres realizados. Disponible en archivo histórico sin competir con la navegación actual.</p>
              </div>
            </article>
            <article className="news-item card-hover bg-white rounded-2xl overflow-hidden border border-fudap-100 shadow-soft" data-cat="noticia">
              <div className="aspect-[16/10] img-placeholder">
                <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&q=80" alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="news-tag bg-fudap-100 text-fudap-700 px-2 py-0.5 rounded font-semibold">Noticia</span>
                  <time className="text-xs text-fudap-400">[Fecha]</time>
                </div>
                <h2 className="font-display font-semibold text-fudap-900 mb-2">[Otra novedad FUDAP]</h2>
                <p className="text-sm text-fudap-600 line-clamp-3">Placeholder para segunda noticia vigente.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}