const games = {
  'mini-clicker': ['Neon Clicker', 'Built-in mini game', 'mini-clicker'],
  'mini-memory': ['Memory Grid', 'Built-in mini game', 'mini-memory'],
  'mini-dodge': ['Neon Dodge', 'Built-in mini game', 'mini-dodge'],
  'mini-reaction': ['Quick Reflex', 'Built-in mini game', 'mini-reaction'],
  'csharp-terminal': ['C# Terminal', 'Code sandbox', 'csharp-terminal'],
  '2048': ['2048', 'Number puzzle', 'https://play2048.co/'],
  agar: ['Agar.io', 'Grow and survive', 'https://agar.io/'],
  slither: ['Slither.io', 'Snake battle', 'https://slither.io/'],
  tetris: ['Tetris', 'Stack attack', 'https://tetris.com/play-tetris'],
  chess: ['Chess', 'Classic strategy', 'https://www.chess.com/play/computer'],
  checkers: ['Checkers', 'Board classic', 'https://www.247checkers.com/'],
  minesweeper: ['Minesweeper', 'Clear the field', 'https://minesweeper.online/'],
  solitaire: ['Solitaire', 'Card classic', 'https://solitaire.com/'],
  sudoku: ['Sudoku', 'Logic puzzle', 'https://sudoku.com/'],
  pacman: ['Pac-Man', 'Maze chase', 'https://pacman.live/'],
  flappy: ['Flappy Bird', 'Tap to fly', 'https://flappybird.io/'],
  cuttherope: ['Cut the Rope', 'Feed the monster', 'https://cuttherope.net/'],
  fireboy: ['Fireboy & Watergirl', 'Team adventure', 'https://fireboywatergirlgame.com/'],
  run3: ['Run 3', 'Space runner', 'https://run3.io/'],
  action: ['Action Games', 'Arcade action', 'https://www.crazygames.com/t/action'],
  fireboy2: ['Fireboy 2', 'Temple escape', 'https://www.coolmathgames.com/0-fireboy-and-water-girl-forest-temple'],
  bubble: ['Bubble Shooter', 'Match three', 'https://www.bubbleshooter.net/'],
  mahjong: ['Mahjong', 'Tile matching', 'https://www.mahjong.com/'],
  wordle: ['Wordle', 'Guess the word', 'https://wordlegame.org/'],
  crossword: ['Crossword', 'Word challenge', 'https://www.dictionary.com/e/crossword/'],
  backgammon: ['Backgammon', 'Roll and move', 'https://www.247backgammon.org/'],
  dominoes: ['Dominoes', 'Match the tiles', 'https://www.247dominoes.com/'],
  connect4: ['Connect 4', 'Four in a row', 'https://www.247connect4.com/'],
  uno: ['UNO', 'Card party', 'https://www.crazygames.com/game/uno-online'],
  drift: ['Drift Hunters', 'Drive fast', 'https://drifthunters.io/'],
  moto: ['Moto X3M', 'Bike stunts', 'https://www.coolmathgames.com/0-moto-x3m'],
  basketball: ['Basketball', 'Street hoops', 'https://www.crazygames.com/t/basketball'],
  soccer: ['Soccer', 'Score a goal', 'https://www.crazygames.com/t/soccer'],
  goldminer: ['Gold Miner', 'Grab the gold', 'https://goldminer.online/'],
  bubblewrap: ['Bubble Wrap', 'Pop them all', 'https://www.coolmathgames.com/0-bubble-wrap'],
  littlebigsnake: ['Little Big Snake', 'Snake arena', 'https://littlebigsnake.com/'],
  holeio: ['Hole.io', 'Swallow the city', 'https://hole-io.com/'],
  paperio: ['Paper.io 2', 'Claim the map', 'https://paper-io.com/'],
  shellshockers: ['Shell Shockers', 'Egg battle', 'https://shellshock.io/'],
  krunker: ['Krunker', 'Pixel shooter', 'https://krunker.io/'],
  surviv: ['Surviv.io', 'Battle royale', 'https://surviv.io/'],
  zombsroyale: ['ZombsRoyale.io', 'Survive the swarm', 'https://zombsroyale.io/'],
  krew: ['Krew.io', 'Ship battle', 'https://krew.io/'],
  diep: ['Diep.io', 'Tank arena', 'https://diep.io/'],
  moomoo: ['MooMoo.io', 'Build and defend', 'https://moomoo.io/'],
  bonk: ['Bonk.io', 'Physics brawl', 'https://bonk.io/'],
  shellshockers2: ['Eggy Car', 'Keep it balanced', 'https://eggycar.io/'],
  slope: ['Slope', 'Roll downhill', 'https://slopegame.io/'],
  geometrydash: ['Geometry Dash', 'Jump the spikes', 'https://geometrydash.io/'],
  stickmanhook: ['Stickman Hook', 'Swing to win', 'https://stickmanhookgame.com/'],
  vex6: ['Vex 6', 'Platform challenge', 'https://vex6.io/'],
  happywheels: ['Happy Wheels', 'Obstacle chaos', 'https://totaljerkface.com/happy_wheels.tjf'],
  ducklife: ['Duck Life', 'Train your duck', 'https://ducklife.com/'],
  earntodie: ['Earn to Die', 'Drive through zombies', 'https://earntodie.io/'],
  actionturnip: ['Action Turnip', 'Arcade adventure', 'https://www.crazygames.com/game/action-turnip'],
  worldshard: ["World's Hardest Game", 'Precision challenge', 'https://www.coolmathgames.com/0-worlds-hardest-game'],
  papas: ["Papa's Pizzeria", 'Serve the guests', 'https://www.coolmathgames.com/0-papas-pizzeria'],
  fireboyice: ['Fireboy & Watergirl Ice', 'Co-op platformer', 'https://www.coolmathgames.com/0-fireboy-and-water-girl-ice-temple'],
  duckhunt: ['Duck Hunt', 'Classic shooting', 'https://www.retrogames.cz/play_001-NES.php'],
  wordsearch: ['Word Search', 'Find the words', 'https://thewordsearch.com/'],
  nonogram: ['Nonogram', 'Picture logic', 'https://www.nonograms.org/'],
  checkers2: ['Online Checkers', 'Play a classic', 'https://www.247checkers.com/'],
  chess2: ['Lichess', 'Play online chess', 'https://lichess.org/'],
  cookieclicker: ['Cookie Clicker', 'Make more cookies', 'https://orteil.dashnet.org/cookieclicker/'],
  '2048cupcakes': ['2048 Cupcakes', 'Sweet number puzzle', 'https://2048cupcakes.com/'],
  retrobowl: ['Retro Bowl', 'Pixel football', 'https://retro-bowl.com/'],
  ytmp4: ['YTMP4', 'Video converter', 'https://ytmp4.nu/']
};

function miniGameMarkup(key) {
  const games = {
    'mini-clicker': `<style>${miniStyles}</style><main class="mini clicker"><h1>NEON CLICKER</h1><p>Clicks: <b id="score">0</b></p><button id="target">CLICK ME</button><small>Click the core as many times as you can.</small></main>`,
    'mini-memory': `<style>${miniStyles}</style><main class="mini memory"><h1>MEMORY GRID</h1><p>Find the matching pairs.</p><div id="grid" class="memory-grid"></div><b id="memoryStatus"></b></main>`,
    'mini-dodge': `<style>${miniStyles}</style><main class="mini dodge"><h1>NEON DODGE</h1><p>Move with ← → or A / D. Score: <b id="dodgeScore">0</b></p><div id="arena"><div id="player"></div></div><button id="startDodge">START</button></main>`,
    'mini-reaction': `<style>${miniStyles}</style><main class="mini reaction"><h1>QUICK REFLEX</h1><p id="reactionStatus">Wait for green, then click.</p><button id="reactionButton">WAIT</button></main>`,
    'csharp-terminal': `<style>${miniStyles} .mini.terminal{display:flex;flex-direction:column;gap:12px;padding:18px;background:#0b1020;color:#d9faff;min-height:100vh}.terminal-bar{display:flex;justify-content:space-between;align-items:center;background:#141a2b;border:1px solid #3ad6ff;border-radius:10px;padding:10px 12px;font:600 12px/1.2 'Segoe UI',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8fe9ff}.terminal-screen{flex:1;display:flex;flex-direction:column;gap:8px;background:#070d18;border:1px solid #1d2a3f;border-radius:10px;padding:14px;overflow:auto;font:14px/1.5 'Consolas','SFMono-Regular',monospace}.terminal-output{display:flex;flex-direction:column;gap:6px;white-space:pre-wrap}.terminal-line{color:#d5f3ff}.terminal-prompt{color:#60f0a3}.terminal-input-wrap{display:flex;align-items:center;gap:8px;background:#0d1423;border:1px solid #2d405d;border-radius:10px;padding:8px 10px}.terminal-input-wrap span{color:#60f0a3}.terminal-input-wrap input{flex:1;border:none;background:transparent;color:#e9fff8;font:14px/1.5 'Consolas','SFMono-Regular',monospace;outline:none}.terminal-input-wrap button{background:#2dd4bf;border:none;border-radius:8px;color:#041319;padding:8px 12px;font-weight:700;cursor:pointer}.terminal-tag{color:#ffd166}.terminal-error{color:#ff8686}.terminal-success{color:#8ef0b5}.terminal-help{color:#9fe7ff}</style><main class="mini terminal"><div class="terminal-bar"><span>KenGaming</span><span>C# // Sandbox</span></div><div class="terminal-screen"><div class="terminal-output" id="terminalOutput"><div class="terminal-line"><span class="terminal-prompt">kg@dev:~$</span> dotnet --version</div><div class="terminal-line"><span class="terminal-success">8.0.100</span></div><div class="terminal-line"><span class="terminal-help">Type <span class="terminal-tag">help</span> to see commands.</span></div></div><form id="terminalForm" class="terminal-input-wrap"><span class="terminal-prompt">kg@dev:~$</span><input id="terminalInput" autocomplete="off" spellcheck="false" aria-label="Terminal command" /><button type="submit">RUN</button></form></div></main>`
  };
  return games[key] || '';
}

function setupMiniGame(key) {
  const doc = frame.contentDocument;
  if (!doc) return;
  if (key === 'mini-clicker') {
    let score = 0;
    doc.getElementById('target').onclick = () => { doc.getElementById('score').textContent = ++score; };
  }
  if (key === 'mini-memory') {
    const icons = ['◆','●','★','▲','◆','●','★','▲'].sort(() => Math.random() - .5);
    const grid = doc.getElementById('grid'); let first = null; let locked = false; let pairs = 0;
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
          button.classList.add('matched');
          first.button.classList.add('matched');
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
  if (key === 'mini-reaction') {
    const button = doc.getElementById('reactionButton');
    const status = doc.getElementById('reactionStatus');
    let start;
    let timer = setTimeout(() => {
      button.textContent = 'CLICK NOW';
      button.classList.add('ready');
      start = performance.now();
    }, 1200 + Math.random() * 2200);
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
      timer = setTimeout(() => {
        button.textContent = 'CLICK NOW';
        button.classList.add('ready');
        start = performance.now();
      }, 1200 + Math.random() * 2200);
    };
  }
  if (key === 'mini-dodge') {
    const arena = doc.getElementById('arena');
    const player = doc.getElementById('player');
    const score = doc.getElementById('dodgeScore');
    let x = 50;
    let points = 0;
    let running = false;
    doc.getElementById('startDodge').onclick = () => { running = true; points = 0; score.textContent = '0'; arena.querySelectorAll('.enemy').forEach(e => e.remove()); };
    const movePlayer = direction => { x = Math.max(5, Math.min(95, x + direction * 8)); player.style.left = `calc(${x}% - 18px)`; };
    doc.addEventListener('keydown', event => { if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') movePlayer(-1); if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') movePlayer(1); });
    let touchX = null;
    arena.addEventListener('touchstart', event => { touchX = event.touches[0].clientX; }, { passive: true });
    arena.addEventListener('touchmove', event => { event.preventDefault(); const currentX = event.touches[0].clientX; if (touchX !== null && Math.abs(currentX - touchX) > 12) { movePlayer(currentX > touchX ? 1 : -1); touchX = currentX; } }, { passive: false });
    arena.addEventListener('touchend', () => { touchX = null; }, { passive: true });
    setInterval(() => { if (!running) return; const enemy = doc.createElement('i'); enemy.className = 'enemy'; enemy.style.left = `${Math.random() * 94}%`; arena.appendChild(enemy); let y = -25; const fall = setInterval(() => { y += 5; enemy.style.top = `${y}px`; const hit = y + 24 > 270 && Math.abs(enemy.offsetLeft - player.offsetLeft) < 38; if (hit) { running = false; doc.getElementById('startDodge').textContent = 'GAME OVER'; } if (y > 310) { clearInterval(fall); enemy.remove(); if (running) { points += 1; score.textContent = String(points); } } }, 35); }, 800);
  }
  if (key === 'csharp-terminal') {
    const output = doc.getElementById('terminalOutput');
    const form = doc.getElementById('terminalForm');
    const input = doc.getElementById('terminalInput');
    const append = (message, className = 'terminal-line') => {
      const line = doc.createElement('div');
      line.className = className;
      line.textContent = message;
      output.appendChild(line);
      output.scrollTop = output.scrollHeight;
    };
    const commands = {
      help: () => {
        append('Available commands: help, ls, pwd, echo, build, run, clear');
      },
      ls: () => append('app/  bin/  obj/  README.md'),
      pwd: () => append('/workspace/KenGaming'),
      echo: args => append(args.length ? args.join(' ') : ''),
      build: () => append('dotnet build complete. 0 warnings, 0 errors.'),
      run: () => append('Starting KenGaming terminal... ready.'),
      clear: () => {
        output.innerHTML = '';
        append('Terminal cleared.');
      }
    };
    form.addEventListener('submit', event => {
      event.preventDefault();
      const raw = input.value.trim();
      if (!raw) return;
      append(`kg@dev:~$ ${raw}`);
      const [command, ...args] = raw.split(/\s+/);
      if (command === 'clear') {
        output.innerHTML = '';
        append('Terminal cleared.');
      } else if (commands[command]) {
        commands[command](args);
      } else {
        append(`Unknown command: ${command}. Try help.`, 'terminal-error');
      }
      input.value = '';
    });
    input.focus();
  }
}

function startMiniGame(key) {
  frame.removeAttribute('src');
  frame.srcdoc = miniGameMarkup(key);
  frame.addEventListener('load', () => setupMiniGame(key), { once: true });
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

  document.querySelectorAll('.game-button').forEach(button => {
    const active = button.dataset.game === key;
    button.classList.toggle('active', active);
    if (active) button.style.setProperty('--game-color', button.dataset.color || '#ff537f');
  });

  title.textContent = game[0];
  type.textContent = game[1];
  loading.innerHTML = 'LOADING GAME<span>•••</span>';
  loading.classList.remove('fallback');
  loading.style.opacity = '1';
  const request = ++loadRequest;
  clearTimeout(loadTimer);

  if (key.startsWith('mini-') || key === 'csharp-terminal') {
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

fullscreenButton.addEventListener('click', toggleFullscreen);
stageFullscreenButton.addEventListener('click', toggleFullscreen);

document.addEventListener('fullscreenchange', () => {
  const isFullscreen = document.fullscreenElement === stage;
  const label = isFullscreen ? 'Exit game fullscreen' : 'Enter game fullscreen';
  stageFullscreenButton.setAttribute('aria-label', label);
  stageFullscreenButton.setAttribute('title', label);
  stageFullscreenButton.textContent = isFullscreen ? '×' : '⛶';
});

document.addEventListener('keydown', event => {
  if (event.key.toLowerCase() === 'f' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    document.getElementById('fullscreenButton').click();
  }
});

selectGame('2048');
