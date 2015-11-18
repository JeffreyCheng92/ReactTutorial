(function() {
  var NOTE_MAP = {
    65: 'C3',  // 'a'
    87: 'C_3', // 'w'
    83: 'D3',  // 's'
    69: 'D_3', // 'e'
    68: 'E3',  // 'd'
    70: 'F3',  // 'f'
    84: 'F_3', // 't'
    74: 'G3',  // 'j'
    73: 'G_3', // 'i'
    75: 'A3',  // 'k'
    79: 'A_3', // 'o'
    76: 'B3',  // 'l'
    186: 'C4', // ';'
  };

  var _heldKeys = [];
  var _validKeys = Object.keys(NOTE_MAP);

  document.addEventListener("keydown", function(event) {
    event.preventDefault();
    var code = event.keyCode;
    var valid = _validKeys.indexOf(code.toString()) >= 0;

    if (_heldKeys.indexOf(code) === -1 && valid) {
      _heldKeys.push(code);
      KeyActions.keyDown(NOTE_MAP[code]);
    }
  });

  document.addEventListener("keyup", function(event) {
    event.preventDefault();
    var code = event.keyCode;
    var idx = _heldKeys.indexOf(code);

    if (idx >= 0) {
      _heldKeys.splice(idx, 1);
      KeyActions.keyUp(NOTE_MAP[code]);
    }
  });

})();
