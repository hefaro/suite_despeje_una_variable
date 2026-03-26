document.addEventListener('DOMContentLoaded', () => {
    // --- VARIABLES DE CONFIGURACIÓN ---
    const isMobile = window.matchMedia("(max-width: 900px)").matches;
    const ROWS = isMobile ? 8 : 3;
    const COLS = isMobile ? 3 : 8;
    const TOTAL_CARDS = ROWS * COLS;
    const JOKERS = { advance: 2, lose: 1 }; 
    const CARDS_WITH_QUESTIONS = TOTAL_CARDS - (JOKERS.advance + JOKERS.lose);
    
    // Esta variable se actualizará dinámicamente al iniciar
    let GAME_SHEET_NAME = 'despeje_ecuaciones_basico'; 

    let currentLevel = 0; 
    let cardsData = [];
    let activeCard = null;
    let boardLocked = false;
    let playerName = '';
    let startTime = null;
    let timerInterval = null;
    let activeGroupUrl = null; 
    let activeGroupName = ''; 
    let selectedDifficulty = 'basico';

    // Elementos del DOM
    const gameBoard = document.getElementById('game-board');
    const modal = document.getElementById('question-modal');
    const questionText = document.getElementById('question-text');
    const answerOptions = document.getElementById('answer-options');
    const submitBtn = document.getElementById('submit-answer');
    const saveStatusDiv = document.getElementById('save-status'); 

    const welcomeScreen = document.getElementById('welcome-screen');
    const mainGameContainer = document.getElementById('main-game-container');
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const groupSelectUI = document.getElementById('group-select-ui');
    const playerSelectUI = document.getElementById('player-select-ui');
    const difficultyUI = document.getElementById('difficulty-ui');

    // --- FUNCIÓN DE SONIDO ---
    function playSound(id) {
        const sound = document.getElementById(id);
        if (sound) {
            sound.pause();
            sound.currentTime = 0;
            sound.play().catch(e => console.warn("Interacción requerida para audio"));
        }
    }

    // --- LÓGICA DE INTERFAZ (PASO 1 A PASO 2) ---
    document.getElementById('btn-to-step-2').onclick = async () => {
        activeGroupName = groupSelectUI.value;
        if (!activeGroupName) return;
        
        document.getElementById('btn-to-step-2').innerText = "Conectando...";
        const [names, url] = await GoogleSheet.obtenerNombres(activeGroupName);
        activeGroupUrl = url;
        
        if (names && names.length > 0) {
            playerSelectUI.innerHTML = names.map(n => `<option value="${n}">${n}</option>`).join('');
            step1.classList.add('hidden');
            step2.classList.remove('hidden');
        } else {
            alert("No se pudieron cargar los nombres del grupo.");
            document.getElementById('btn-to-step-2').innerText = "Siguiente";
        }
    };

    // --- INICIO DEL JUEGO ---
    document.getElementById('btn-start-game').onclick = () => {
        playerName = playerSelectUI.value;
        selectedDifficulty = difficultyUI.value;
        
        if (!playerName || !selectedDifficulty) return;

        // AJUSTE DINÁMICO DEL NOMBRE DEL JUEGO PARA GOOGLE SHEETS
        if (selectedDifficulty === 'profesional') {
            GAME_SHEET_NAME = 'despeje_ecuaciones_experto';
        } else {
            GAME_SHEET_NAME = `despeje_ecuaciones_${selectedDifficulty}`;
        }

        // Desbloqueo de audio
        playSound('snd-card');

        // Cargar preguntas desde el banco según dificultad
        if (typeof cuestionarios !== 'undefined') {
            questionBank = cuestionarios[selectedDifficulty];
        }

        welcomeScreen.classList.add('hidden');
        mainGameContainer.classList.remove('hidden');
        document.getElementById('player-info').innerText = `👨‍🚀 ${playerName} | ⚙️ ${selectedDifficulty.toUpperCase()}`;
        
        setupGameBoard(); 
    };

    // --- LÓGICA DEL TABLERO ---
    function setupGameBoard() {
        if (timerInterval) clearInterval(timerInterval);
        startTime = new Date(); 
        startTimerUI();
        currentLevel = 0;
        boardLocked = false;
        gameBoard.innerHTML = '';

        let questions = [...questionBank].sort(() => Math.random() - 0.5).slice(0, CARDS_WITH_QUESTIONS);
        let items = [];
        
        for (let i = 0; i < JOKERS.advance; i++) items.push({ type: 'joker', joker: 'advance' });
        for (let i = 0; i < JOKERS.lose; i++) items.push({ type: 'joker', joker: 'lose' });
        questions.forEach(q => items.push({ type: 'question', data: q }));
        
        cardsData = items.sort(() => Math.random() - 0.5);

        for (let i = 0; i < TOTAL_CARDS; i++) {
            const card = document.createElement('div');
            card.className = 'card';
            card.dataset.index = i;
            card.innerHTML = `<div class="card-face card-front">?</div><div class="card-face card-back"></div>`;
            card.addEventListener('click', handleCardClick);
            gameBoard.appendChild(card);
        }
        updateLevel();
    }

    function startTimerUI() {
        const timerDisplay = document.getElementById('game-timer');
        timerInterval = setInterval(() => {
            const segundos = Math.floor((new Date() - startTime) / 1000);
            if (timerDisplay) timerDisplay.innerText = `Tiempo: ${segundos}s`;
        }, 1000);
    }
    
    function updateLevel() {
        document.querySelectorAll('.card').forEach((card, i) => {
            const level = isMobile ? Math.floor(i / COLS) : (i % COLS);
            if (level === currentLevel && !card.classList.contains('incorrect-answered')) {
                card.classList.remove('disabled');
            } else {
                card.classList.add('disabled');
            }
        });
    }

    function handleCardClick(event) {
        if (boardLocked) return;
        const card = event.currentTarget;
        if (card.classList.contains('disabled')) return;
        
        boardLocked = true;
        playSound('snd-card');
        card.classList.add('flipped');
        activeCard = card;
        
        const info = cardsData[card.dataset.index];
        const back = card.querySelector('.card-back');

        setTimeout(() => {
            if (info.type === 'question') {
                back.textContent = '🤔';
                showQuestion(info.data);
            } else if (info.joker === 'advance') {
                playSound('snd-correct'); 
                back.innerHTML = '🚀<br>¡AVANZAS!';
                back.classList.add('correct');
                setTimeout(advance, 1500);
            } else {
                playSound('snd-error'); 
                back.innerHTML = '☠️<br>¡REINICIO!';
                back.classList.add('incorrect');
                setTimeout(setupGameBoard, 2000);
            }
        }, 600);
    }

    function showQuestion(q) {
        questionText.textContent = q.question;
        answerOptions.innerHTML = '';
        
        const opcionesMezcladas = [...q.options].sort(() => Math.random() - 0.5);

        opcionesMezcladas.forEach(opt => {
            const btn = document.createElement('button');
            btn.textContent = opt;
            btn.onclick = () => {
                playSound('snd-card');
                document.querySelectorAll('#answer-options button').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
            };
            answerOptions.appendChild(btn);
        });

        submitBtn.onclick = () => {
            const sel = document.querySelector('.selected');
            if (!sel) return;
            
            modal.classList.add('modal-hidden');
            const isCorrect = sel.textContent.trim() === q.answer.trim();
            const back = activeCard.querySelector('.card-back');
            
            if (isCorrect) {
                playSound('snd-correct');
                back.innerHTML = '✅<br>¡BIEN!';
                back.classList.add('correct');
                setTimeout(advance, 1000);
            } else {
                playSound('snd-error');
                back.innerHTML = '❌<br>¡ERROR!';
                back.classList.add('incorrect');
                activeCard.classList.add('disabled', 'incorrect-answered');
                boardLocked = false;
            }
        };
        modal.classList.remove('modal-hidden');
    }

    async function advance() { 
        currentLevel++;
        const totalNiveles = isMobile ? ROWS : COLS;

        if (currentLevel >= totalNiveles) {
            clearInterval(timerInterval);
            playSound('snd-win');

            const tiempoFinal = Math.floor((new Date() - startTime) / 1000);
            
            // Cálculo de nota (0.0 a 5.0)
            const T_MIN = 60; 
            const T_MAX = 300;
            let nota = 5 - ((tiempoFinal - T_MIN) * (5 / (T_MAX - T_MIN)));
            nota = Math.max(0, Math.min(5, nota)).toFixed(1); 

            // Mostrar Certificado
            document.getElementById('cert-name').innerText = playerName;
            document.getElementById('cert-grade').innerText = nota;
            document.getElementById('cert-date').innerText = new Date().toLocaleDateString();
            document.getElementById('cert-topic').innerText = `Ecuaciones: Nivel ${selectedDifficulty}`;
            document.getElementById('certificate-container').style.display = 'flex';

            saveStatusDiv.textContent = 'Guardando...';
            
            // GUARDADO HACIA GOOGLE SHEETS
            await GoogleSheet.guardarResultado(activeGroupUrl, { 
                nombre: playerName, 
                puntaje: nota,
                tiempoJuego: tiempoFinal,
                juego: GAME_SHEET_NAME, // Enviará basico, avanzado o experto
                grupo: activeGroupName
            });

            document.getElementById('btn-download-cert').onclick = function() {
                const certElement = document.getElementById('certificate');
                html2canvas(certElement, { scale: 2 }).then(canvas => {
                    const link = document.createElement('a');
                    link.download = `Certificado_${GAME_SHEET_NAME}_${playerName.replace(/\s+/g, '_')}.jpg`;
                    link.href = canvas.toDataURL("image/jpeg", 0.9);
                    link.click();
                    setTimeout(() => location.reload(), 2000);
                });
            };
            saveStatusDiv.textContent = '¡Logro Guardado!';
        } else {
            updateLevel();
            boardLocked = false;
        }
    }
});