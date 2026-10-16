export default function QuienesSomos({ actions }) {
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
            <span className="text-fudap-800 font-medium">Quiénes somos</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-fudap-900 mb-4">Quiénes somos</h1>
          <p className="text-lg text-fudap-600 max-w-2xl">Conocé la historia, el enfoque y el compromiso de la Fundación para el Desarrollo de Actividades Psicosociales.</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-fudap-900 mb-5">Nuestra identidad</h2>
              <div className="space-y-4 text-fudap-700 leading-relaxed">
                <p>
                  <strong>FUDAP</strong> — Fundación para el Desarrollo de Actividades Psicosociales — es una organización sin fines de lucro orientada a la rehabilitación, la inclusión social y el fortalecimiento de redes comunitarias.
                </p>
                <p>
                  {/* Placeholder institucional */}
                  [Completar con la historia fundacional, año de creación, contexto de origen y valores centrales de FUDAP. No inventar datos no verificados.]
                </p>
                <p>
                  Trabajamos desde un paradigma de derechos humanos, con perspectiva de salud mental comunitaria, interdisciplina y participación de las personas usuarias y sus familias.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => navigateTo('mision-vision')} className="btn-primary focus-ring text-white text-sm font-medium px-5 py-2.5 rounded-full">Misión y visión</button>
                <button onClick={() => navigateTo('equipo')} className="btn-secondary focus-ring bg-white border-2 border-fudap-200 text-fudap-700 text-sm font-medium px-5 py-2.5 rounded-full">Conocé al equipo</button>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card img-placeholder">
              <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=700&q=80" alt="[Placeholder] Foto institucional del equipo o sede FUDAP" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Enfoque */}
      <section className="py-16 bg-sand-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-fudap-900 mb-8 text-center">Nuestro enfoque</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-fudap-100 shadow-soft text-center">
              <div className="w-14 h-14 rounded-2xl bg-fudap-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-fudap-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <h3 className="font-semibold text-fudap-900 mb-2">Derechos humanos</h3>
              <p className="text-sm text-fudap-600 leading-relaxed">La dignidad y la autonomía de las personas guían cada intervención y dispositivo.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-fudap-100 shadow-soft text-center">
              <div className="w-14 h-14 rounded-2xl bg-fudap-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-fudap-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <h3 className="font-semibold text-fudap-900 mb-2">Salud mental comunitaria</h3>
              <p className="text-sm text-fudap-600 leading-relaxed">Trabajamos en territorio, con la red social y los recursos de la comunidad.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-fudap-100 shadow-soft text-center">
              <div className="w-14 h-14 rounded-2xl bg-fudap-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-fudap-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </div>
              <h3 className="font-semibold text-fudap-900 mb-2">Abordaje integral</h3>
              <p className="text-sm text-fudap-600 leading-relaxed">Interdisciplina, continuidad de cuidados e inclusión socio-laboral y familiar.</p>
            </div>
          </div>
        </div>
            </section>
    </>
  );
}