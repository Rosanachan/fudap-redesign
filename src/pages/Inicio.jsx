export default function Inicio({ actions }) {
  const { navigateTo } = actions;
  return (
    <>
{/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-16 md:pt-20 md:pb-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-fudap-100 text-fudap-700 text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full mb-6 fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-fudap-500"></span>
                Fundación · Actividades psicosociales
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-fudap-900 leading-[1.15] mb-5 fade-in stagger-1">
                Acompañamos procesos de<br className="hidden sm:block" />
                <span className="text-fudap-600">rehabilitación e inclusión</span>
              </h1>
              <p className="text-lg text-fudap-600 leading-relaxed mb-8 max-w-lg fade-in stagger-2">
                FUDAP es una fundación dedicada al desarrollo de actividades psicosociales. Trabajamos junto a personas en situación de vulnerabilidad, sus familias y la comunidad.
              </p>
              <div className="flex flex-wrap gap-3 fade-in stagger-3">
                <button onClick={() => navigateTo('servicios')} className="btn-primary focus-ring text-white font-medium px-6 py-3 rounded-full text-sm sm:text-base">
                  Conocé nuestros programas
                </button>
                <button onClick={() => navigateTo('participa-hub')} className="btn-secondary focus-ring bg-white border-2 border-fudap-200 text-fudap-700 font-medium px-6 py-3 rounded-full text-sm sm:text-base">
                  Quiero participar
                </button>
              </div>
            </div>
            {/* Hero visual */}
            <div className="relative fade-in stagger-2">
              <div className="aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-elevated img-placeholder">
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
                  alt="[Placeholder] Personas en actividad grupal comunitaria — reemplazar con foto institucional de FUDAP"
                  className="w-full h-full object-cover mix-blend-overlay opacity-90"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fudap-900/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <p className="text-white/95 text-sm font-medium">Espacios de encuentro, rehabilitación y pertenencia</p>
                  <p className="text-white/70 text-xs mt-1">Foto placeholder — usar imagen real de actividades FUDAP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es FUDAP */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-2">
              <p className="text-fudap-500 text-sm font-semibold tracking-widest uppercase mb-3">Qué es FUDAP</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-fudap-900 leading-tight">
                Una fundación al servicio de las personas
              </h2>
            </div>
            <div className="md:col-span-3 space-y-4">
              <p className="text-fudap-700 text-lg leading-relaxed">
                La <strong>Fundación para el Desarrollo de Actividades Psicosociales (FUDAP)</strong> impulsa dispositivos de atención, rehabilitación e inclusión social para personas con padecimiento psíquico y en situación de vulnerabilidad.
              </p>
              <p className="text-fudap-600 leading-relaxed">
                Desde un enfoque comunitario y de derechos, articulamos centros de rehabilitación, programas de acción solidaria, inserción laboral y espacios de apoyo a familias. {/* Placeholder: completar con texto institucional oficial */}
              </p>
              <button onClick={() => navigateTo('quienes-somos')} className="inline-flex items-center gap-2 text-fudap-600 font-semibold text-sm hover:text-fudap-800 transition-colors group mt-2">
                Conocé más sobre nosotros
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios destacados */}
      <section className="py-16 md:py-24 bg-sand-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-fudap-500 text-sm font-semibold tracking-widest uppercase mb-3">Qué hacemos</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-fudap-900">Servicios y programas</h2>
            </div>
            <button onClick={() => navigateTo('servicios')} className="text-fudap-600 font-semibold text-sm hover:text-fudap-800 inline-flex items-center gap-1 self-start sm:self-auto">
              Ver todos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1 */}
            <article className="card-hover bg-white rounded-2xl p-6 border border-fudap-100 shadow-soft flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-fudap-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-fudap-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <h3 className="font-display font-semibold text-lg text-fudap-900 mb-2">Centro de Rehabilitación Psicosocial</h3>
              <p className="text-fudap-600 text-sm leading-relaxed flex-grow">Dispositivo de atención y rehabilitación para personas con padecimiento psíquico, con abordaje interdisciplinario.</p>
              <button onClick={() => navigateTo('servicios')} className="mt-4 text-fudap-600 text-sm font-semibold hover:text-fudap-800 inline-flex items-center gap-1">Más info →</button>
            </article>
            {/* Card 2 */}
            <article className="card-hover bg-white rounded-2xl p-6 border border-fudap-100 shadow-soft flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-coral-400/15 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-coral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
              </div>
              <h3 className="font-display font-semibold text-lg text-fudap-900 mb-2">Programa de Acción Solidaria</h3>
              <p className="text-fudap-600 text-sm leading-relaxed flex-grow">Iniciativas solidarias y de apoyo comunitario que fortalecen redes y promueven la participación social.</p>
              <button onClick={() => navigateTo('servicios')} className="mt-4 text-fudap-600 text-sm font-semibold hover:text-fudap-800 inline-flex items-center gap-1">Más info →</button>
            </article>
            {/* Card 3 */}
            <article className="card-hover bg-white rounded-2xl p-6 border border-fudap-100 shadow-soft flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-fudap-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-fudap-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <h3 className="font-display font-semibold text-lg text-fudap-900 mb-2">Inserción Laboral</h3>
              <p className="text-fudap-600 text-sm leading-relaxed flex-grow">Acompañamiento en procesos de inclusión socio-laboral, capacitación y vinculación con el mundo del trabajo.</p>
              <button onClick={() => navigateTo('servicios')} className="mt-4 text-fudap-600 text-sm font-semibold hover:text-fudap-800 inline-flex items-center gap-1">Más info →</button>
            </article>
            {/* Card 4 */}
            <article className="card-hover bg-white rounded-2xl p-6 border border-fudap-100 shadow-soft flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-fudap-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-fudap-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <h3 className="font-display font-semibold text-lg text-fudap-900 mb-2">Grupos para familiares</h3>
              <p className="text-fudap-600 text-sm leading-relaxed flex-grow">Espacios de escucha, orientación y contención para familiares y referentes afectivos de las personas acompañadas.</p>
              <button onClick={() => navigateTo('servicios')} className="mt-4 text-fudap-600 text-sm font-semibold hover:text-fudap-800 inline-flex items-center gap-1">Más info →</button>
            </article>
          </div>
        </div>
      </section>

      {/* A quién acompañamos */}
      <section className="py-16 md:py-20 bg-fudap-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-fudap-400 blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <p className="text-fudap-300 text-sm font-semibold tracking-widest uppercase mb-3">A quiénes</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold leading-snug">Acompañamos a personas, familias y comunidad</h2>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-3 gap-6">
              <div>
                <div className="w-10 h-10 rounded-full bg-fudap-600 flex items-center justify-center mb-3 text-lg">👤</div>
                <h3 className="font-semibold mb-1">Personas</h3>
                <p className="text-fudap-200 text-sm leading-relaxed">Con padecimiento psíquico o en situación de vulnerabilidad psicosocial.</p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full bg-fudap-600 flex items-center justify-center mb-3 text-lg">👨‍👩‍👧</div>
                <h3 className="font-semibold mb-1">Familias</h3>
                <p className="text-fudap-200 text-sm leading-relaxed">Referentes afectivos que necesitan orientación, escucha y redes de apoyo.</p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full bg-fudap-600 flex items-center justify-center mb-3 text-lg">🏘️</div>
                <h3 className="font-semibold mb-1">Comunidad</h3>
                <p className="text-fudap-200 text-sm leading-relaxed">Organizaciones, vecinos y actores locales que construyen inclusión.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Participá */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-fudap-500 text-sm font-semibold tracking-widest uppercase mb-3">Sumate</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-fudap-900 mb-3">Participá en FUDAP</h2>
            <p className="text-fudap-600 max-w-xl mx-auto">Hay muchas formas de ser parte. Tu tiempo, tu compromiso o tu aporte hacen posible el acompañamiento cotidiano.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <article className="card-hover relative rounded-2xl overflow-hidden border border-fudap-100 shadow-soft group">
              <div className="aspect-[16/9] img-placeholder">
                <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80" alt="[Placeholder] Voluntariado — reemplazar con foto FUDAP" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-display font-semibold text-xl text-fudap-900 mb-2">Voluntariado</h3>
                <p className="text-fudap-600 text-sm mb-4 leading-relaxed">Sumá tu tiempo y habilidades en actividades, talleres y acompañamiento. Te orientamos según tu disponibilidad y perfil.</p>
                <button onClick={() => navigateTo('voluntariado')} className="btn-primary focus-ring text-white text-sm font-medium px-5 py-2.5 rounded-full">Quiero ser voluntario/a</button>
              </div>
            </article>
            <article className="card-hover relative rounded-2xl overflow-hidden border border-fudap-100 shadow-soft group">
              <div className="aspect-[16/9] img-placeholder">
                <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80" alt="[Placeholder] Donaciones — reemplazar con foto FUDAP" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-display font-semibold text-xl text-fudap-900 mb-2">Donaciones</h3>
                <p className="text-fudap-600 text-sm mb-4 leading-relaxed">Tu aporte económico sostiene programas, materiales y el trabajo del equipo. Doná de forma segura a través de nuestra plataforma.</p>
                <button onClick={() => navigateTo('donaciones')} className="btn-primary focus-ring text-white text-sm font-medium px-5 py-2.5 rounded-full">Donar ahora</button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Actualidad preview */}
      <section className="py-16 md:py-24 bg-sand-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-fudap-500 text-sm font-semibold tracking-widest uppercase mb-3">Novedades</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-fudap-900">Actualidad</h2>
            </div>
            <button onClick={() => navigateTo('actualidad')} className="text-fudap-600 font-semibold text-sm hover:text-fudap-800 inline-flex items-center gap-1">
              Ver todas
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="card-hover bg-white rounded-2xl overflow-hidden border border-fudap-100 shadow-soft">
              <div className="aspect-[16/10] img-placeholder">
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80" alt="[Placeholder noticia]" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="news-tag bg-fudap-100 text-fudap-700 px-2 py-0.5 rounded font-semibold">Noticia</span>
                  <time className="text-xs text-fudap-400">[Fecha]</time>
                </div>
                <h3 className="font-display font-semibold text-fudap-900 mb-2 leading-snug">[Título de noticia vigente — placeholder]</h3>
                <p className="text-fudap-600 text-sm line-clamp-2">Resumen breve de la novedad institucional. Completar con contenido real de FUDAP.</p>
              </div>
            </article>
            <article className="card-hover bg-white rounded-2xl overflow-hidden border border-fudap-100 shadow-soft">
              <div className="aspect-[16/10] img-placeholder">
                <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&q=80" alt="[Placeholder actividad]" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="news-tag bg-coral-400/20 text-coral-600 px-2 py-0.5 rounded font-semibold">Actividad</span>
                  <time className="text-xs text-fudap-400">[Fecha]</time>
                </div>
                <h3 className="font-display font-semibold text-fudap-900 mb-2 leading-snug">[Próxima actividad o taller — placeholder]</h3>
                <p className="text-fudap-600 text-sm line-clamp-2">Descripción de la actividad abierta a la comunidad o interna de los programas.</p>
              </div>
            </article>
            <article className="card-hover bg-white rounded-2xl overflow-hidden border border-fudap-100 shadow-soft">
              <div className="aspect-[16/10] bg-fudap-700 flex items-center justify-center">
                <div className="text-center p-6">
                  <span className="news-tag bg-white/20 text-white px-2 py-0.5 rounded font-semibold">Convocatoria</span>
                  <h3 className="font-display font-semibold text-white text-lg mt-3 leading-snug">[Convocatoria vigente]</h3>
                  <p className="text-fudap-200 text-sm mt-2">Placeholder para convocatorias abiertas de voluntariado, empleo o actividades.</p>
                </div>
              </div>
              <div className="p-5">
                <button onClick={() => navigateTo('actualidad')} className="text-fudap-600 text-sm font-semibold hover:text-fudap-800">Ver convocatoria →</button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Contacto */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-fudap-600 to-fudap-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">¿Tenés consultas o querés acercarte?</h2>
          <p className="text-fudap-100 mb-8 text-lg">Escribinos o visitanos. El equipo de FUDAP está disponible para orientarte sobre programas, voluntariado y donaciones.</p>
          <button onClick={() => navigateTo('contacto')} className="focus-ring bg-white text-fudap-800 font-semibold px-8 py-3.5 rounded-full hover:bg-sand-100 transition-colors shadow-lg">
            Ir a Contacto
          </button>
        </div>
      </section>
    </>
  );
}