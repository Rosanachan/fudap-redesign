# FUDAP — Rediseño web

Migración del prototipo monolítico a React + Vite.

## Estructura
- `src/components/`: Header, Footer y componentes reutilizables.
- `src/pages/`: una página por archivo.
- `src/data/`: contenido/datos que conviene separar de la interfaz.
- `src/styles.css`: Tailwind + estilos propios.
- `public/images/`: fotos/logos reales cuando FUDAP los entregue.

## Ejecutar
```bash
npm install
npm run dev
```

## Importante
Los textos y fotos marcados como placeholder siguen siendo provisionales. No publicar hasta validarlos con FUDAP.
La paleta actual fue adaptada a una propuesta borgoña/rosa + naranja + neutros cálidos; si FUDAP entrega manual de identidad, reemplazar los tokens en `tailwind.config.js` y `styles.css`.
