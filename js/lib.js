(function () {
    var ESC_KEYCODE = 27;
    var ENTER_KEYCODE = 13;
    window.lib = {
        isEscKey: function (evt, action) {
            if (evt.keyCode === ESC_KEYCODE) {
                action();
            }
        },
        isEnterKey: function (evt, action) {
            if (evt.keyCode === ENTER_KEYCODE) {
                action();
            }
        },
        getRandomInt: function (max) {
            return Math.round(Math.random() * max);
        },
        getRandomValue: function (arr) {
            return arr[lib.getRandomInt(arr.length - 1)];
        }
    };
})();