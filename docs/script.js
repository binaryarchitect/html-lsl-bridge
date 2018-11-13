function makeScript(src) {
  var script = document.createElement('script');
  script.src = src;
  return script;
}

setInterval(function() {
  document.getElementById('time-test').innerText = new Date().getTime();

  var url = document.location.hash.substr(1);
  document.body.appendChild(createScript(url+"/bootstrap"));

}, 1000);
