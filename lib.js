(function(global) {

  function _observeObject(obj, cb) {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        _observeProp(obj, prop, cb);
      }
    }

    return obj;
  }

  function _observeProp(obj, prop, cb) {
    var currentValue = obj[prop];

    Object.defineProperty(obj, prop, {

      get: function() {
        return currentValue;
      },

      set: function(newValue) {
        if(newValue === currentValue) return;
        currentValue = newValue;
        if(cb) cb(prop);
      }
    });
  }
      
  function makeReactiveArray(arr) {
    
  }


  global.Reactive = {
    object: _observeObject,
    array: makeReactiveArray
  }

})(window);
