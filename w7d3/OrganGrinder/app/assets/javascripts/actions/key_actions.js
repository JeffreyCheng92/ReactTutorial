var KeyActions = {

  keyDown: function(key){
    AppDispatcher.dispatch({
      actionType: KeyConstants.KEY_CREATE,
      note: key
    });
  },

  keyUp: function(key){
    AppDispatcher.dispatch({
      actionType: KeyConstants.KEY_DESTROY,
      note: key
    });
  },

};
