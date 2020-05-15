(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var SHADOW_SHIFT = 10;
  var GAP = 50;
  var BAR_WIDTH = 40;
  var MAX_BAR_HEIGHT = 150;
  var TEXT_X_INIT = 120;
  var TEXT_Y_INIT = 40;
  var TEXT_HEGHT = 20;
  var BAR_TOP_INIT = 70;
  var NAMES_TOP_INIT = MAX_BAR_HEIGHT + BAR_TOP_INIT + 20;


  function getMaxElement(arr) {
    var maxElement = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  window.renderStatistics = function (ctx, names, times) {
    //функция отрисовки облака
    var drawCloud = function (x, y, width, heigth) {
      var offset = 10;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + offset, y + heigth / 2);
      ctx.lineTo(x, y + heigth);
      ctx.lineTo(x + width / 2, y + heigth - offset);
      ctx.lineTo(x + width, y + heigth);
      ctx.lineTo(x + width - offset, y + heigth / 2);
      ctx.lineTo(x + width, y);
      ctx.lineTo(x + width / 2, y + offset);
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.closePath();
      ctx.fill();
    };
    //отрисовка тени
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    drawCloud(CLOUD_X + SHADOW_SHIFT, CLOUD_Y + SHADOW_SHIFT, CLOUD_WIDTH, CLOUD_HEIGHT);
    //отрисовка облака
    ctx.fillStyle = "rgba(256, 256, 256, 1.0)";
    drawCloud(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
    //отрисовка текста
    ctx.fillStyle = "#000";
    ctx.font = "16px PT Mono";
    ctx.fillText("Ура вы победили!", TEXT_X_INIT, TEXT_Y_INIT);
    ctx.fillText("Список результатов:", TEXT_X_INIT, TEXT_Y_INIT + TEXT_HEGHT);

    function randomColor() {
      var r = lib.getRandomInt(256);
      var g = lib.getRandomInt(256);
      var b = lib.getRandomInt(256);
      var color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
      return color;
    }

    var maxTime = getMaxElement(times);
    //отрисовка гистограммы
    for (var i = 0; i < names.length; i++) {
      ctx.fillStyle = '#000';
      ctx.fillText(
        names[i],
        CLOUD_X + GAP + GAP * i + BAR_WIDTH * i,
        CLOUD_Y + NAMES_TOP_INIT
      );

      ctx.fillStyle = randomColor();
      ctx.fillRect(
        CLOUD_X + GAP + GAP * i + BAR_WIDTH * i,
        CLOUD_Y + BAR_TOP_INIT + MAX_BAR_HEIGHT,
        BAR_WIDTH,
        -(MAX_BAR_HEIGHT * times[i]) / maxTime
      );
    }
  };

})();



