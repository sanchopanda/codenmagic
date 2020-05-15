
(function () {
    var setup = document.querySelector('.setup-player');
    var wizardCoat = setup.querySelector('.wizard-coat');
    var wizardEyes = setup.querySelector('.wizard-eyes');
    var fireball = setup.querySelector('.setup-fireball-wrap');

    function changeCoatColor() {
        wizardCoat.style.fill = data.coatColors[lib.getRandomInt(data.coatColors.length - 1)];
    };

    function changeEyesColor() {
        wizardEyes.style.fill = data.eyesColors[lib.getRandomInt(data.eyesColors.length - 1)];
    };

    function changeFireballColor() {
        var fireballColor = data.fireballColors[lib.getRandomInt(data.fireballColors.length - 1)];
        fireball.style.background = fireballColor;
        fireball.querySelector('input').value = fireballColor;
    };

    wizardCoat.addEventListener('click', function () {
        changeCoatColor();
    });

    wizardEyes.addEventListener('click', function () {
        changeEyesColor();
    });

    fireball.addEventListener('click', function () {
        changeFireballColor()
    });
})();
