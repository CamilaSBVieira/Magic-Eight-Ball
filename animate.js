const animate = document.getElementById('animation');
let animationArray = [];
for (let i = 0; i < 50; i++) {
    let randBottom = Math.floor(Math.random() * 100);
    let randLeft = Math.floor(Math.random() * 100);
    animationArray[i] = `<div class="float" style="left: ${randLeft}%; bottom: -${randBottom}%"></div>`;
}
animate.innerHTML = animationArray.join('');