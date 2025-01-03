let tab = document.getElementById('tab');
let tab1 = document.getElementById('tab1');
let tab2 = document.getElementById('tab2');
let text = document.getElementById('texto');

tab.addEventListener('click', () => {
    text.textContent = 'LOREM IPSUM DEL TAB 0';
});

tab1.addEventListener('click', () => {
    text.textContent = 'LOREM IPSUM DEL TAB 1';
});

tab2.addEventListener('click', () => {
    text.textContent = 'LOREM IPSUM DEL TAB 2'
});
