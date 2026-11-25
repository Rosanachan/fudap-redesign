
export default function Header({ actions }) {
  const {
    navigateTo,
    closeMobile,
    toggleSub,
    mobileOpen,
    setMobileOpen,
    openSubs,
  } = actions;

  const fudapLinks = [
    ['quienes-somos', 'Quiénes somos'],
    ['mision-vision', 'Misión y visión'],
    ['equipo', 'Equipo'],
    ['proyectos', 'Proyectos'],
    ['servicios', 'Servicios'],
  ];

  const goTo = (pageId) => {
    navigateTo(pageId);
    closeMobile();
  };

  return (
    <header id="site-header" className="fudap-header">
      <div className="fudap-header-container">
        <div className="fudap-header-inner">
          {/* LOGO */}
          <button
            onClick={() => goTo('inicio')}
            className="fudap-brand"
            aria-label="FUDAP - Ir al inicio"
          >
            <img
  src="/logotipo.png"
  alt=""
  className="fudap-brand-logo"
/>

            <span className="fudap-brand-copy">
              <span className="fudap-brand-name">FUDAP</span>
              <span className="fudap-brand-subtitle">
                Actividades Psicosociales
              </span>
            </span>
          </button>

          {/* NAVEGACIÓN DE ESCRITORIO */}
          <nav
            className="fudap-desktop-nav"
            aria-label="Navegación principal"
          >
            <button
              onClick={() => goTo('inicio')}
              className="fudap-nav-link"
            >
              Inicio
            </button>

            <div className="fudap-dropdown">
              <button
                className="fudap-nav-link fudap-dropdown-trigger"
                aria-haspopup="true"
              >
                FUDAP
                <span className="fudap-chevron" aria-hidden="true">
                  ⌄
                </span>
              </button>

              <div className="fudap-dropdown-menu">
                {fudapLinks.map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => goTo(id)}
                    className="fudap-dropdown-link"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => goTo('voluntariado')}
              className="fudap-nav-link"
            >
              Voluntariado
            </button>

            <button
              onClick={() => goTo('actualidad')}
              className="fudap-nav-link"
            >
              Blog
            </button>

            <button
              onClick={() => goTo('contacto')}
              className="fudap-nav-link"
            >
              Contacto
            </button>
          </nav>

          {/* ACCIONES */}
          <div className="fudap-header-actions">
            <button
              onClick={() => goTo('donaciones')}
              className="fudap-donate-button fudap-desktop-donate"
            >
              Donar
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="fudap-menu-toggle"
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileOpen}
              aria-controls="fudap-mobile-menu"
            >
              <span aria-hidden="true">
                {mobileOpen ? '✕' : '☰'}
              </span>
            </button>
          </div>
        </div>

        {/* NAVEGACIÓN MÓVIL */}
        <div
          id="fudap-mobile-menu"
          className={`fudap-mobile-menu ${mobileOpen ? 'is-open' : ''}`}
          aria-hidden={!mobileOpen}
        >
          <nav aria-label="Navegación móvil">
            <button
              onClick={() => goTo('inicio')}
              className="fudap-mobile-link"
              tabIndex={mobileOpen ? 0 : -1}
            >
              Inicio
            </button>

            <div className="fudap-mobile-group">
              <button
                onClick={() => toggleSub('sub-fudap')}
                className="fudap-mobile-link fudap-mobile-sub-trigger"
                aria-expanded={Boolean(openSubs['sub-fudap'])}
                tabIndex={mobileOpen ? 0 : -1}
              >
                <span>FUDAP</span>
                <span className="fudap-chevron" aria-hidden="true">
                  {openSubs['sub-fudap'] ? '⌃' : '⌄'}
                </span>
              </button>

              <div
                className={`fudap-mobile-submenu ${
                  openSubs['sub-fudap'] ? 'is-open' : ''
                }`}
              >
                {fudapLinks.map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => goTo(id)}
                    className="fudap-mobile-sublink"
                    tabIndex={
                      mobileOpen && openSubs['sub-fudap'] ? 0 : -1
                    }
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => goTo('voluntariado')}
              className="fudap-mobile-link"
              tabIndex={mobileOpen ? 0 : -1}
            >
              Voluntariado
            </button>

            <button
              onClick={() => goTo('actualidad')}
              className="fudap-mobile-link"
              tabIndex={mobileOpen ? 0 : -1}
            >
              Blog
            </button>

            <button
              onClick={() => goTo('contacto')}
              className="fudap-mobile-link"
              tabIndex={mobileOpen ? 0 : -1}
            >
              Contacto
            </button>

            <div className="fudap-mobile-donate">
              <button
                onClick={() => goTo('donaciones')}
                className="fudap-donate-button fudap-donate-full"
                tabIndex={mobileOpen ? 0 : -1}
              >
                Donar ahora
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
