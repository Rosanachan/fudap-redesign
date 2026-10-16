export default function MisionVision({ actions }) {
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
            <span className="text-fudap-800 font-medium">Misión y visión</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-fudap-900">Misión y visión</h1>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-gradient-to-br from-fudap-600 to-fudap-800 p-8 md:p-10 text-white shadow-elevated">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">Misión</h2>
              <p className="text-fudap-100 leading-relaxed text-lg">
                {/* Placeholder: texto oficial de misión */}
                Promover el desarrollo de actividades psicosociales que favorezcan la rehabilitación, la autonomía y la inclusión social de personas en situación de vulnerabilidad psíquica y social, junto a sus familias y comunidades.
              </p>
              <p className="text-fudap-300 text-xs mt-4">[Reemplazar con redacción institucional oficial de FUDAP]</p>
            </div>
            <div className="rounded-3xl bg-sand-100 border border-fudap-100 p-8 md:p-10 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-fudap-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-fudap-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              </div>
              <h2 className="font-display text-2xl font-bold text-fudap-900 mb-4">Visión</h2>
              <p className="text-fudap-700 leading-relaxed text-lg">
                {/* Placeholder: texto oficial de visión */}
                Ser una organización de referencia en rehabilitación psicosocial e inclusión, reconocida por su calidad de acompañamiento, su compromiso ético y su capacidad de articular con el sistema de salud y la comunidad.
              </p>
              <p className="text-fudap-400 text-xs mt-4">[Reemplazar con redacción institucional oficial de FUDAP]</p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-fudap-900 mb-6">Valores</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-fudap-50 rounded-xl p-5 border border-fudap-100">
                <h3 className="font-semibold text-fudap-800 mb-1">Respeto</h3>
                <p className="text-sm text-fudap-600">Por la singularidad y los derechos de cada persona.</p>
              </div>
              <div className="bg-fudap-50 rounded-xl p-5 border border-fudap-100">
                <h3 className="font-semibold text-fudap-800 mb-1">Solidaridad</h3>
                <p className="text-sm text-fudap-600">Construcción colectiva de apoyos y oportunidades.</p>
              </div>
              <div className="bg-fudap-50 rounded-xl p-5 border border-fudap-100">
                <h3 className="font-semibold text-fudap-800 mb-1">Compromiso</h3>
                <p className="text-sm text-fudap-600">Con la calidad del cuidado y la continuidad.</p>
              </div>
              <div className="bg-fudap-50 rounded-xl p-5 border border-fudap-100">
                <h3 className="font-semibold text-fudap-800 mb-1">Transparencia</h3>
                <p className="text-sm text-fudap-600">En la gestión y la comunicación institucional.</p>
              </div>
            </div>
            <p className="text-xs text-fudap-400 mt-4">[Ajustar valores según documento institucional de FUDAP]</p>
          </div>
        </div>
      </section>
    </>
  );
}