export default function Header({ actions }) {
  const { navigateTo, closeMobile, toggleSub, mobileOpen, setMobileOpen, openSubs } = actions;

  return (
    <header id="site-header" className="sticky top-0 z-50 bg-sand-50/90 backdrop-blur-md border-b border-fudap-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button onClick={() => navigateTo('inicio')} className="flex items-center gap-3 focus-ring rounded-lg group" aria-label="FUDAP - Ir al inicio">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-fudap-500 to-fudap-700 flex items-center justify-center shadow-soft">
              <span className="text-white font-display font-bold text-lg leading-none">F</span>
            </div>
            <div className="text-left">
              <span className="block font-display font-semibold text-fudap-800 text-lg leading-tight">FUDAP</span>
              <span className="hidden sm:block text-[10px] text-fudap-500 leading-tight tracking-wide uppercase">Actividades Psicosociales</span>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            <button onClick={() => navigateTo('inicio')} className="nav-link focus-ring px-3 py-2 text-sm text-fudap-700 rounded-lg">Inicio</button>
            <div className="dropdown relative">
              <button className="nav-link focus-ring px-3 py-2 text-sm text-fudap-700 rounded-lg flex items-center gap-1" aria-haspopup="true">
                FUDAP <span aria-hidden="true">⌄</span>
              </button>
              <div className="dropdown-menu absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-elevated border border-fudap-100 py-2 z-50">
                {[
                  ['quienes-somos', 'Quiénes somos'],
                  ['mision-vision', 'Misión y visión'],
                  ['equipo', 'Equipo'],
                  ['proyectos', 'Proyectos'],
                  ['servicios', 'Servicios']
                ].map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => navigateTo(id)}
                    className="w-full text-left px-4 py-2.5 text-sm text-fudap-700 hover:bg-fudap-50"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
              <button 
                onClick={() => navigateTo('voluntariado')}
                className="nav-link focus-ring px-3 py-2 text-sm text-fudap-700 rounded-lg">Voluntariado</button>
            <button onClick={() => navigateTo('actualidad')} className="nav-link focus-ring px-3 py-2 text-sm text-fudap-700 rounded-lg">Blog</button>
            <button onClick={() => navigateTo('contacto')} className="nav-link focus-ring px-3 py-2 text-sm text-fudap-700 rounded-lg">Contacto</button>
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => navigateTo('donaciones')} className="hidden sm:inline-flex btn-primary focus-ring text-white text-sm font-medium px-4 py-2 rounded-full">Donar</button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden focus-ring p-2 rounded-lg text-fudap-700 hover:bg-fudap-50"
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        <div className={`mobile-menu lg:hidden border-t border-fudap-100 ${mobileOpen ? 'open' : ''}`}>
          <nav className="py-4 space-y-1" aria-label="Navegación móvil">
            <button onClick={() => { navigateTo('inicio'); closeMobile(); }} className="w-full text-left px-3 py-3 text-fudap-800 font-medium rounded-lg hover:bg-fudap-50">Inicio</button>
            <div>
              <button onClick={() => toggleSub('sub-fudap')} className="w-full flex justify-between items-center px-3 py-3 text-fudap-800 font-medium rounded-lg hover:bg-fudap-50">FUDAP <span>⌄</span></button>
              <div className={`${openSubs['sub-fudap'] ? '' : 'hidden'} pl-4 space-y-1 pb-2`}>
                {[
                  ['quienes-somos', 'Quiénes somos'],
                  ['mision-vision', 'Misión y visión'],
                  ['equipo', 'Equipo'],
                  ['proyectos', 'Proyectos'],
                  ['servicios', 'Servicios']
                ].map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => {
                      navigateTo(id);
                      closeMobile();
                    }}
                    className="w-full text-left px-3 py-2 text-sm text-fudap-600 rounded-lg hover:bg-fudap-50"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={() => { navigateTo('servicios'); closeMobile(); }} className="w-full text-left px-3 py-3 text-fudap-800 font-medium rounded-lg hover:bg-fudap-50">Servicios y programas</button>
              <button
                onClick={() => {
                  navigateTo('voluntariado');
                  closeMobile();
                }}
                className="w-full text-left px-3 py-3 text-fudap-800 font-medium rounded-lg hover:bg-fudap-50"
              >
                Voluntariado
              </button>
            <button onClick={() => { navigateTo('actualidad'); closeMobile(); }} className="w-full text-left px-3 py-3 text-fudap-800 font-medium rounded-lg hover:bg-fudap-50">Actualidad</button>
            <button onClick={() => { navigateTo('contacto'); closeMobile(); }} className="w-full text-left px-3 py-3 text-fudap-800 font-medium rounded-lg hover:bg-fudap-50">Contacto</button>
            <div className="pt-3 px-3"><button onClick={() => { navigateTo('donaciones'); closeMobile(); }} className="w-full btn-primary text-white font-medium py-3 rounded-full">Donar ahora</button></div>
          </nav>
        </div>
      </div>
    </header>
  );
}
