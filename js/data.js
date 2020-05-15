
(function () {
    var similarListElement = document.querySelector('.setup-similar-list');
    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
        .content
        .querySelector('.setup-similar-item');
    var wizardsFirstName = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктория", "Юлия", "Лолита", "Вашингтон"];
    var wizardsLastName = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];

    window.data = {
        coatColors: ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(59, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"],
        eyesColors: ["black", "red", "blue", "yellow", "green"],
        fireballColors: ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"]
    }


    function randomWizards(wizardsCount) {
        var wizards = [];
        for (var i = 0; i < wizardsCount; i++) {
            wizards[i] = {
                name: wizardsFirstName[lib.getRandomInt(wizardsFirstName.length - 1)] + " " + wizardsLastName[lib.getRandomInt(wizardsLastName.length - 1)],
                coatColor: data.coatColors[lib.getRandomInt(data.coatColors.length - 1)],
                eyesColor: data.eyesColors[lib.getRandomInt(data.eyesColors.length - 1)],
            }
        }
        return wizards;
    };

    function createWizard(wizard) {
        var wizardElement = similarWizardTemplate.cloneNode(true);
        wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
        wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
        wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
        return wizardElement;
    };

    var wizards = randomWizards(4);

    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
        fragment.appendChild(createWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
})();
