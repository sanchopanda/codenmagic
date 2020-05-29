
(function () {
    var similarListElement = document.querySelector('.setup-similar-list');
    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
        .content
        .querySelector('.setup-similar-item');


    //функция создания волшебника
    function createWizard(wizard) {
        var wizardElement = similarWizardTemplate.cloneNode(true);
        wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
        wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
        wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
        return wizardElement;
    };


    window.data = {
        wizards: [],
        //функция рендера волшебников
        render: function (wizards) {
            var fragment = document.createDocumentFragment();
            var number = wizards.length > 4 ? 4 : wizards.length;
            for (var i = 0; i < number; i++) {
                fragment.appendChild(createWizard(wizards[i]));
            }
            similarListElement.appendChild(fragment);
        },
        //функция удаления волшебников
        removeSimilarWizard: function () {
            var similarWizards = similarListElement.querySelectorAll('.setup-similar-item');
            if (similarWizards) {
                similarWizards.forEach(function (wizard) {
                    wizard.remove();
                });
            };
        }
    };
    //Получаем список волшебников
    function successHandler(data) {
        window.data.wizards = data;
    };
    window.backend.load(successHandler, backend.getError)

    //отправка формы
    function formPostSucces() {
        document.querySelector('.setup').classList.add('hidden');
    };

    var form = document.querySelector('.setup-wizard-form');

    form.addEventListener('submit', function (evt) {
        backend.save(new FormData(form), formPostSucces, backend.getError);
        //evt.preventDefault();
    });
})();
