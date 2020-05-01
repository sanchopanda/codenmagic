var setup = document.querySelector(".setup");
setup.classList.remove("hidden");

var wizardsFirstName = [
    "Иван",
    "Хуан Себастьян",
    "Мария",
    "Кристоф",
    "Виктория",
    "Юлия",
    "Лолита",
    "Вашингтон"
];
var wizardsLastName = [
    "да Марья",
    "Верон",
    "Мирабелла",
    "Вальц",
    "Онопко",
    "Топольницкая",
    "Нионго",
    "Ирвинг"
];
var coatColors = [
    "rgb(101, 137, 164)",
    "rgb(241, 43, 107)",
    "rgb(146, 100, 161)",
    "rgb(59, 159, 117)",
    "rgb(215, 210, 55)",
    "rgb(0, 0, 0)"
];
var eyesColors = [
    "black",
    "red",
    "blue",
    "yellow",
    "green"
];

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

var similarListElement = setup.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


var renderWizard = function (wizard) {
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