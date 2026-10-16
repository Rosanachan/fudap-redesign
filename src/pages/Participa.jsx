export default function Participa({ actions }) {
  const { navigateTo } = actions;
  return (
    <>
<section className="bg-fudap-50 border-b border-fudap-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-fudap-900 mb-4">Participá</h1>
          <p className="text-lg text-fudap-600 max-w-xl mx-auto">Elegí cómo querés sumarte a FUDAP.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-6">
          <button onClick={() => navigateTo('voluntariado')} className="card-hover text-left rounded-2xl border-2 border-fudap-100 p-8 hover:border-fudap-300 bg-sand-50 focus-ring">
            <div className="w-14 h-14 rounded-2xl bg-fudap-100 flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-fudap-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
            </div>
            <h2 className="font-display text-2xl font-bold text-fudap-900 mb-2">Voluntariado</h2>
            <p className="text-fudap-600 text-sm">Dedicá tiempo y habilidades a las actividades de la fundación.</p>
          </button>
          <button onClick={() => navigateTo('donaciones')} className="card-hover text-left rounded-2xl border-2 border-fudap-100 p-8 hover:border-fudap-300 bg-sand-50 focus-ring">
            <div className="w-14 h-14 rounded-2xl bg-coral-400/15 flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-coral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            </div>
            <h2 className="font-display text-2xl font-bold text-fudap-900 mb-2">Donaciones</h2>
            <p className="text-fudap-600 text-sm">Aportá económicamente para sostener los programas.</p>
          </button>
        </div>
      </section>
    </>
  );
}
