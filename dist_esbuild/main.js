(() => {
  // src/print.js
  function printMe() {
    console.log("I get called from print.js!");
  }

  // src/index.js
  function component() {
    const element = document.createElement("div");
    const btn = document.createElement("button");
    element.innerHTML = "Hello OMSCS";
    btn.innerHTML = "Click me and check the console!";
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
  }
  document.body.appendChild(component());
})();
