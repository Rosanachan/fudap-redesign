export default function Proyectos({ actions }) {
  const { navigateTo } = actions;
  return (
    <>
<section className="bg-fudap-50 border-b border-fudap-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <nav className="text-sm text-fudap-500 mb-4" aria-label="Breadcrumb">
            <button onClick={() => navigateTo('inicio')} className="hover:text-fudap-700">Inicio</button>
            <span className="mx-2">/</span>
            <span className="text-fudap-700">FUDAP</span>
            <span className="mx-2">/</span>
            <span className="text-fudap-800 font-medium">Proyectos</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-fudap-900 mb-4">Proyectos</h1>
          <p className="text-lg text-fudap-600 max-w-2xl">Iniciativas y líneas de trabajo que amplían el alcance de nuestros programas.</p>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            <article className="flex flex-col md:flex-row gap-6 bg-sand-50 rounded-2xl border border-fudap-100 overflow-hidden shadow-soft">
              <div className="md:w-64 lg:w-80 aspect-video md:aspect-auto img-placeholder flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80" alt="[Placeholder proyecto]" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <span className="text-xs font-semibold text-fudap-500 uppercase tracking-wide mb-2">En curso</span>
                <h2 className="font-display text-xl font-bold text-fudap-900 mb-2">[Nombre del proyecto]</h2>
                <p className="text-fudap-600 text-sm leading-relaxed mb-4">Descripción breve del proyecto, objetivos y población destinataria. Placeholder para contenido real de FUDAP.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-fudap-100 text-fudap-700 px-2.5 py-1 rounded-full">Rehabilitación</span>
                  <span className="text-xs bg-fudap-100 text-fudap-700 px-2.5 py-1 rounded-full">Comunidad</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col md:flex-row gap-6 bg-sand-50 rounded-2xl border border-fudap-100 overflow-hidden shadow-soft">
              <div className="md:w-64 lg:w-80 aspect-video md:aspect-auto img-placeholder flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80" alt="[Placeholder proyecto]" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <span className="text-xs font-semibold text-fudap-500 uppercase tracking-wide mb-2">En curso</span>
                <h2 className="font-display text-xl font-bold text-fudap-900 mb-2">[Nombre del proyecto]</h2>
                <p className="text-fudap-600 text-sm leading-relaxed mb-4">Descripción breve. Completar con proyectos reales (convenios, programas especiales, alianzas).</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-fudap-100 text-fudap-700 px-2.5 py-1 rounded-full">Inserción laboral</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col md:flex-row gap-6 bg-sand-50 rounded-2xl border border-fudap-100 overflow-hidden shadow-soft opacity-90">
              <div className="md:w-64 lg:w-80 aspect-video md:aspect-auto bg-fudap-200 flex-shrink-0 flex items-center justify-center">
                <span className="text-fudap-600 text-sm font-medium">Proyecto finalizado</span>
              </div>
              <div className="p-6 flex flex-col justify-center">
                <span className="text-xs font-semibold text-fudap-400 uppercase tracking-wide mb-2">Archivo</span>
                <h2 className="font-display text-xl font-bold text-fudap-800 mb-2">[Proyecto histórico — ej. referencia a actividades pasadas]</h2>
                <p className="text-fudap-600 text-sm leading-relaxed">Los contenidos temporales (talleres 2019, convocatorias 2021, etc.) se conservan aquí o en Actualidad → Archivo, sin saturar el menú principal.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}