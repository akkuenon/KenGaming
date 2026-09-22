const frame = document.getElementById('gameFrame');
const loading = document.getElementById('loading');
const title = document.getElementById('gameTitle');
const type = document.getElementById('gameType');
const stage = document.getElementById('stage');
const webFrameForm = document.getElementById('webFrameForm');
const webFrameUrl = document.getElementById('webFrameUrl');
const webFrameMessage = document.getElementById('webFrameMessage');
const openTerminalButton = document.getElementById('openTerminalButton');
let loadTimer;
let loadRequest = 0;

const games = {
  'mini-clicker': ['Neon Clicker', 'Built-in mini game', 'mini-clicker'],
  'mini-memory': ['Memory Grid', 'Built-in mini game', 'mini-memory'],
  'mini-dodge': ['Neon Dodge', 'Built-in mini game', 'mini-dodge'],
  'mini-reaction': ['Quick Reflex', 'Built-in mini game', 'mini-reaction'],
  '2048': ['2048', 'Number puzzle', 'https://play2048.co/'],
  agar: ['Agar.io', 'Grow and survive', 'https://agar.io/'],
  slither: ['Slither.io', 'Snake battle', 'https://slither.io/'],
  tetris: ['Tetris', 'Stack attack', 'https://tetris.com/play-tetris'],
  chess: ['Chess', 'Classic strategy', 'https://www.chess.com/play/computer']
};

function startMiniGame(key) {
  frame.removeAttribute('src');
  frame.srcdoc = miniGameMarkup(key);
  frame.addEventListener('load', () => setupMiniGame(key), { once: true });
}

function miniGameMarkup(key) {
  const snippets = {
    'mini-clicker': `<style>*{box-sizing:border-box}body{margin:0;background:#0b0c12;color:#f4f3f1;font:16px Arial;text-align:center}.mini{min-height:100vh;padding:8vh 20px}.mini h1{color:#ff537f;letter-spacing:4px}.mini button{border:1px solid #ff537f;background:#191521;color:#fff;padding:18px 30px;border-radius:12px;font-size:1.1rem;font-weight:700;cursor:pointer}</style><main class="mini"><h1>NEON CLICKER</h1><p>Clicks: <b id="score">0</b></p><button id="target">CLICK ME</button></main>`,
    'mini-memory': `<style>*{box-sizing:border-box}body{margin:0;background:#0b0c12;color:#f4f3f1;font:16px Arial;text-align:center}.mini{min-height:100vh;padding:8vh 20px}.memory-grid{display:grid;grid-template-columns:repeat(4,52px);gap:10px;justify-content:center;margin:20px auto}.memory-grid button{width:52px;height:52px;border-radius:10px;border:1px solid #ff537f;background:#181827;color:#fff;font-size:1.5rem;cursor:pointer}.memory-grid button.revealed{background:#ff537f}</style><main class="mini"><h1>MEMORY GRID</h1><div id="grid" class="memory-grid"></div><p id="memoryStatus"></p></main>`,
    'mini-dodge': `<style>*{box-sizing:border-box}body{margin:0;background:#0b0c12;color:#f4f3f1;font:16px Arial;text-align:center}.mini{min-height:100vh;padding:8vh 20px}.arena{position:relative;width:min(420px,88vw);height:300px;margin:20px auto;border:1px solid #ff537f;border-radius:12px;overflow:hidden;background:linear-gradient(#101827,#0b0c12)}#player{position:absolute;bottom:16px;left:50%;transform:translateX(-50%);width:36px;height:36px;border-radius:10px;background:#22d3ee}.enemy{position:absolute;top:-25px;width:24px;height:24px;border-radius:50%;background:#ff537f}</style><main class="mini"><h1>NEON DODGE</h1><p>Move with A / D. Score: <b id="dodgeScore">0</b></p><div id="arena" class="arena"><div id="player"></div></div><button id="startDodge">START</button></main>`,
    'mini-reaction': `<style>*{box-sizing:border-box}body{margin:0;background:#0b0c12;color:#f4f3f1;font:16px Arial;text-align:center}.mini{min-height:100vh;padding:8vh 20px}.mini button{padding:18px 30px;border-radius:12px;border:1px solid #ff537f;background:#191521;color:#fff;font-size:1rem;cursor:pointer}.ready{background:#34d399;color:#00130d}</style><main class="mini"><h1>QUICK REFLEX</h1><p id="reactionStatus">Wait for green, then click.</p><button id="reactionButton">WAIT</button></main>`
  };

  return snippets[key] || '';
}

function setupMiniGame(key) {
  const doc = frame.contentDocument;
  if (!doc) return;

  if (key === 'mini-clicker') {
    let score = 0;
    doc.getElementById('target').onclick = () => {
      doc.getElementById('score').textContent = ++score;
    };
  }

  if (key === 'mini-memory') {
    const icons = ['◆', '●', '★', '▲', '◆', '●', '★', '▲'].sort(() => Math.random() - 0.5);
    const grid = doc.getElementById('grid');
    let first = null;
    let locked = false;
    let pairs = 0;

    icons.forEach(icon => {
      const button = doc.createElement('button');
      button.textContent = '?';
      button.onclick = () => {
        if (locked || button.classList.contains('revealed')) return;
        button.textContent = icon;
        button.classList.add('revealed');

        if (!first) {
          first = { button, icon };
          return;
        }

        if (first.icon === icon) {
          first.button.classList.add('matched');
          button.classList.add('matched');
          first = null;
          pairs += 1;
          if (pairs === 4) doc.getElementById('memoryStatus').textContent = 'YOU WIN!';
          return;
        }

        locked = true;
        setTimeout(() => {
          button.textContent = '?';
          button.classList.remove('revealed');
          first.button.textContent = '?';
          first.button.classList.remove('revealed');
          first = null;
          locked = false;
        }, 650);
      };

      grid.appendChild(button);
    });
  }

  if (key === 'mini-dodge') {
    const arena = doc.getElementById('arena');
    const player = doc.getElementById('player');
    const score = doc.getElementById('dodgeScore');
    let x = 50;
    let points = 0;
    let running = false;

    const movePlayer = direction => {
      x = Math.max(5, Math.min(95, x + direction * 8));
      player.style.left = `calc(${x}% - 18px)`;
    };

    doc.getElementById('startDodge').onclick = () => {
      running = true;
      points = 0;
      score.textContent = '0';
      arena.querySelectorAll('.enemy').forEach(e => e.remove());
    };

    doc.addEventListener('keydown', event => {
      const key = event.key.toLowerCase();
      if (key === 'arrowleft' || key === 'a') movePlayer(-1);
      if (key === 'arrowright' || key === 'd') movePlayer(1);
    });

    setInterval(() => {
      if (!running) return;
      const enemy = doc.createElement('i');
      enemy.className = 'enemy';
      enemy.style.left = `${Math.random() * 90}%`;
      arena.appendChild(enemy);

      let y = -25;
      const tick = setInterval(() => {
        y += 5;
        enemy.style.top = `${y}px`;

        const playerLeft = player.offsetLeft;
        const enemyLeft = enemy.offsetLeft;
        const hit = y + 24 > 300 && Math.abs(playerLeft - enemyLeft) < 32;

        if (hit) {
          running = false;
          doc.getElementById('startDodge').textContent = 'GAME OVER';
          clearInterval(tick);
          return;
        }

        if (y > 300) {
          clearInterval(tick);
          enemy.remove();
          if (running) {
            points += 1;
            score.textContent = String(points);
          }
        }
      }, 35);
    }, 800);
  }

  if (key === 'mini-reaction') {
    const button = doc.getElementById('reactionButton');
    const status = doc.getElementById('reactionStatus');
    let start = null;
    let timer = null;

    const reset = () => {
      button.textContent = 'CLICK NOW';
      button.classList.add('ready');
      start = performance.now();
    };

    timer = setTimeout(reset, 1200 + Math.random() * 2200);

    button.onclick = () => {
      if (!start) {
        clearTimeout(timer);
        status.textContent = 'Too soon! Click to try again.';
        button.textContent = 'TRY AGAIN';
        return;
      }

      status.textContent = `Reaction time: ${Math.round(performance.now() - start)} ms`;
      button.textContent = 'PLAY AGAIN';
      button.classList.remove('ready');
      start = null;
      timer = setTimeout(reset, 1200 + Math.random() * 2200);
    };
  }
}

function showExternalFallback(game) {
  loading.innerHTML = `GAME BLOCKED IN FRAME<small><a href="${game[2]}" target="_blank" rel="noopener">OPEN ${game[0].toUpperCase()} IN A NEW TAB ↗</a></small>`;
  loading.classList.add('fallback');
  loading.style.opacity = '1';
}

function loadWebsite(rawUrl) {
  let url;
  try {
    const value = rawUrl.trim();
    url = new URL(/^https?:\/\//i.test(value) ? value : `https://${value}`);
    if (!['http:', 'https:'].includes(url.protocol)) throw new Error('Unsupported protocol');
  } catch (error) {
    webFrameMessage.textContent = 'Enter a valid website address.';
    webFrameUrl.focus();
    return;
  }

  title.textContent = 'Web Frame';
  type.textContent = url.hostname;
  webFrameUrl.value = url.href;
  webFrameMessage.textContent = 'Loading website…';
  document.querySelectorAll('.game-button').forEach(button => button.classList.remove('active'));
  loading.innerHTML = 'LOADING WEBSITE<span>•••</span>';
  loading.classList.remove('fallback');
  loading.style.opacity = '1';

  const request = ++loadRequest;
  clearTimeout(loadTimer);
  frame.removeAttribute('srcdoc');
  frame.src = url.href;

  loadTimer = setTimeout(() => {
    if (request === loadRequest && frame.src === url.href) {
      webFrameMessage.textContent = 'This site may block embedded frames.';
      showExternalFallback(['Web Frame', 'Website', url.href]);
    }
  }, 7000);
}

function selectGame(key) {
  const game = games[key];
  if (!game) return;

  if (key === 'csharp-terminal') {
    window.location.href = 'code-terminal/terminal.html';
    return;
  }

  document.querySelectorAll('.game-button').forEach(button => {
    const active = button.dataset.game === key;
    button.classList.toggle('active', active);
  });

  title.textContent = game[0];
  type.textContent = game[1];
  loading.innerHTML = 'LOADING GAME<span>•••</span>';
  loading.classList.remove('fallback');
  loading.style.opacity = '1';

  const request = ++loadRequest;
  clearTimeout(loadTimer);

  if (key.startsWith('mini-')) {
    startMiniGame(key);
  } else {
    frame.removeAttribute('srcdoc');
    frame.src = game[2];
    loadTimer = setTimeout(() => {
      if (request === loadRequest && frame.src === game[2]) showExternalFallback(game);
    }, 7000);
  }
}

frame.addEventListener('load', () => {
  clearTimeout(loadTimer);
  loading.classList.remove('fallback');
  setTimeout(() => { loading.style.opacity = '0'; }, 350);
});

frame.addEventListener('error', () => {
  loading.innerHTML = 'THIS GAME COULD NOT BE LOADED<span>TRY ANOTHER GAME</span>';
});

document.querySelectorAll('.game-button').forEach(button => {
  button.addEventListener('click', () => {
    webFrameMessage.textContent = '';
    selectGame(button.dataset.game);
  });
});

webFrameForm.addEventListener('submit', event => {
  event.preventDefault();
  loadWebsite(webFrameUrl.value);
});

openTerminalButton?.addEventListener('click', () => {
  window.location.href = 'code-terminal/terminal.html';
});

const fullscreenButton = document.getElementById('fullscreenButton');
const stageFullscreenButton = document.getElementById('stageFullscreenButton');

async function toggleFullscreen() {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else if (stage.requestFullscreen) {
      await stage.requestFullscreen();
    }
  } catch (error) {
    console.warn('Fullscreen is unavailable in this browser.', error);
  }
}

fullscreenButton?.addEventListener('click', toggleFullscreen);
stageFullscreenButton?.addEventListener('click', toggleFullscreen);

document.addEventListener('fullscreenchange', () => {
  const isFullscreen = document.fullscreenElement === stage;
  const label = isFullscreen ? 'Exit game fullscreen' : 'Enter game fullscreen';
  stageFullscreenButton?.setAttribute('aria-label', label);
  stageFullscreenButton?.setAttribute('title', label);
  stageFullscreenButton.textContent = isFullscreen ? '×' : '⛶';
});

document.addEventListener('keydown', event => {
  if (event.key.toLowerCase() === 'f' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    document.getElementById('fullscreenButton')?.click();
  }
});

selectGame('csharp-terminal');
