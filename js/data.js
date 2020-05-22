
(function () {
    var similarListElement = document.querySelector('.setup-similar-list');
    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
        .content
        .querySelector('.setup-similar-item');

    //МОК генерация
    /*
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
*/
    function createWizard(wizard) {
        var wizardElement = similarWizardTemplate.cloneNode(true);
        wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
        wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
        wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
        return wizardElement;
    };

    //загрузка волшебников
    function wizardsGetSucces(wizards) {
        var fragment = document.createDocumentFragment();
        for (var i = 4; i < 9; i++) {
            fragment.appendChild(createWizard(wizards[i]));
        }
        similarListElement.appendChild(fragment);
    };

    function GetError(errorMessage) {
        var node = document.createElement('div');
        node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
        node.style.position = 'absolute';
        node.style.left = 0;
        node.style.right = 0;
        node.style.fontSize = '30px';
        node.textContent = errorMessage;
        document.body.insertAdjacentElement('afterbegin', node);
    };

    backend.load(wizardsGetSucces, GetError);


    //отправка формы
    function formPostSucces() {
        document.querySelector('.setup').classList.add('hidden');
    };

    var form = document.querySelector('.setup-wizard-form');

    form.addEventListener('submit', function (evt) {
        backend.save(new FormData(form), formPostSucces, GetError);
        evt.preventDefault();
    });
})();
