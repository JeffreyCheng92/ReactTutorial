(function(root) {
  var _keys = [];
  var CHANGE_EVENT = "change";

  root.KeyStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _keys.slice(0);
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    create: function(key) {
      if (_keys.indexOf(key) === -1) {
        _keys.push(key);
        this.emit(CHANGE_EVENT);
      }
    },

    destroy: function(key) {
      var idx = _keys.indexOf(key);
      if ( idx !== -1) {
        _keys.splice(idx, 1);
        this.emit(CHANGE_EVENT);
      }
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {

      case KeyConstants.KEYS_CREATE:
        root.KeyStore.create(payload.note);
        break;

      case KeyConstants.KEYS_DESTROY:
        root.KeyStore.destroy(payload.note);
        break;

      default:
        // no op
      }
    }),

  });
})(this);
