const fs = require("fs");

fs.readFile(process.argv[2] + ".html", "utf8", (err, data) => {
  if (err) {
    throw err;
  }

  let html = data;
  let classes = [];
  let ids = [];
  let hasText = true;

  // This function is responsible for getting all the class names
  while (hasText) {
    let gettingName = true;
    let className = "";
    let firstIndex = 7;
    while (gettingName) {
      if (
        html[html.indexOf("class=") + firstIndex] ===
        html[html.indexOf("class=") + 6]
      ) {
        gettingName = false;
        classes.push(className);
        html = html.slice(html.indexOf("class=") + firstIndex);
        firstIndex = 7;
      } else {
        className += html[html.indexOf("class=") + firstIndex];
        firstIndex++;
      }
    }
    if (html.indexOf("class=") === -1) {
      hasText = false;
    }
  }

  hasText = true;
  html = data;

  // This function is responsible for getting all the class names
  while (hasText) {
    let gettingName = true;
    let idName = "";
    let firstIndex = 4;
    while (gettingName) {
      if (
        html[html.indexOf("id=") + firstIndex] === html[html.indexOf("id=") + 3]
      ) {
        gettingName = false;
        ids.push(idName);
        html = html.slice(html.indexOf("id=") + firstIndex);
        firstIndex = 4;
      } else {
        idName += html[html.indexOf("id=") + firstIndex];
        firstIndex++;
      }
    }
    if (html.indexOf("id=") === -1) {
      hasText = false;
    }
  }

  // Creates all the classes structures to be saved on the styles.css file
  let cssContent = "";
  classes.forEach((name) => {
    cssContent += "." + name + "{" + "\n" + "\n" + "}" + "\n";
  });

  ids.forEach((name) => {
    cssContent += "#" + name + "{" + "\n" + "\n" + "}" + "\n";
  });

  // Creates the css file with all the classes
  fs.writeFile("styles.css", cssContent, (err) => {
    if (err) {
      return console.log(err);
    }
  });
});
