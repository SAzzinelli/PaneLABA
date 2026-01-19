// SVG Icons definitions - icone più belle e dettagliate per il pane
const icons = [
    // Baguette dettagliata
    `<svg class="icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M20 50 Q30 45 40 50 Q50 55 60 50 Q70 45 80 50" stroke="#8D5524" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M20 50 Q30 55 40 50 Q50 45 60 50 Q70 55 80 50" stroke="#E0B883" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="30" cy="50" r="3" fill="#8D5524"/><circle cx="50" cy="50" r="3" fill="#8D5524"/><circle cx="70" cy="50" r="3" fill="#8D5524"/></svg>`,
    // Pagnotta rotonda
    `<svg class="icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="50" rx="35" ry="30" fill="#E0B883" stroke="#8D5524" stroke-width="3"/><ellipse cx="50" cy="45" rx="30" ry="25" fill="#F2D2A9"/><path d="M30 50 Q35 45 40 50 Q45 55 50 50 Q55 45 60 50 Q65 55 70 50" stroke="#8D5524" stroke-width="2" fill="none"/><circle cx="40" cy="50" r="2" fill="#C68642"/><circle cx="50" cy="50" r="2" fill="#C68642"/><circle cx="60" cy="50" r="2" fill="#C68642"/></svg>`,
    // Grano stilizzato
    `<svg class="icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 20 L50 80" stroke="#8D5524" stroke-width="4" stroke-linecap="round"/><path d="M50 30 Q45 35 50 40 Q55 35 50 30" fill="#F2D2A9" stroke="#C68642" stroke-width="2"/><path d="M50 45 Q45 50 50 55 Q55 50 50 45" fill="#F2D2A9" stroke="#C68642" stroke-width="2"/><path d="M50 60 Q45 65 50 70 Q55 65 50 60" fill="#F2D2A9" stroke="#C68642" stroke-width="2"/><circle cx="45" cy="35" r="3" fill="#C68642"/><circle cx="55" cy="35" r="3" fill="#C68642"/><circle cx="45" cy="50" r="3" fill="#C68642"/><circle cx="55" cy="50" r="3" fill="#C68642"/></svg>`,
    // Croissant elegante
    `<svg class="icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M30 50 Q50 30 70 50 Q50 70 30 50" fill="#E0B883" stroke="#8D5524" stroke-width="2"/><path d="M35 50 Q50 35 65 50" stroke="#F2D2A9" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M40 50 Q50 40 60 50" stroke="#C68642" stroke-width="2" fill="none"/></svg>`,
    // Pane a fette
    `<svg class="icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="60" height="40" rx="5" fill="#E0B883" stroke="#8D5524" stroke-width="2"/><rect x="25" y="35" width="50" height="30" rx="3" fill="#F2D2A9"/><path d="M35 40 L35 65" stroke="#C68642" stroke-width="2" stroke-linecap="round"/><path d="M50 40 L50 65" stroke="#C68642" stroke-width="2" stroke-linecap="round"/><path d="M65 40 L65 65" stroke="#C68642" stroke-width="2" stroke-linecap="round"/></svg>`,
    // Spiga di grano
    `<svg class="icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 15 L50 85" stroke="#8D5524" stroke-width="3" stroke-linecap="round"/><path d="M50 20 L45 30 L50 35 L55 30 Z" fill="#F2D2A9" stroke="#C68642" stroke-width="1"/><path d="M50 35 L45 45 L50 50 L55 45 Z" fill="#F2D2A9" stroke="#C68642" stroke-width="1"/><path d="M50 50 L45 60 L50 65 L55 60 Z" fill="#F2D2A9" stroke="#C68642" stroke-width="1"/><path d="M50 65 L45 75 L50 80 L55 75 Z" fill="#F2D2A9" stroke="#C68642" stroke-width="1"/></svg>`
];

// Funzione di inizializzazione principale
function initializeAll() {
    console.log('Initializing all features...');
    try {
        initBackground();
        initParticles();
        initButtonInteractions();
        initParallax();
        initDecorativeElements();
        initGlowEffects();
        initClock();
        console.log('All initializations complete');
    } catch (error) {
        console.error('Error during initialization:', error);
    }
}

// Inizializzazione quando il DOM è pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAll);
} else {
    // DOM già caricato, esegui subito
    initializeAll();
}

// Crea lo sfondo animato con icone
function initBackground() {
    const bgContainer = document.getElementById('bgContainer');
    if (!bgContainer) {
        console.error('bgContainer not found');
        return;
    }

    // Pulisci eventuali contenuti precedenti
    bgContainer.innerHTML = '';

    const grid = document.createElement('div');
    grid.className = 'icon-grid';

    // Crea un numero fisso di icone per garantire la visibilità
    const totalIcons = 120;

    console.log(`Creating ${totalIcons} icons`);

    // Crea le icone con animazioni randomizzate
    for (let i = 0; i < totalIcons; i++) {
        try {
            const randomIcon = icons[Math.floor(Math.random() * icons.length)];
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = randomIcon;
            
            const iconSvg = tempDiv.querySelector('svg');
            if (iconSvg) {
                // Assicurati che la classe icon sia applicata
                iconSvg.classList.add('icon');
                
                // Rotazione random
                const rotation = Math.random() * 360;
                iconSvg.setAttribute('style', `transform: rotate(${rotation}deg); opacity: ${0.5 + Math.random() * 0.3};`);
                
                // Delay animazione per effetto wave
                const delay = (i % 20) * 0.1;
                iconSvg.style.animationDelay = `${delay}s`;
                
                grid.appendChild(iconSvg);
            }
        } catch (e) {
            console.error('Error creating icon:', e);
        }
    }

    bgContainer.appendChild(grid);
    console.log('Background icons created:', grid.children.length);
}

// Crea particelle fluttuanti
function initParticles() {
    const particleCount = 30; // Aumentato per più effetto
    const body = document.body;

    console.log('Initializing particles');

    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
            createParticle();
        }, i * 300);
    }

    // Continua a creare particelle periodicamente
    setInterval(() => {
        if (document.querySelectorAll('.particle').length < particleCount) {
            createParticle();
        }
    }, 2000);
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    const startX = Math.random() * window.innerWidth;
    particle.style.left = `${startX}px`;
    
    const duration = Math.random() * 10 + 10;
    particle.style.animationDuration = `${duration}s`;
    
    particle.style.animationDelay = `${Math.random() * 2}s`;
    
    document.body.appendChild(particle);
    
    // Rimuovi dopo l'animazione
    setTimeout(() => {
        particle.remove();
    }, (duration + 2) * 1000);
}

// Interazioni avanzate per il bottone
function initButtonInteractions() {
    const button = document.querySelector('.cta-button');
    if (!button) return;

    // Effetto ripple al click
    button.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        button.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });

    // Aggiungi stile per ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Effetto hover leggero e discreto
    button.addEventListener('mouseenter', () => {
        button.style.transition = 'all 0.3s ease';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transition = 'all 0.3s ease';
    });
}

// Effetto parallax leggero
function initParallax() {
    const content = document.querySelector('.content');
    if (!content) return;

    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        
        content.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// Gestione resize per ottimizzare le performance
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Ricrea lo sfondo se necessario
        const bgContainer = document.getElementById('bgContainer');
        if (bgContainer) {
            const oldGrid = bgContainer.querySelector('.icon-grid');
            if (oldGrid) {
                oldGrid.remove();
                initBackground();
            }
        }
    }, 250);
});

// Aggiungi classe per animazioni quando la pagina è caricata
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Aggiungi elementi decorativi
function initDecorativeElements() {
    const content = document.querySelector('.content');
    if (!content) return;

    const breadEmojis = ['🍞', '🥖', '🥐', '🥨'];
    
    for (let i = 0; i < 4; i++) {
        const icon = document.createElement('div');
        icon.className = 'bread-icon';
        icon.textContent = breadEmojis[i];
        icon.style.fontSize = `${2 + Math.random() * 2}rem`;
        content.appendChild(icon);
    }
}

// Aggiungi effetti glow
function initGlowEffects() {
    const content = document.querySelector('.content');
    if (!content) return;

    for (let i = 0; i < 2; i++) {
        const glow = document.createElement('div');
        glow.className = 'glow';
        content.appendChild(glow);
    }
}

// Migliora le particelle con più varietà
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 6 + 3;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    const startX = Math.random() * window.innerWidth;
    particle.style.left = `${startX}px`;
    
    const duration = Math.random() * 12 + 12;
    particle.style.animationDuration = `${duration}s`;
    
    particle.style.animationDelay = `${Math.random() * 2}s`;
    
    // Aggiungi movimento orizzontale casuale
    const horizontalMovement = (Math.random() - 0.5) * 200;
    particle.style.setProperty('--h-move', `${horizontalMovement}px`);
    
    document.body.appendChild(particle);
    
    // Rimuovi dopo l'animazione
    setTimeout(() => {
        particle.remove();
    }, (duration + 2) * 1000);
}

// Inizializza l'orologio
function initClock() {
    const timeElement = document.getElementById('currentTime');
    const warningElement = document.getElementById('lateWarning');
    const tooLateElement = document.getElementById('tooLateMessage');
    
    if (!timeElement) {
        console.error('currentTime element not found');
        return;
    }
    
    console.log('Initializing clock');
    
    function updateClock() {
        try {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            
            timeElement.textContent = `${hours}:${minutes}:${seconds}`;
            
            const currentHour = now.getHours();
            const currentMinutes = now.getMinutes();
            const currentTimeInMinutes = currentHour * 60 + currentMinutes;
            const deadlineTimeInMinutes = 12 * 60 + 30; // 12:30
            
            // Nascondi entrambi i messaggi di default
            if (warningElement) {
                warningElement.style.display = 'none';
            }
            if (tooLateElement) {
                tooLateElement.style.display = 'none';
            }
            
            // Controlla se sono passate le 12:30
            if (currentTimeInMinutes >= deadlineTimeInMinutes) {
                // Mostra messaggio "troppo tardi"
                if (tooLateElement) {
                    tooLateElement.style.display = 'block';
                }
            } 
            // Altrimenti controlla se sono passate le 11:00
            else if (currentHour >= 11) {
                // Mostra avviso di ritardo
                if (warningElement) {
                    warningElement.style.display = 'block';
                }
            }
        } catch (e) {
            console.error('Error updating clock:', e);
        }
    }
    
    // Aggiorna immediatamente
    updateClock();
    
    // Aggiorna ogni secondo
    setInterval(updateClock, 1000);
    
    console.log('Clock initialized');
}