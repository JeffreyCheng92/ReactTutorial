var _keys = {};

function create(key) {
  _keys[key] = {
    frequency: ToneConstants[key]
  };
}

function destroy(key) {
  delete _keys[key];
}

AppDispatcher.register(function(action) {
  var key;

  switch(action.actionType) {

    case KeyConstants.KEYS_CREATE:
      key = action.text.trim();
      if (text !== '') {
        create(text);
        KeyStore.emitChange();
      }
      break;

    case KeyConstants.KEYS_DESTROY:
      destroy(action.id);
      KeyStore.emitChange();
      break;

    default:
      // no op
  }
});


module.exports = KeyStore;
