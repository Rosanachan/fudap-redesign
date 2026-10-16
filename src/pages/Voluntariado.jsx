export default function Voluntariado({ actions }) {
  const { navigateTo, handleVolForm } = actions;
  return (
    <>
<section className="bg-fudap-50 border-b border-fudap-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <nav className="text-sm text-fudap-500 mb-4" aria-label="Breadcrumb">
            <button onClick={() => navigateTo('inicio')} className="hover:text-fudap-700">Inicio</button>
            <span className="mx-2">/</span>
            <span className="text-fudap-700">Participá</span>
            <span className="mx-2">/</span>
            <span className="text-fudap-800 font-medium">Voluntariado</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-fudap-900 mb-4">Voluntariado</h1>
          <p className="text-lg text-fudap-600 max-w-2xl">Sumá tu tiempo y compromiso. El voluntariado es una forma concreta de sostener el acompañamiento cotidiano.</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl font-bold text-fudap-900 mb-4">¿Cómo funciona?</h2>
              <ol className="space-y-6 mb-10">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-fudap-600 text-white flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <h3 className="font-semibold text-fudap-900">Completá el formulario</h3>
                    <p className="text-sm text-fudap-600 mt-1">Contanos sobre vos, tu disponibilidad y áreas de interés.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-fudap-600 text-white flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <h3 className="font-semibold text-fudap-900">Entrevista de orientación</h3>
                    <p className="text-sm text-fudap-600 mt-1">El equipo te contactará para conocer tu perfil y acordar tareas posibles.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-fudap-600 text-white flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <h3 className="font-semibold text-fudap-900">Incorporación y acompañamiento</h3>
                    <p className="text-sm text-fudap-600 mt-1">Te integramos a las actividades con inducción y referente de seguimiento.</p>
                  </div>
                </li>
              </ol>

              <h2 className="font-display text-xl font-bold text-fudap-900 mb-3">Áreas frecuentes de voluntariado</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-fudap-50 border border-fudap-100 text-fudap-700 text-sm px-3 py-1.5 rounded-full">Acompañamiento en talleres</span>
                <span className="bg-fudap-50 border border-fudap-100 text-fudap-700 text-sm px-3 py-1.5 rounded-full">Apoyo administrativo</span>
                <span className="bg-fudap-50 border border-fudap-100 text-fudap-700 text-sm px-3 py-1.5 rounded-full">Comunicación y redes</span>
                <span className="bg-fudap-50 border border-fudap-100 text-fudap-700 text-sm px-3 py-1.5 rounded-full">Actividades recreativas</span>
                <span className="bg-fudap-50 border border-fudap-100 text-fudap-700 text-sm px-3 py-1.5 rounded-full">Eventos solidarios</span>
                <span className="bg-fudap-50 border border-fudap-100 text-fudap-700 text-sm px-3 py-1.5 rounded-full">[Otras áreas]</span>
              </div>
              <p className="text-xs text-fudap-400">[Ajustar áreas y requisitos según política real de voluntariado de FUDAP]</p>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-sand-50 rounded-2xl border border-fudap-100 p-6 md:p-8 shadow-soft sticky top-24">
                <h2 className="font-display text-xl font-bold text-fudap-900 mb-1">Postulate</h2>
                <p className="text-sm text-fudap-500 mb-6">Formulario de interés en voluntariado</p>
                <form id="form-voluntariado" className="space-y-4" onSubmit={handleVolForm}>
                  <div>
                    <label htmlFor="vol-nombre" className="block text-sm font-medium text-fudap-700 mb-1">Nombre y apellido *</label>
                    <input type="text" id="vol-nombre" required className="form-input focus-ring w-full px-4 py-2.5 rounded-xl border border-fudap-200 bg-white text-sm" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label htmlFor="vol-email" className="block text-sm font-medium text-fudap-700 mb-1">Email *</label>
                    <input type="email" id="vol-email" required className="form-input focus-ring w-full px-4 py-2.5 rounded-xl border border-fudap-200 bg-white text-sm" placeholder="correo@ejemplo.com" />
                  </div>
                  <div>
                    <label htmlFor="vol-tel" className="block text-sm font-medium text-fudap-700 mb-1">Teléfono</label>
                    <input type="tel" id="vol-tel" className="form-input focus-ring w-full px-4 py-2.5 rounded-xl border border-fudap-200 bg-white text-sm" placeholder="+54 ..." />
                  </div>
                  <div>
                    <label htmlFor="vol-area" className="block text-sm font-medium text-fudap-700 mb-1">Área de interés</label>
                    <select id="vol-area" className="form-input focus-ring w-full px-4 py-2.5 rounded-xl border border-fudap-200 bg-white text-sm">
                      <option value="">Seleccionar...</option>
                      <option>Talleres y acompañamiento</option>
                      <option>Administración</option>
                      <option>Comunicación</option>
                      <option>Eventos</option>
                      <option>Otra</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="vol-msg" className="block text-sm font-medium text-fudap-700 mb-1">Contanos brevemente</label>
                    <textarea id="vol-msg" rows="3" className="form-input focus-ring w-full px-4 py-2.5 rounded-xl border border-fudap-200 bg-white text-sm resize-none" placeholder="Disponibilidad, experiencia, motivación..."></textarea>
                  </div>
                  <button type="submit" className="btn-primary focus-ring w-full text-white font-medium py-3 rounded-full text-sm">Enviar postulación</button>
                  <p id="vol-success" className="hidden text-sm text-fudap-600 text-center bg-fudap-50 rounded-lg py-2">¡Gracias! Te contactaremos a la brevedad. (Prototipo — sin envío real)</p>
                  <p className="text-[11px] text-fudap-400 text-center">Al enviar aceptás ser contactado/a por FUDAP. [Vincular a política de privacidad]</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
);
}
