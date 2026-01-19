# 🍞 Maninpasta - Prenota il Pane

Pagina web elegante per prenotare il pane da Maninpasta con animazioni fluide e design moderno.

## 🚀 Come iniziare

### Prerequisiti
- Node.js (versione 16 o superiore)
- npm o yarn

### Installazione

1. Installa le dipendenze:
```bash
npm install
```

2. Avvia il server di sviluppo:
```bash
npm run dev
```

3. Apri il browser su `http://localhost:5173` (o il porto indicato nella console)

## 📁 Struttura del progetto

```
.
├── index.html      # Struttura HTML principale
├── styles.css      # Stili CSS con animazioni
├── script.js       # JavaScript per animazioni e interattività
├── package.json    # Configurazione npm
└── README.md       # Questo file
```

## 🎨 Caratteristiche

- ✨ Animazioni fluide e continue
- 🎯 Design responsive per mobile e desktop
- 🌈 Gradienti caldi ispirati al pane e al grano
- 📱 Bottone interattivo con effetti hover avanzati
- 🎭 Effetti parallax e particelle fluttuanti
- 🔄 Sfondo animato con icone che si muovono in loop infinito

## 🛠️ Script disponibili

- `npm run dev` - Avvia il server di sviluppo con hot-reload
- `npm run build` - Crea la build di produzione
- `npm run preview` - Anteprima della build di produzione

## 📱 Funzionalità

- **Bottone centrale**: Chiama direttamente il numero **055 653 0698**
- **Animazioni infinite**: Le icone di sfondo si muovono continuamente
- **Effetti interattivi**: Hover, click e movimento del mouse
- **Design responsive**: Ottimizzato per tutti i dispositivi

## 🎨 Colori

- Crosta di pane: `#8D5524`
- Pane: `#E0B883`
- Grano: `#F2D2A9`
- Farina: `#FFF8E7`
- Accento: `#C68642`

## 📝 Note

Il progetto usa Vite come bundler per uno sviluppo veloce e ottimizzato.

## 🌐 Deploy su Cloudflare Pages

Il progetto è configurato per essere deployato su Cloudflare Pages con il dominio **pane.laba.biz**.

### Configurazione Cloudflare Pages:

1. **Build settings:**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/` (root del progetto)

2. **Environment variables:**
   - Nessuna variabile d'ambiente richiesta

3. **Custom domain:**
   - Dominio configurato: `pane.laba.biz`
   - DNS gestito da Cloudflare

### File di configurazione Cloudflare:

- `_headers` - Headers di sicurezza per Cloudflare Pages
- `_redirects` - Redirect per SPA (Single Page Application)

### Build locale per test:

```bash
npm run build
npm run preview
```

Questo creerà la build di produzione nella cartella `dist/` e la farà girare localmente per testare prima del deploy.