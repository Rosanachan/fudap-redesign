import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Inicio from './pages/Inicio.jsx';
import QuienesSomos from './pages/QuienesSomos.jsx';
import MisionVision from './pages/MisionVision.jsx';
import Equipo from './pages/Equipo.jsx';
import Proyectos from './pages/Proyectos.jsx';
import Servicios from './pages/Servicios.jsx';
import Participa from './pages/Participa.jsx';
import Voluntariado from './pages/Voluntariado.jsx';
import Donaciones from './pages/Donaciones.jsx';
import Actualidad from './pages/Actualidad.jsx';
import Contacto from './pages/Contacto.jsx';

const pageTitles = {
  inicio: 'FUDAP — Fundación para el Desarrollo de Actividades Psicosociales',
  'quienes-somos': 'Quiénes somos — FUDAP',
  'mision-vision': 'Misión y visión — FUDAP',
  equipo: 'Equipo — FUDAP', proyectos: 'Proyectos — FUDAP', servicios: 'Servicios y programas — FUDAP',
  'participa-hub': 'Participá — FUDAP', voluntariado: 'Voluntariado — FUDAP', donaciones: 'Donaciones — FUDAP',
  actualidad: 'Actualidad — FUDAP', contacto: 'Contacto — FUDAP'
};

const pageMap = {
  'inicio': Inicio,
  'quienes-somos': QuienesSomos,
  'mision-vision': MisionVision,
  'equipo': Equipo,
  'proyectos': Proyectos,
  'servicios': Servicios,
  'participa-hub': Participa,
  'voluntariado': Voluntariado,
  'donaciones': Donaciones,
  'actualidad': Actualidad,
  'contacto': Contacto
};

export default function App() {
  const [page, setPage] = useState(() => location.hash.replace('#', '') || 'inicio');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubs, setOpenSubs] = useState({});

  const navigateTo = (pageId) => {
    if (!pageMap[pageId]) pageId = 'inicio';
    setPage(pageId);
    history.replaceState(null, '', `#${pageId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = pageTitles[pageId] || 'FUDAP';
  };

  const closeMobile = () => setMobileOpen(false);
  const toggleSub = (id) => setOpenSubs(prev => ({ ...prev, [id]: !prev[id] }));

  // Compatibilidad con el prototipo original: estos handlers se mantienen aquí para que las páginas sean independientes del DOM global.
  const handleVolForm = (e) => { e.preventDefault(); document.getElementById('vol-success')?.classList.remove('hidden'); e.currentTarget.reset(); };
  const handleContactForm = (e) => { e.preventDefault(); document.getElementById('ct-success')?.classList.remove('hidden'); e.currentTarget.reset(); };
  const selectDonate = (btn, amount) => { document.querySelectorAll('.donate-option').forEach(b => b.classList.remove('selected')); btn.classList.add('selected'); const input=document.getElementById('donate-custom'); if(input) input.value=''; };
  const clearDonateSelection = () => document.querySelectorAll('.donate-option').forEach(b => b.classList.remove('selected'));
  const handleDonate = () => document.getElementById('donate-msg')?.classList.remove('hidden');
  const filterNews = (cat) => {
    document.querySelectorAll('.news-filter').forEach(btn => {
      const active = btn.getAttribute('data-filter') === cat;
      btn.classList.toggle('bg-fudap-700', active); btn.classList.toggle('text-white', active);
      btn.classList.toggle('bg-fudap-50', !active); btn.classList.toggle('text-fudap-700', !active);
    });
    document.querySelectorAll('.news-item').forEach(item => { item.style.display = cat === 'all' || item.getAttribute('data-cat') === cat ? '' : 'none'; });
  };

  useEffect(() => {
    const onHash = () => setPage(pageMap[location.hash.replace('#','')] ? location.hash.replace('#','') : 'inicio');
    window.addEventListener('popstate', onHash); window.addEventListener('hashchange', onHash);
    document.title = pageTitles[page] || 'FUDAP';
    return () => { window.removeEventListener('popstate', onHash); window.removeEventListener('hashchange', onHash); };
  }, [page]);

  const actions = { navigateTo, closeMobile, toggleSub, filterNews, handleDonate, selectDonate, handleVolForm, handleContactForm, clearDonateSelection };
  const Page = pageMap[page] || Inicio;

  const allActions = {
  ...actions,
  mobileOpen,
  setMobileOpen,
  openSubs
};

return (
  <div className={mobileOpen ? 'mobile-open' : ''}>
    <Header actions={allActions} />

    <main id="main-content">
      <Page actions={allActions} />
    </main>

    <Footer actions={actions} />
  </div>
);
}