window.MathJax = {
  loader: { load: ["[tex]/bussproofs"] },
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    packages: { "[+]": ["bussproofs"] },
  },
  svg: {
    fontCache: "global",
  },
};

(function () {
  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
  script.async = true;
  document.head.appendChild(script);
})();
