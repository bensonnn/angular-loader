var scripts = ['1.js', '2.js', '3.js', '4.js']

var importScripts = (function (oHead) {

	var count = 0

  function loadError (oError) {
    throw new URIError("The script " + oError.target.src + " is not accessible.");
  }

  function load(sSrc) {
    var oScript = document.createElement("script");
    oScript.type = "text\/javascript";
    oScript.onerror = loadError;
    oScript.onload = function() { loadWithCheck(sSrc) }
    oHead.appendChild(oScript);
    oScript.src = sSrc[count];
  }

  function loadWithCheck(sSrc) {
  	if (++count < sSrc.length) load(sSrc)
  	else allLoaded()
  }

	return load

})(document.head || document.getElementsByTagName("head")[0]);

importScripts(scripts)

function updateCounter() {
	count++
	if (count === scripts.length) allLoaded()
}
function allLoaded() {
	// bootstrap app
	console.log('all loaded');
}



