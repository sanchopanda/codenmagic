var setup = document.querySelector(".setup");
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var similarListElement = setup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
var wizardsFirstName = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктория", "Юлия", "Лолита", "Вашингтон"];
var wizardsLastName = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
var coatColors = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(59, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
var eyesColors = ["black", "red", "blue", "yellow", "green"];
var fireballColors = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

function onPopupEscPress(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
        closePopup();
    }
};

function openPopup() {
    setup.classList.remove('hidden');
    setup.style = '';
    document.addEventListener('keydown', onPopupEscPress);
};

function closePopup() {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
    openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
        openPopup();
    }
});

setupClose.addEventListener('click', function () {
    closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
        closePopup();
    }
});

// Focus on username condition

var setupUserName = document.querySelector('.setup-user-name');

setupUserName.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupEscPress);
});

setupUserName.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupEscPress);
});

// Change wizard colors

var wizardCoat = setup.querySelector('.wizard-coat');
var wizardEyes = setup.querySelector('.wizard-eyes');
var fireball = setup.querySelector('.setup-fireball-wrap');

function changeCoatColor() {
    wizardCoat.style.fill = coatColors[getRandomInt(coatColors.length - 1)];
};

function changeEyesColor() {
    wizardEyes.style.fill = eyesColors[getRandomInt(eyesColors.length - 1)];
};

function changeFireballColor() {
    var fireballColor = fireballColors[getRandomInt(fireballColors.length - 1)];
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

function randomWizards(wizardsCount) {
    var wizards = [];
    for (var i = 0; i < wizardsCount; i++) {
        wizards[i] = {
            name: wizardsFirstName[getRandomInt(wizardsFirstName.length - 1)] + " " + wizardsLastName[getRandomInt(wizardsLastName.length - 1)],
            coatColor: coatColors[getRandomInt(coatColors.length - 1)],
            eyesColor: eyesColors[getRandomInt(eyesColors.length - 1)],
        }
    }
    return wizards;
};

function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
}

var wizards = randomWizards(4);

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

setup.querySelector('.setup-similar').classList.remove('hidden');

var userPic = document.querySelector('.upload');


userPic.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
        x: evt.clientX,
        y: evt.clientY
    };
    var dragged = false;


    var onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();
        dragged = true;

        var shift = {
            x: startCoords.x - moveEvt.clientX,
            y: startCoords.y - moveEvt.clientY,
        };

        startCoords = {
            x: moveEvt.clientX,
            y: moveEvt.clientY
        };

        var moveCoords = {
            x: setup.offsetLeft - shift.x,
            y: setup.offsetTop - shift.y
        };

        setup.style.left = moveCoords.x + 'px';

        setup.style.top = moveCoords.y + 'px';


    };

    var onMouseUp = function (upEvt) {
        upEvt.preventDefault();
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mousedown', onMouseUp);

        if (dragged) {
            var onClickPrevent = function (evt) {
                evt.preventDefault();
                userPic.removeEventListener('click', onClickPrevent)
            };
            userPic.addEventListener('click', onClickPrevent);
        };

        dragged = false;

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});
