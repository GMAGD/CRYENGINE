// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension

window.onload = function() {
  /*
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }
  
  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }*/

  var script = document.createElement("script");
  script.src = "https://code.jquery.com/jquery-2.1.4.min.js";
  script.onload = script.onreadystatechange = function() {
    let webview = document.getElementById("webview");
    console.log(webview);
  
  };
  document.body.appendChild(script);
  
  //$(".popupCloseIcon").get(0).click()
  



}