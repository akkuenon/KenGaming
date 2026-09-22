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
    'csharp-terminal': `<style>
      ${miniStyles}
      .mini.terminal {
        display:flex; flex-direction:column; gap:12px; min-height:100vh; padding:18px; background:#030712; color:#dff9ff; font-family:Consolas, 'SFMono-Regular', monospace;
      }
      .terminal-shell {
        display:flex; flex-direction:column; background:#0b1120; border:1px solid #1f2f46; border-radius:12px; box-shadow:0 0 24px rgba(34,211,238,.18); overflow:hidden;
      }
      .terminal-header {
        display:flex; align-items:center; justify-content:space-between; background:#101a2d; border-bottom:1px solid #1a2d43; padding:10px 14px; font-size:11px; letter-spacing:.18em; color:#7dd3fc; text-transform:uppercase;
      }
      .window-controls { display:flex; gap:8px; }
      .window-controls span { display:inline-block; width:12px; height:12px; border-radius:50%; }
      .window-controls span:nth-child(1){ background:#ff5f57; } .window-controls span:nth-child(2){ background:#febc2e; } .window-controls span:nth-child(3){ background:#28c840; }
      .terminal-body { display:flex; flex-direction:column; height:calc(100vh - 150px); min-height:420px; background:#020812; }
      .terminal-output { flex:1; padding:18px 16px 12px; overflow:auto; white-space:pre-wrap; word-break:break-word; }
      .terminal-line { color:#e2f5ff; line-height:1.5; }
      .terminal-prompt { color:#6ee7b7; }
      .terminal-command { color:#c4b5fd; }
      .terminal-success { color:#86efac; }
      .terminal-warning { color:#fbbf24; }
      .terminal-error { color:#fca5a5; }
      .terminal-input-row { display:flex; align-items:center; gap:10px; padding:12px 14px 16px; border-top:1px solid #19263d; background:#0a1220; }
      .terminal-input-row .prompt { color:#67e8f9; }
      .terminal-input-row input {
        flex:1; border:none; background:transparent; color:#eff6ff; font-size:15px; font-family:Consolas, 'SFMono-Regular', monospace; outline:none;
      }
      .terminal-input-row button {
        background:#0ea5e9; color:white; border:none; border-radius:8px; padding:8px 12px; font-family:inherit; font-weight:700; cursor:pointer;
      }
      .terminal-help { color:#93c5fd; }
    </style>
    <main class="mini terminal">
      <div class="terminal-shell">
        <div class="terminal-header">
          <div class="window-controls"><span></span><span></span><span></span></div>
          <span>KenGaming // C# Shell</span>
        </div>
        <div class="terminal-body">
          <div class="terminal-output" id="terminalOutput"></div>
          <form class="terminal-input-row" id="terminalForm">
            <span class="prompt">kg@dev:~$</span>
            <input id="terminalInput" autocomplete="off" spellcheck="false" aria-label="Terminal command" />
            <button type="submit">RUN</button>
          </form>
        </div>
      </div>
    </main>
    `,
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

    const fs = {
      '/workspace/KenGaming': {
        'README.md': 'KenGaming terminal sandbox\nType "help" to inspect the available commands.',
        'src': {
          'Program.cs': 'using System;\nConsole.WriteLine("Hello from KenGaming!");',
          'Game.cs': 'public class Game { public static void Run() => Console.WriteLine("Arcade online"); }'
        },
        'bin': {},
        'obj': {},
        'notes.txt': 'Built with C# and a retro arcade shell.'
      }
    };

    const state = {
      cwd: '/workspace/KenGaming',
      history: [],
      historyIndex: -1
    };

    function normalizePath(rawPath) {
      const value = rawPath && rawPath.trim() ? rawPath.trim() : '.';
      if (value === '.') return state.cwd;
      if (value === '~') return '/workspace/KenGaming';
      if (value.startsWith('/')) return value;
      return `${state.cwd.replace(/\/$/, '')}/${value}`;
    }

    function ensureDirectory(path) {
      const segments = path.split('/').filter(Boolean);
      let current = '/';
      segments.forEach(segment => {
        current = `${current.replace(/\/$/, '')}/${segment}`;
        if (!fs[current]) fs[current] = {};
      });
      return current;
    }

    function resolvePath(pathValue) {
      const resolved = normalizePath(pathValue);
      const parts = resolved.split('/').filter(Boolean);
      let current = '/';
      for (const part of parts) {
        current = `${current.replace(/\/$/, '')}/${part}`;
        if (!fs[current]) return null;
      }
      return current;
    }

    function append(msg, className = 'terminal-line') {
      const line = doc.createElement('div');
      line.className = className;
      line.textContent = msg;
      output.appendChild(line);
      output.scrollTop = output.scrollHeight;
    }

    function promptLine() {
      const name = 'kg@dev';
      append(`${name}:${state.cwd}$`, 'terminal-prompt');
    }

    function ls(pathValue = state.cwd) {
      const target = resolvePath(pathValue) || state.cwd;
      const entries = Object.keys(fs[target] || {});
      if (!entries.length) {
        return '';
      }
      return entries.join('   ');
    }

    function cat(pathValue) {
      const target = resolvePath(pathValue);
      if (!target) return 'cat: file not found';
      const pathParts = target.split('/').filter(Boolean);
      const name = pathParts[pathParts.length - 1];
      const parent = target.split('/').slice(0, -1).join('/') || '/';
      const parentMap = fs[parent] || {};
      if (Object.prototype.hasOwnProperty.call(parentMap, name)) {
        return parentMap[name];
      }
      return `cat: ${pathValue}: No such file`;
    }

    function runCommand(raw) {
      const trimmed = raw.trim();
      if (!trimmed) return;
      append(`${trimmed}`, 'terminal-command');
      const [command, ...args] = trimmed.split(/\s+/);

      switch (command.toLowerCase()) {
        case 'help':
          append('Available commands: help, ls, cd, pwd, cat, echo, whoami, date, clear, exit, dotnet, uname, repo');
          break;
        case 'ls':
          append(ls(args[0] || state.cwd) || '');
          break;
        case 'pwd':
          append(state.cwd);
          break;
        case 'cd': {
          const next = normalizePath(args[0] || '/workspace/KenGaming');
          const resolved = resolvePath(next);
          if (!resolved || !fs[resolved] || typeof fs[resolved] !== 'object') {
            append(`cd: ${args[0] || '~'}: No such file or directory`, 'terminal-error');
          } else {
            state.cwd = resolved;
          }
          break;
        }
        case 'cat':
          if (!args[0]) {
            append('cat: missing file operand', 'terminal-error');
          } else {
            append(cat(args[0]));
          }
          break;
        case 'echo':
          append(args.join(' ') || '');
          break;
        case 'whoami':
          append('ken');
          break;
        case 'date':
          append(new Date().toString());
          break;
        case 'clear':
          output.innerHTML = '';
          break;
        case 'exit':
          append('Session closed.');
          input.value = '';
          input.disabled = true;
          form.querySelector('button').disabled = true;
          break;
        case 'dotnet':
          append('dotnet 8.0.100', 'terminal-success');
          break;
        case 'uname':
          append('Linux dev-box 6.6.0-x86_64', 'terminal-success');
          break;
        case 'repo':
          append('KenGaming :: online arcade and terminal sandbox', 'terminal-success');
          break;
        default:
          append(`Command not found: ${command}. Try 'help'.`, 'terminal-error');
      }
      if (command.toLowerCase() !== 'clear') {
        state.history.push(trimmed);
      }
      input.value = '';
      input.focus();
    }

    append('Welcome to the KenGaming C# shell.', 'terminal-success');
    append('Type "help" to see commands.', 'terminal-warning');
    append('');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const raw = input.value.trim();
      if (!raw) return;
      runCommand(raw);
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
