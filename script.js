const frame = document.getElementById('gameFrame');
const loading = document.getElementById('loading');
const title = document.getElementById('gameTitle');
const type = document.getElementById('gameType');
const stage = document.getElementById('stage');
const webFrameForm = document.getElementById('webFrameForm');
const webFrameUrl = document.getElementById('webFrameUrl');
const webFrameMessage = document.getElementById('webFrameMessage');
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
    'mini-reaction': `<style>${miniStyles}</style><main class="mini reaction"><h1>QUICK REFLEX</h1><p id="reactionStatus">Wait for green, then click.</p><button id="reactionButton">WAIT</button></main>`
  };
  return games[key] || '';
}

const miniStyles = `*{box-sizing:border-box}body{margin:0;background:#0b0c12;color:#f4f3f1;font:16px Arial;text-align:center}.mini{min-height:100vh;padding:8vh 20px;color:#f4f3f1}.mini h1{color:#ff537f;letter-spacing:4px}.mini button{border:1px solid #ff537f;background:#191521;color:#fff;border-radius:10px;padding:16px 28px;min-height:50px;font-weight:bold;cursor:pointer;touch-action:manipulation}.mini small{display:block;color:#888;margin:20px}.memory-grid{display:grid;grid-template-columns:repeat(4,minmax(52px,70px));gap:10px;justify-content:center;margin:30px auto;max-width:320px}.memory-grid button{height:clamp(52px,16vw,70px);padding:0;font-size:25px}.memory-grid button.revealed{background:#ff537f}.dodge #arena{position:relative;margin:25px auto;width:min(90vw,420px);height:min(300px,52vh);min-height:220px;border:1px solid #363743;background:linear-gradient(#11131c,#17101b);overflow:hidden;touch-action:none}.dodge #player{position:absolute;bottom:14px;left:calc(50% - 18px);width:36px;height:36px;background:#70e4ff;border-radius:8px;box-shadow:0 0 20px #70e4ff}.enemy{position:absolute;top:-25px;width:22px;height:22px;background:#ff537f;border-radius:50%;box-shadow:0 0 15px #ff537f}.reaction #reactionButton{min-width:180px}.reaction #reactionButton.ready{background:#72df99;color:#101513}`;

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
    icons.forEach(icon => { const button = doc.createElement('button'); button.textContent = '?'; button.onclick = () => { if (locked || button.classList.contains('revealed')) return; button.textContent = icon; button.classList.add('revealed'); if (!first) { first = { button, icon }; return; } if (first.icon === icon) { first = null; if (++pairs === 4) doc.getElementById('memoryStatus').textContent = 'YOU WIN!'; } else { locked = true; setTimeout(() => { button.textContent = '?'; first.button.textContent = '?'; button.classList.remove('revealed'); first.button.classList.remove('revealed'); first = null; locked = false; }, 650); } }; grid.appendChild(button); });
  }
  if (key === 'mini-reaction') {
    const button = doc.getElementById('reactionButton'); const status = doc.getElementById('reactionStatus'); let start; let timer = setTimeout(() => { button.textContent = 'CLICK NOW'; button.classList.add('ready'); start = performance.now(); }, 1200 + Math.random() * 2200);
    button.onclick = () => { if (!start) { clearTimeout(timer); status.textContent = 'Too soon! Click to try again.'; button.textContent = 'TRY AGAIN'; return; } status.textContent = `Reaction time: ${Math.round(performance.now() - start)} ms`; button.textContent = 'PLAY AGAIN'; button.classList.remove('ready'); start = null; };
  }
  if (key === 'mini-dodge') {
    const arena = doc.getElementById('arena'); const player = doc.getElementById('player'); const score = doc.getElementById('dodgeScore'); let x = 50; let points = 0; let running = false;
    doc.getElementById('startDodge').onclick = () => { running = true; points = 0; score.textContent = '0'; arena.querySelectorAll('.enemy').forEach(e => e.remove()); };
    const movePlayer = direction => { x = Math.max(5, Math.min(95, x + direction * 8)); player.style.left = `calc(${x}% - 18px)`; };
    doc.addEventListener('keydown', event => { if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') movePlayer(-1); if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') movePlayer(1); });
    let touchX = null;
    arena.addEventListener('touchstart', event => { touchX = event.touches[0].clientX; }, { passive: true });
    arena.addEventListener('touchmove', event => { event.preventDefault(); const currentX = event.touches[0].clientX; if (touchX !== null && Math.abs(currentX - touchX) > 12) { movePlayer(currentX > touchX ? 1 : -1); touchX = currentX; } }, { passive: false });
    arena.addEventListener('touchend', () => { touchX = null; }, { passive: true });
    setInterval(() => { if (!running) return; const enemy = doc.createElement('i'); enemy.className = 'enemy'; enemy.style.left = `${Math.random() * 94}%`; arena.appendChild(enemy); let y = -25; const fall = setInterval(() => { y += 5; enemy.style.top = `${y}px`; const hit = y > 240 && Math.abs(enemy.offsetLeft - player.offsetLeft) < 38; if (hit) { running = false; doc.getElementById('startDodge').textContent = 'GAME OVER — START'; } if (y > 310 || !running) { clearInterval(fall); enemy.remove(); if (running) score.textContent = ++points; } }, 35); }, 800);
  }
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

  if (key.startsWith('mini-')) {
    startMiniGame(key);
  } else {
    // Assigning src directly avoids leaving the iframe on a blank srcdoc page.
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