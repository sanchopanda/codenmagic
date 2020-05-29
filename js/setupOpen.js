(function () {
    var setup = document.querySelector(".setup")
    var setupOpen = document.querySelector('.setup-open');
    var setupClose = setup.querySelector('.setup-close');
    var setupUserName = document.querySelector('.setup-user-name');

    function onPopupEscPress(evt) {
        window.lib.isEscKey(evt, closePopup);
    };

    function openPopup() {
        setup.classList.remove('hidden');
        similar.updateFilter();
        document.addEventListener('keydown', onPopupEscPress);
    };

    function closePopup() {
        setup.classList.add('hidden');
        setup.style = '';
        document.removeEventListener('keydown', onPopupEscPress);
    };

    setupOpen.addEventListener('click', function () {
        openPopup();
    });

    setupOpen.addEventListener('keydown', function (evt) {
        window.lib.isEnterKey(evt, openPopup);
    });

    setupClose.addEventListener('click', function () {
        closePopup();
    });

    setupClose.addEventListener('keydown', function (evt) {
        window.lib.isEnterKey(evt, closePopup);
    });

    // Состояние фокуса на имени 

    setupUserName.addEventListener('focus', function () {
        document.removeEventListener('keydown', onPopupEscPress);
    });

    setupUserName.addEventListener('blur', function () {
        document.addEventListener('keydown', onPopupEscPress);
    });

})();






