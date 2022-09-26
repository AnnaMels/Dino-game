refs = {
    dino: document.getElementById('dino'),
    cactus: document.getElementById('cactus'),
};

// document.addEventListener('keydown', () => {
//     if (!refs.dino.classList.contains('jump')) {
//         refs.dino.classList.add('jump')
//     }

//     setTimeout(() => {
//         refs.dino.classList.remove('jump')
//     }, 400)
// });


document.addEventListener('touchmove', () => {
    if (!refs.dino.classList.contains('jump')) {
        refs.dino.classList.add('jump')
    }

    setTimeout(() => {
        refs.dino.classList.remove('jump')
    }, 300)
});

let isAlive = setInterval(() => {
    let dinoCoordinates = parseInt(window.getComputedStyle(refs.dino).getPropertyValue('top'));
    let cactusCoordinates = parseInt(window.getComputedStyle(refs.cactus).getPropertyValue('left'));

    if (cactusCoordinates < 50 && cactusCoordinates > 0 && dinoCoordinates >= 140) {
        alert('GAME OVER!')
    }
}, 10);

