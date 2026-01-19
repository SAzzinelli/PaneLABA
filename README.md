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

## 🌐 Deploy su Railway

Il progetto è configurato per essere deployato su Railway con il dominio **pane.laba.biz**.

### Configurazione Railway:

1. **Collega il repository GitHub:**
   - Vai su Railway Dashboard
   - Clicca "New Project" → "Deploy from GitHub repo"
   - Seleziona il repository: `SAzzinelli/PaneLABA`

2. **Railway rileverà automaticamente:**
   - Build command: `npm run build` (da railway.json)
   - Start command: `npm start` (da railway.json)
   - Port: Railway assegnerà automaticamente una porta (gestita da `process.env.PORT`)

3. **Custom domain:**
   - Vai su Settings → Domains
   - Aggiungi il dominio: `pane.laba.biz`
   - Configura il DNS con i record CNAME forniti da Railway

### File di configurazione:

- `railway.json` - Configurazione Railway per build e deploy
- `server.js` - Server Express per servire i file statici
- `package.json` - Scripts e dipendenze

### Build e test locale:

```bash
# Installa le dipendenze (incluso express)
npm install

# Crea la build di produzione
npm run build

# Avvia il server locale (simula Railway)
npm start
```

Il server sarà disponibile su `http://localhost:3000` (o la porta specificata da Railway).