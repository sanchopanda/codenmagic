
(function () {

    var setup = document.querySelector('.setup-player');
    var wizardCoat = setup.querySelector('.wizard-coat');
    var wizardEyes = setup.querySelector('.wizard-eyes');
    var fireball = setup.querySelector('.setup-fireball-wrap');

    var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
    var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


    function coloriseElem(elem, colorData) {
        elem.style.fill = lib.getRandomValue(colorData);
    }

    function changeFireball(fireball, colorData) {
        fireball.style.background = lib.getRandomValue(colorData);
    }

    let delayUpdateFilter = window.debounce(similar.updateFilter);

    wizardCoat.addEventListener('click', function () {
        coloriseElem(wizardCoat, coatColors);
        delayUpdateFilter();
    });

    wizardEyes.addEventListener('click', function () {
        coloriseElem(wizardEyes, eyesColors);
        delayUpdateFilter();
    });

    fireball.addEventListener('click', function () {
        changeFireball(fireball, fireballColors);
    });
})();
