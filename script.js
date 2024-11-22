document.getElementById('red').addEventListener('click', function() {
    setLight('red');
});

document.getElementById('yellow').addEventListener('click', function() {
    setLight('yellow');
});

document.getElementById('green').addEventListener('click', function() {
    setLight('green');
});

function setLight(color) {
    const lights = document.querySelectorAll('.light');
    lights.forEach(light => light.classList.remove('active'));

    document.getElementById(`${color}-light`).classList.add('active');

    let message = '';
    if (color === 'red') {
        message = 'Stop! The light is red.';

} else if (color === 'yellow') {
    message = 'Caution! The light is yellow. Get ready to go .';
} else if (color === 'green') {
    message = 'Go! The light is green.';
}

document.getElementById('message').innerText = message;
}