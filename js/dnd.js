(function () {
    var draggedElem = document.querySelector('.setup');
    var draggHandle = draggedElem.querySelector('.upload');

    draggHandle.addEventListener('mousedown', function (evt) {
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
                x: draggedElem.offsetLeft - shift.x,
                y: draggedElem.offsetTop - shift.y
            };

            draggedElem.style.left = moveCoords.x + 'px';

            draggedElem.style.top = moveCoords.y + 'px';
        };

        var onMouseUp = function (upEvt) {
            upEvt.preventDefault();
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mousedown', onMouseUp);

            if (dragged) {
                var onClickPrevent = function (evt) {
                    evt.preventDefault();
                    draggHandle.removeEventListener('click', onClickPrevent)
                };
                draggHandle.addEventListener('click', onClickPrevent);
            };

            dragged = false;
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

})();