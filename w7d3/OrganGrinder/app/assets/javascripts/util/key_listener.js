(function() {
  var NOTE_MAP = {
    65: 'C3',  // 'a'
    83: 'D3',  // 's'
    68: 'E3',  // 'd'
    70: 'F3',  // 'f'
    74: 'G3',  // 'j'
    75: 'A3',  // 'k'
    76: 'B3',  // 'l'
    80: 'C4',  // 'p'
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
