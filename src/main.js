(function() {

  var scripts = ['4.js', '2.js', '1.js','3.js'];

  var importScript = (function (oHead) {

    function loadError (oError) {
      throw new URIError("The script " + oError.target.src + " is not accessible.");
    }

    return function (sSrc, fOnload) {
      var oScript = document.createElement("script");
      oScript.type = "text\/javascript";
      oScript.onerror = loadError;
      oScript.onload = fOnload
      oHead.appendChild(oScript);
      oScript.src = sSrc;
    }

  })(document.head || document.getElementsByTagName("head")[0]);


  (function initialize() {
    var updateCounter = counter();
    for (var i = 0; i < scripts.length; i++) {
      importScript(scripts[i], updateCounter);
    }
  })()

  function counter() {
    var count = 0;
    return function updateCounter() {
      if (++count === scripts.length) allLoaded();
    }
  }

  function allLoaded() {
    // bootstrap app
    console.log('all loaded');
    angular.element(document).ready(function() {
      angular.bootstrap(document.getElementsByTagName("body")[0], ['app']);
    })
  }

})()