export default function Footer({ actions }) {
  const { navigateTo } = actions;
  return (
<footer className="bg-fudap-950 text-fudap-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-fudap-600 flex items-center justify-center">
              <span className="text-white font-display font-bold">F</span>
            </div>
            <span className="font-display font-semibold text-white text-lg">FUDAP</span>
          </div>
          <p className="text-sm text-fudap-300 leading-relaxed">Fundación para el Desarrollo de Actividades Psicosociales. Rehabilitación, inclusión y acompañamiento comunitario.</p>
        </div>
        <div>
          <h3 className="font-semibold text-white text-sm mb-4">Navegación</h3>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => navigateTo('inicio')} className="hover:text-white transition-colors">Inicio</button></li>
            <li><button onClick={() => navigateTo('quienes-somos')} className="hover:text-white transition-colors">Quiénes somos</button></li>
            <li><button onClick={() => navigateTo('servicios')} className="hover:text-white transition-colors">Servicios</button></li>
            <li><button onClick={() => navigateTo('actualidad')} className="hover:text-white transition-colors">Actualidad</button></li>
            <li><button onClick={() => navigateTo('contacto')} className="hover:text-white transition-colors">Contacto</button></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white text-sm mb-4">Participá</h3>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => navigateTo('voluntariado')} className="hover:text-white transition-colors">Voluntariado</button></li>
            <li><button onClick={() => navigateTo('donaciones')} className="hover:text-white transition-colors">Donaciones</button></li>
          </ul>
          <h3 className="font-semibold text-white text-sm mb-3 mt-6">Programas</h3>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => navigateTo('servicios')} className="hover:text-white transition-colors text-left">Rehabilitación psicosocial</button></li>
            <li><button onClick={() => navigateTo('servicios')} className="hover:text-white transition-colors text-left">Inserción laboral</button></li>
            <li><button onClick={() => navigateTo('servicios')} className="hover:text-white transition-colors text-left">Grupos para familiares</button></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white text-sm mb-4">Contacto</h3>
          <ul className="space-y-2 text-sm text-fudap-300">
            <li>[Dirección completa]</li>
            <li>[Teléfono]</li>
            <li>[Email institucional]</li>
          </ul>
          <button onClick={() => navigateTo('donaciones')} className="mt-6 inline-flex btn-primary text-white text-sm font-medium px-5 py-2.5 rounded-full">Donar</button>
        </div>
      </div>
      <div className="border-t border-fudap-800 pt-8 flex flex-col sm:flex-row justify-between gap-4 items-center">
        <p className="text-xs text-fudap-400">© <span id="year"></span> FUDAP — Fundación para el Desarrollo de Actividades Psicosociales. Todos los derechos reservados.</p>
        <p className="text-xs text-fudap-500">Prototipo de rediseño UX/UI · Alta fidelidad navegable</p>
      </div>
    </div>
  </footer>
  );
}
