

var scripts = ['1.js', '2.js', '3.js', '4.js']
var count = 0

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


for (var i = 0; i < scripts.length; i++) {
	importScript(scripts[i], updateCounter)
}


function updateCounter() {
	count++
	if (count === scripts.length) allLoaded()
}
function allLoaded() {
	// bootstrap app
	console.log('all loaded');
}



