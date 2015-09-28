var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var KeyConstants = require('../constants/KeyConstants');
var assign = require('object-assign');
var ToneConstants = require('../util/tones');

var _keys = {};
// var _id = 0;

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
