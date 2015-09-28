var AppDispatcher = require('../dispatcher/AppDispatcher');
var KeyConstants = require('../constants/KeyConstants');

(function() {

  window.KeyActions = function(){};

  window.KeyActions.prototype.keyDown = function(key){
    AppDispatcher.dispatch({
      actionType: KeyConstants.KEY_CREATE,
      note: key
    });
  };

  window.KeyActions.prototype.keyUp = function(key){
    AppDispatcher.dispatch({
      actionType: KeyConstants.KEY_DESTROY,
      note: key
    });
  };


})();
