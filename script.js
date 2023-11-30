document.addEventListener('DOMContentLoaded', function() {
    var countdownElement = document.getElementById('countdown');
    var confettiElement = document.getElementById('confetti');

    var end = new Date();
    end.setHours(15, 0, 0, 0);

    var confettiSettings = { target: 'confetti' };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    function updateCountdown() {
        var now = new Date();
        var difference = end - now;

        var seconds = Math.floor((difference / 1000) % 60);
        var minutes = Math.floor((difference / 1000 / 60) % 60);
        var hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

        countdownElement.innerHTML =  hours + ':' + minutes + ':' + seconds;

        if (difference <= 0) {
            clearInterval(interval);
            countdownElement.style.display = 'none';
            confettiElement.style.display = 'block';
        }
    }

    var interval = setInterval(updateCountdown, 1000);
});