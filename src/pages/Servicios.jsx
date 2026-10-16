export default function Servicios({ actions }) {
  const { navigateTo } = actions;
  return (
    <>
<section className="bg-fudap-50 border-b border-fudap-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <nav className="text-sm text-fudap-500 mb-4" aria-label="Breadcrumb">
            <button onClick={() => navigateTo('inicio')} className="hover:text-fudap-700">Inicio</button>
            <span className="mx-2">/</span>
            <span className="text-fudap-800 font-medium">Servicios y programas</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-fudap-900 mb-4">Servicios y programas</h1>
          <p className="text-lg text-fudap-600 max-w-2xl">Dispositivos de atención, rehabilitación, inclusión laboral y apoyo a familias.</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
          {/* Servicio 1 */}
          <article id="serv-rehab" className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card img-placeholder order-2 lg:order-1">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80" alt="[Placeholder] Centro de Rehabilitación Psicosocial" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block text-xs font-semibold tracking-wide uppercase text-fudap-500 bg-fudap-100 px-3 py-1 rounded-full mb-4">Programa central</span>
              <h2 className="font-display text-3xl font-bold text-fudap-900 mb-4">Centro de Rehabilitación Psicosocial</h2>
              <p className="text-fudap-700 leading-relaxed mb-4">
                Espacio de atención interdisciplinaria orientado a la rehabilitación de personas con padecimiento psíquico. Se proponen actividades terapéuticas, talleres, acompañamiento individual y grupal, y articulación con la red de salud.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-fudap-600">
                  <svg className="w-5 h-5 text-fudap-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Abordaje interdisciplinario
                </li>
                <li className="flex items-start gap-2 text-sm text-fudap-600">
                  <svg className="w-5 h-5 text-fudap-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Talleres y actividades de rehabilitación
                </li>
                <li className="flex items-start gap-2 text-sm text-fudap-600">
                  <svg className="w-5 h-5 text-fudap-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Seguimiento y orientación a familias
                </li>
              </ul>
              <p className="text-xs text-fudap-400 mb-4">[Completar con modalidades de admisión, horarios y requisitos oficiales]</p>
              <button onClick={() => navigateTo('contacto')} className="btn-primary focus-ring text-white text-sm font-medium px-5 py-2.5 rounded-full">Consultar por admisión</button>
            </div>
          </article>

          {/* Servicio 2 */}
          <article id="serv-solidaria" className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-wide uppercase text-coral-600 bg-coral-400/15 px-3 py-1 rounded-full mb-4">Acción comunitaria</span>
              <h2 className="font-display text-3xl font-bold text-fudap-900 mb-4">Programa de Acción Solidaria</h2>
              <p className="text-fudap-700 leading-relaxed mb-4">
                Iniciativas de apoyo solidario y participación comunitaria. Promueve el encuentro, la reciprocidad y el fortalecimiento de redes sociales para personas y familias en situación de vulnerabilidad.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-fudap-600">
                  <svg className="w-5 h-5 text-fudap-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Acciones solidarias y de apoyo mutuo
                </li>
                <li className="flex items-start gap-2 text-sm text-fudap-600">
                  <svg className="w-5 h-5 text-fudap-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Vinculación con organizaciones locales
                </li>
                <li className="flex items-start gap-2 text-sm text-fudap-600">
                  <svg className="w-5 h-5 text-fudap-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Espacios de participación social
                </li>
              </ul>
              <button onClick={() => navigateTo('voluntariado')} className="btn-secondary focus-ring bg-white border-2 border-fudap-200 text-fudap-700 text-sm font-medium px-5 py-2.5 rounded-full">Sumarme como voluntario/a</button>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card img-placeholder">
              <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=700&q=80" alt="[Placeholder] Acción solidaria" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </article>

          {/* Servicio 3 */}
          <article id="serv-laboral" className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card img-placeholder order-2 lg:order-1">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80" alt="[Placeholder] Inserción laboral" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block text-xs font-semibold tracking-wide uppercase text-fudap-500 bg-fudap-100 px-3 py-1 rounded-full mb-4">Inclusión</span>
              <h2 className="font-display text-3xl font-bold text-fudap-900 mb-4">Servicio de Inserción Laboral</h2>
              <p className="text-fudap-700 leading-relaxed mb-4">
                Acompañamos procesos de inclusión socio-laboral: orientación vocacional, preparación para el empleo, talleres de habilidades y vinculación con empresas y organismos.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-fudap-600">
                  <svg className="w-5 h-5 text-fudap-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Orientación y capacitación
                </li>
                <li className="flex items-start gap-2 text-sm text-fudap-600">
                  <svg className="w-5 h-5 text-fudap-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Apoyo en la búsqueda laboral
                </li>
                <li className="flex items-start gap-2 text-sm text-fudap-600">
                  <svg className="w-5 h-5 text-fudap-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Articulación con el mundo del trabajo
                </li>
              </ul>
              <button onClick={() => navigateTo('contacto')} className="btn-primary focus-ring text-white text-sm font-medium px-5 py-2.5 rounded-full">Más información</button>
            </div>
          </article>

          {/* Servicio 4 */}
          <article id="serv-familias" className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-wide uppercase text-fudap-500 bg-fudap-100 px-3 py-1 rounded-full mb-4">Familias</span>
              <h2 className="font-display text-3xl font-bold text-fudap-900 mb-4">Grupos para familiares</h2>
              <p className="text-fudap-700 leading-relaxed mb-4">
                Espacios grupales de escucha, orientación y contención para familiares y referentes afectivos. Compartir experiencias, recibir información y fortalecer recursos de cuidado.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-fudap-600">
                  <svg className="w-5 h-5 text-fudap-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Grupos de reflexión y apoyo
                </li>
                <li className="flex items-start gap-2 text-sm text-fudap-600">
                  <svg className="w-5 h-5 text-fudap-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Orientación sobre salud mental y cuidados
                </li>
                <li className="flex items-start gap-2 text-sm text-fudap-600">
                  <svg className="w-5 h-5 text-fudap-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Encuentros periódicos
                </li>
              </ul>
              <p className="text-xs text-fudap-400 mb-4">[Indicar días, modalidad presencial/virtual y cómo inscribirse]</p>
              <button onClick={() => navigateTo('contacto')} className="btn-primary focus-ring text-white text-sm font-medium px-5 py-2.5 rounded-full">Consultar horarios</button>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card img-placeholder">
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80" alt="[Placeholder] Grupos para familiares" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </article>
        </div>
      </section>

      <section className="py-12 bg-fudap-800 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-white mb-3">¿No sabés qué programa es para vos?</h2>
          <p className="text-fudap-200 mb-6">Escribinos y te orientamos según la situación de la persona o la familia.</p>
          <button onClick={() => navigateTo('contacto')} className="focus-ring bg-white text-fudap-800 font-semibold px-6 py-3 rounded-full hover:bg-sand-100 transition-colors">Contactar al equipo</button>
        </div>
      </section>
    </>
  );
}
