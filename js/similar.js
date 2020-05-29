'use strict';

(function () {

    var coatColor;
    var eyesColor;

    var clearWizardsList = function () {

    };

    function getRank(wizard) {
        var rank = 0;

        if (wizard.colorCoat === coatColor) {
            rank += 2;
        }

        if (wizard.colorEyes === eyesColor) {
            rank += 1;
        }

        return rank;
    };

    var namesComparator = function (leftName, rightName) {
        if (leftName > rightName) {
            return 1;
        } else if (leftName < rightName) {
            return -1;
        } else {
            return 0;
        }
    };

    var wizardsComparator = function (left, right) {
        var rankDiff = getRank(right) - getRank(left);
        return rankDiff === 0 ? namesComparator(left.name, right.name) : rankDiff;
    };

    window.similar = {
        updateFilter: function () {
            coatColor = document.querySelector('.wizard-coat').style.fill;
            eyesColor = document.querySelector('.wizard-eyes').style.fill;
            data.removeSimilarWizard();
            data.render(data.wizards.sort(wizardsComparator));
        }
    };

})();
