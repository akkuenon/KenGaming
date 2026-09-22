const openTerminalButton = document.getElementById('openTerminalButton');

if (openTerminalButton) {
  openTerminalButton.addEventListener('click', () => {
    selectGame('csharp-terminal');
    document.querySelector('.game-picker')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

