function inject() {
  console.log("Stager: Injecting iframe...");
  document.title = "MINEZIN da GARELA > DOM";

  document.getElementsByTagName("body")[0].innerHTML =
    '<iframe src="https://breno5g.github.io/WebCraft/singleplayer.html"></iframe>';
}

if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  console.log("Stager: DOM ready");
  inject();
} else if (window.attachEvent) {
  console.log("Stager: Attaching to onload");
  window.attachEvent("onload", inject);
} else if (window.addEventListener) {
  console.log("Stager: Attaching to load");
  window.addEventListener("load", inject, false);
} else {
  console.log("Stager: Fallback to iframe count");
  let fc = document.getElementsByTagName("iframe").length;
  setInterval(function () {
    if (document.getElementsByTagName("iframe").length != fc) {
      return;
    } else {
      inject();
    }
  }, 300);
}