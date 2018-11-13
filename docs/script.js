var primUrl;

function createScript(src) {
  var script = document.createElement('script');
  script.src = src;
  return script;
}

(function() {
  document.getElementById('time-test').innerText = new Date().toISOString();

  var url = document.location.hash.substr(1);
  primUrl = url;
  document.body.appendChild(createScript(url+"/bootstrap"));

})();
