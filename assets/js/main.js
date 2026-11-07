/* Small progressive enhancements: active nav highlighting + footer year. */
(function () {
  "use strict";

  var here = location.pathname.replace(/\/index\.html$/, "/").replace(/^.*\/(posts\/)/, "posts/");
  document.querySelectorAll("nav a").forEach(function (a) {
    var href = a.getAttribute("href") || "";
    if (href && here.indexOf(href.replace(/^(\.\/|\.\.\/)/, "")) === 0 && href.indexOf("http") !== 0) {
      a.setAttribute("aria-current", "page");
    }
  });

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear().toString();
})();
