var KeyActions = {

  keyDown: function(key){
    AppDispatcher.dispatch({
      actionType: KeyConstants.KEYS_CREATE,
      note: key
    });
  },

  keyUp: function(key){
    AppDispatcher.dispatch({
      actionType: KeyConstants.KEYS_DESTROY,
      note: key
    });
  },

};
