export default function Contacto({ actions }) {
  const { navigateTo, handleContactForm } = actions;
  return (
    <div>
<section className="bg-fudap-50 border-b border-fudap-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <nav className="text-sm text-fudap-500 mb-4" aria-label="Breadcrumb">
            <button onClick={() => navigateTo('inicio')} className="hover:text-fudap-700">Inicio</button>
            <span className="mx-2">/</span>
            <span className="text-fudap-800 font-medium">Contacto</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-fudap-900 mb-4">Contacto</h1>
          <p className="text-lg text-fudap-600 max-w-2xl">Escribinos, llamanos o acercate. Estamos para orientarte.</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-xl font-bold text-fudap-900 mb-4">Datos de contacto</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="w-10 h-10 rounded-xl bg-fudap-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-fudap-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </span>
                    <div>
                      <p className="font-medium text-fudap-800 text-sm">Dirección</p>
                      <p className="text-fudap-600 text-sm">[Calle, número, localidad, provincia]</p>
                      <p className="text-xs text-fudap-400 mt-0.5">Placeholder — completar con sede real</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-10 h-10 rounded-xl bg-fudap-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-fudap-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </span>
                    <div>
                      <p className="font-medium text-fudap-800 text-sm">Teléfono</p>
                      <a href="tel:+540000000000" className="text-fudap-600 text-sm hover:text-fudap-800">[Código de área + número]</a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-10 h-10 rounded-xl bg-fudap-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-fudap-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </span>
                    <div>
                      <p className="font-medium text-fudap-800 text-sm">Email</p>
                      <a href="mailto:info@fudap.org.ar" className="text-fudap-600 text-sm hover:text-fudap-800">[email@fudap.org.ar]</a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-10 h-10 rounded-xl bg-fudap-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-fudap-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </span>
                    <div>
                      <p className="font-medium text-fudap-800 text-sm">Horario de atención</p>
                      <p className="text-fudap-600 text-sm">[Lunes a viernes, horario]</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-fudap-800 mb-3 text-sm">Redes sociales</h3>
                <div className="flex gap-3">
                  <a href="#" className="focus-ring w-10 h-10 rounded-full bg-fudap-100 flex items-center justify-center text-fudap-600 hover:bg-fudap-200 transition-colors" aria-label="Facebook">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                  </a>
                  <a href="#" className="focus-ring w-10 h-10 rounded-full bg-fudap-100 flex items-center justify-center text-fudap-600 hover:bg-fudap-200 transition-colors" aria-label="Instagram">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                </div>
                <p className="text-xs text-fudap-400 mt-2">[Vincular perfiles oficiales]</p>
              </div>
              {/* Map placeholder */}
              <div className="aspect-video rounded-2xl bg-fudap-100 border border-fudap-200 flex items-center justify-center">
                <div className="text-center p-4">
                  <svg className="w-8 h-8 text-fudap-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
                  <p className="text-sm text-fudap-500">Mapa — integrar Google Maps / OpenStreetMap</p>
                  <p className="text-xs text-fudap-400">con ubicación de la sede</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-sand-50 rounded-2xl border border-fudap-100 p-6 md:p-8 shadow-soft">
                <h2 className="font-display text-xl font-bold text-fudap-900 mb-1">Escribinos</h2>
                <p className="text-sm text-fudap-500 mb-6">Respondemos a la brevedad en días hábiles.</p>
                <form id="form-contacto" className="space-y-4" onSubmit={handleContactForm}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ct-nombre" className="block text-sm font-medium text-fudap-700 mb-1">Nombre *</label>
                      <input type="text" id="ct-nombre" required className="form-input focus-ring w-full px-4 py-2.5 rounded-xl border border-fudap-200 bg-white text-sm" />
                    </div>
                    <div>
                      <label htmlFor="ct-email" className="block text-sm font-medium text-fudap-700 mb-1">Email *</label>
                      <input type="email" id="ct-email" required className="form-input focus-ring w-full px-4 py-2.5 rounded-xl border border-fudap-200 bg-white text-sm" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="ct-tel" className="block text-sm font-medium text-fudap-700 mb-1">Teléfono</label>
                    <input type="tel" id="ct-tel" className="form-input focus-ring w-full px-4 py-2.5 rounded-xl border border-fudap-200 bg-white text-sm" />
                  </div>
                  <div>
                    <label htmlFor="ct-asunto" className="block text-sm font-medium text-fudap-700 mb-1">Asunto *</label>
                    <select id="ct-asunto" required className="form-input focus-ring w-full px-4 py-2.5 rounded-xl border border-fudap-200 bg-white text-sm">
                      <option value="">Seleccionar...</option>
                      <option>Consulta sobre programas / admisión</option>
                      <option>Voluntariado</option>
                      <option>Donaciones</option>
                      <option>Prensa / institucional</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="ct-msg" className="block text-sm font-medium text-fudap-700 mb-1">Mensaje *</label>
                    <textarea id="ct-msg" required rows="5" className="form-input focus-ring w-full px-4 py-2.5 rounded-xl border border-fudap-200 bg-white text-sm resize-none" placeholder="¿En qué podemos ayudarte?"></textarea>
                  </div>
                  <button type="submit" className="btn-primary focus-ring w-full sm:w-auto text-white font-medium px-8 py-3 rounded-full text-sm">Enviar mensaje</button>
                  <p id="ct-success" className="hidden text-sm text-fudap-600 bg-fudap-50 rounded-lg py-3 px-4">Mensaje registrado (prototipo). En producción se enviará al correo institucional de FUDAP.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
