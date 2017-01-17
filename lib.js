(function(global) {
  
  // more to implement

  function makeReactive(obj, cb) {
    return new Proxy(obj, {
      get: function(target, prop) {
        return prop in target ? target[prop] : undefined;
      },

      set: function(target, prop, value) {
        target[prop] = value;
        if(cb) cb(value);
        return target[prop];
      }
    });
  }


  global.Reactive = {
    object: makeReactive
  }

})(window);
