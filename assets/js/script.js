const links = Array.from(document.querySelectorAll('a'));
let selectedIndex = 0;

function updateSelection() {
  links.forEach((link, idx) => {
    if (idx === selectedIndex) {
      link.style.backgroundColor = 'black'
      link.style.color = 'white'
    } else {
      link.style.backgroundColor = 'transparent'
      link.style.color = 'black'
    }
  });
}

updateSelection();

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    selectedIndex = (selectedIndex - 1 + links.length) % links.length;
    updateSelection();
  }
  if (e.key === 'ArrowDown') {
    selectedIndex = (selectedIndex + 1) % links.length;
    updateSelection();
  }
  if (e.key === 'Enter') {
    window.location.href = links[selectedIndex].href;
  }
});

const symbols = ['---*---*-*--', '--*--*-*---', '-*--*--*--*'];
let index = 0;

setInterval(() => {
  document.querySelector('.ascii-top').innerText    = symbols[index % symbols.length];
  document.querySelector('.ascii-bottom').innerText = symbols[(index + 1) % symbols.length];
  index++;
}, 200);