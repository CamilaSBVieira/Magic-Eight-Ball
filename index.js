const ball = document.getElementById('ball');
const p = document.querySelector('p');

function eightBall() {
    ball.style.animation = 'bounce 3s ease-in-out';
    p.innerHTML = '';
    let eightBallAnswer;
    let randNum = Math.floor(Math.random() * 8);
    switch (randNum) {
        case 0:
            eightBallAnswer = 'It is certain'
            break;
        case 7:
            eightBallAnswer = 'It is certain'
            break;
        case 1:
            eightBallAnswer = 'It is decidedly so'
            break;
        case 2:
            eightBallAnswer = 'Reply hazy try again'
            break;
        case 3:
            eightBallAnswer = 'Cannot predict now'
            break;
        case 4:
            eightBallAnswer = 'Do not count on it'
            break;
        case 5:
            eightBallAnswer = 'My sources say no'
            break;
        case 6:
            eightBallAnswer = 'Signs point to yes'
            break;
    }
    setTimeout(function() {p.innerHTML = eightBallAnswer; ball.style.animation = 'none';}, 3000);
    

};

ball.addEventListener('click', eightBall);