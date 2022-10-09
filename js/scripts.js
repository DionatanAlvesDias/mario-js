// Função que adiciona a class jump no mario, e faz o evento de pulo
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    //add a class jump
    mario.classList.add('jump');
    // Set a duração da animação e remove a class jump, fazendo com que podemos clicar novamente
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.left = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        clearInterval(loop)
    }

}, 10);

document.addEventListener('keydown', jump)