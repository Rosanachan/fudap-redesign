export default function Equipo({ actions }) {
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
            <span className="text-fudap-800 font-medium">Equipo</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-fudap-900 mb-4">Equipo</h1>
          <p className="text-lg text-fudap-600 max-w-2xl">Profesionales e interdisciplina al servicio del acompañamiento. [Completar con nombres y roles reales.]</p>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-fudap-800 mb-6">Comisión directiva / Coordinación</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Team placeholders */}
            <article className="bg-sand-50 rounded-2xl p-6 border border-fudap-100 text-center card-hover">
              <div className="w-24 h-24 rounded-full team-avatar mx-auto mb-4 flex items-center justify-center text-white text-2xl font-display font-bold">A</div>
              <h3 className="font-semibold text-fudap-900">[Nombre Apellido]</h3>
              <p className="text-sm text-fudap-500 mt-1">[Cargo — ej. Presidente/a]</p>
              <p className="text-xs text-fudap-400 mt-3">Placeholder — cargar foto y datos reales</p>
            </article>
            <article className="bg-sand-50 rounded-2xl p-6 border border-fudap-100 text-center card-hover">
              <div className="w-24 h-24 rounded-full team-avatar mx-auto mb-4 flex items-center justify-center text-white text-2xl font-display font-bold">B</div>
              <h3 className="font-semibold text-fudap-900">[Nombre Apellido]</h3>
              <p className="text-sm text-fudap-500 mt-1">[Cargo — ej. Dirección técnica]</p>
              <p className="text-xs text-fudap-400 mt-3">Placeholder — cargar foto y datos reales</p>
            </article>
            <article className="bg-sand-50 rounded-2xl p-6 border border-fudap-100 text-center card-hover">
              <div className="w-24 h-24 rounded-full team-avatar mx-auto mb-4 flex items-center justify-center text-white text-2xl font-display font-bold">C</div>
              <h3 className="font-semibold text-fudap-900">[Nombre Apellido]</h3>
              <p className="text-sm text-fudap-500 mt-1">[Cargo — ej. Coordinación]</p>
              <p className="text-xs text-fudap-400 mt-3">Placeholder — cargar foto y datos reales</p>
            </article>
          </div>

          <h2 className="font-display text-xl font-semibold text-fudap-800 mb-6">Equipo interdisciplinario</h2>
          <p className="text-fudap-600 mb-6 max-w-2xl">El trabajo cotidiano se sostiene con profesionales de distintas disciplinas. [Listar áreas reales: psicología, trabajo social, terapia ocupacional, etc.]</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="bg-fudap-50 rounded-xl p-4 text-center border border-fudap-100">
              <p className="font-medium text-fudap-800 text-sm">Psicología</p>
            </div>
            <div className="bg-fudap-50 rounded-xl p-4 text-center border border-fudap-100">
              <p className="font-medium text-fudap-800 text-sm">Trabajo social</p>
            </div>
            <div className="bg-fudap-50 rounded-xl p-4 text-center border border-fudap-100">
              <p className="font-medium text-fudap-800 text-sm">Terapia ocupacional</p>
            </div>
            <div className="bg-fudap-50 rounded-xl p-4 text-center border border-fudap-100">
              <p className="font-medium text-fudap-800 text-sm">[Otra disciplina]</p>
            </div>
            <div className="bg-fudap-50 rounded-xl p-4 text-center border border-fudap-100">
              <p className="font-medium text-fudap-800 text-sm">[Otra disciplina]</p>
            </div>
            <div className="bg-fudap-50 rounded-xl p-4 text-center border border-fudap-100">
              <p className="font-medium text-fudap-800 text-sm">Administración</p>
            </div>
            <div className="bg-fudap-50 rounded-xl p-4 text-center border border-fudap-100">
              <p className="font-medium text-fudap-800 text-sm">Voluntariado</p>
            </div>
            <div className="bg-fudap-50 rounded-xl p-4 text-center border border-fudap-100">
              <p className="font-medium text-fudap-800 text-sm">[Área]</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}