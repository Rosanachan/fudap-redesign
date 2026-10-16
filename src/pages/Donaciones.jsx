export default function Donaciones({ actions }) {
  const { navigateTo, handleDonate, selectDonate, clearDonateSelection } = actions;
  return (
    <>
<section className="bg-fudap-50 border-b border-fudap-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <nav className="text-sm text-fudap-500 mb-4" aria-label="Breadcrumb">
            <button onClick={() => navigateTo('inicio')} className="hover:text-fudap-700">Inicio</button>
            <span className="mx-2">/</span>
            <span className="text-fudap-700">Participá</span>
            <span className="mx-2">/</span>
            <span className="text-fudap-800 font-medium">Donaciones</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-fudap-900 mb-4">Donaciones</h1>
          <p className="text-lg text-fudap-600 max-w-2xl">Tu aporte sostiene programas de rehabilitación, materiales, talleres y el trabajo del equipo.</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-2xl font-bold text-fudap-900 mb-4">¿En qué se usa tu donación?</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="w-8 h-8 rounded-lg bg-fudap-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-fudap-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  </span>
                  <div>
                    <p className="font-medium text-fudap-800">Programas de rehabilitación</p>
                    <p className="text-sm text-fudap-600">Recursos para el Centro y actividades terapéuticas.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-8 h-8 rounded-lg bg-fudap-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-fudap-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  </span>
                  <div>
                    <p className="font-medium text-fudap-800">Inclusión laboral y talleres</p>
                    <p className="text-sm text-fudap-600">Materiales, capacitaciones y acompañamiento.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-8 h-8 rounded-lg bg-fudap-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-fudap-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  </span>
                  <div>
                    <p className="font-medium text-fudap-800">Apoyo a familias</p>
                    <p className="text-sm text-fudap-600">Espacios grupales y orientación.</p>
                  </div>
                </li>
              </ul>
              <div className="bg-fudap-50 rounded-xl p-5 border border-fudap-100">
                <h3 className="font-semibold text-fudap-800 mb-2">Otras formas de donar</h3>
                <p className="text-sm text-fudap-600 mb-2">Transferencia bancaria / CBU: <strong>[Completar datos bancarios oficiales]</strong></p>
                <p className="text-sm text-fudap-600">Donaciones en especie: consultar por Contacto.</p>
                <p className="text-xs text-fudap-400 mt-3">FUDAP preparará la vinculación a plataforma externa de pagos (Mercado Pago, PayPal u otra).</p>
              </div>
            </div>

            {/* Donation widget mock */}
            <div className="bg-sand-50 rounded-2xl border border-fudap-100 p-6 md:p-8 shadow-card">
              <h2 className="font-display text-xl font-bold text-fudap-900 mb-1">Doná ahora</h2>
              <p className="text-sm text-fudap-500 mb-6">Prototipo de interfaz — listo para vincular pasarela de pago</p>
              
              <p className="text-sm font-medium text-fudap-700 mb-3">Monto (ARS)</p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <button type="button" onClick={(e) => selectDonate(e.currentTarget, 2000)} className="donate-option focus-ring border-2 border-fudap-200 rounded-xl py-3 text-sm font-semibold text-fudap-800 hover:border-fudap-400 transition-colors">$ 2.000</button>
                <button type="button" onClick={(e) => selectDonate(e.currentTarget, 5000)} className="donate-option selected focus-ring border-2 border-fudap-200 rounded-xl py-3 text-sm font-semibold text-fudap-800 hover:border-fudap-400 transition-colors">$ 5.000</button>
                <button type="button" onClick={(e) => selectDonate(e.currentTarget, 10000)} className="donate-option focus-ring border-2 border-fudap-200 rounded-xl py-3 text-sm font-semibold text-fudap-800 hover:border-fudap-400 transition-colors">$ 10.000</button>
              </div>
              <div className="mb-4">
                <label htmlFor="donate-custom" className="block text-sm text-fudap-600 mb-1">Otro monto</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-fudap-500 text-sm">$</span>
                  <input type="number" id="donate-custom" min="100" className="form-input focus-ring w-full pl-8 pr-4 py-2.5 rounded-xl border border-fudap-200 bg-white text-sm" placeholder="Monto personalizado" onInput={clearDonateSelection} />
                </div>
              </div>
              <div className="mb-6">
                <p className="text-sm font-medium text-fudap-700 mb-2">Frecuencia</p>
                <div className="flex gap-2">
                  <label className="flex-1 cursor-pointer">
                    <input type="radio" name="freq" value="once" checked className="sr-only peer" />
                    <span className="block text-center border-2 border-fudap-200 peer-checked:border-fudap-600 peer-checked:bg-fudap-50 rounded-xl py-2.5 text-sm font-medium text-fudap-800 transition-colors">Única vez</span>
                  </label>
                  <label className="flex-1 cursor-pointer">
                    <input type="radio" name="freq" value="monthly" className="sr-only peer" />
                    <span className="block text-center border-2 border-fudap-200 peer-checked:border-fudap-600 peer-checked:bg-fudap-50 rounded-xl py-2.5 text-sm font-medium text-fudap-800 transition-colors">Mensual</span>
                  </label>
                </div>
              </div>
              <button type="button" onClick={handleDonate} className="btn-primary focus-ring w-full text-white font-semibold py-3.5 rounded-full text-sm mb-3">
                Continuar al pago seguro
              </button>
              <p id="donate-msg" className="hidden text-sm text-center text-fudap-600 bg-fudap-50 rounded-lg py-2 mb-3">Redirección a plataforma de pago (prototipo). Aquí se vincula la URL externa.</p>
              <p className="text-[11px] text-fudap-400 text-center flex items-center justify-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                Pago seguro · [Pasarela a definir por FUDAP]
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
