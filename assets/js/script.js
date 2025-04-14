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


// Only activate arrow key navigation on index.html or projects.html
document.addEventListener('keydown', (e) => {
  const activeElement = document.activeElement;
  const isTyping = activeElement && activeElement.tagName === 'INPUT';

  if (
    (window.location.pathname.includes('index.html') ||
    window.location.pathname.includes('projects.html') ||
    window.location.pathname === '/') &&
    !isTyping
  ) {
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
  }
});

const symbols = ['---*---*-*--', '--*--*-*---', '-*--*--*--*'];
let index = 0;

const waveGuy = [
`  o /
 /|
  / \\`,

`  o\\
 /|
  / \\`
];

const waveHeart = [
  `<3`,
  
  ` `,
  
  `<3`
  ];

const waveDiamond = [
  `<*>`,
  
  `^.v `,
  
  `<*>`
  ];  

setInterval(() => {
  const asciiTop = document.querySelector('.ascii-top');
  const asciiBottom = document.querySelector('.ascii-bottom');
  const asciiGuy = document.querySelector('.ascii-guy');
  const asciiHeart = document.querySelector('.ascii-heart');
  const asciiDiamond = document.querySelector('.ascii-diamond');

  if (asciiTop) {
    asciiTop.innerText = symbols[index % symbols.length];
  }
  if (asciiBottom) {
    asciiBottom.innerText = symbols[(index + 1) % symbols.length];
  }
  if (asciiGuy) {
    asciiGuy.innerText = waveGuy[index % waveGuy.length];
  }
  if (asciiHeart) {
    asciiHeart.innerText = waveHeart[index % waveHeart.length];
  }
  if (asciiDiamond) {
    asciiDiamond.innerText = waveDiamond[index % waveDiamond.length];
  }

  index++;
}, 200);


// terminal input stuff (works everywhere)
const input = document.getElementById('terminalInput');

// Auto-focus terminal input ONLY on index.html or about_me.html
if (input && (window.location.pathname.includes('index.html') || window.location.pathname.includes('about_me.html') || window.location.pathname === '/')) {
  input.focus();
}
if (input) {
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const command = input.value.trim();
      
      if (command === 'cd') {
        // check if current page is ascii_room_about.html
        if (window.location.pathname.includes('ascii_room_about')) {
          window.location.href = 'ascii_room.html';
        } else {
          window.location.href = 'index.html';
        }
      } else {
        alert('command not found: ' + command);
      }
      
      input.value = '';
    }
  });
}


// email easter egg click stuff
const emailWords = document.querySelectorAll('.email-me');

emailWords.forEach(word => {
  word.style.cursor = 'pointer';
  word.addEventListener('click', () => {
    window.location.href = 'mailto:me@trevorflick.com';
  });
});
