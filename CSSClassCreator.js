const fs = require('fs');

fs.readFile( process.argv[2] + '.html',"utf8", (err, data) => {
  if(err){
    throw err; 
  }

  let html = data;
  let classes = [];
  let hasText = true;

  // This function is responsible for getting all the class names
  while(hasText){
    let gettingName = true;
    let className = "";
    let firstIndex = 7;
    while(gettingName){
      if(html[html.indexOf("class=") + firstIndex] === (html[html.indexOf("class=") + 6])){
        gettingName = false;
        classes.push(className);
        html = html.slice(html.indexOf("class=") + firstIndex);
        firstIndex = 7;
      } else {
        className += html[html.indexOf("class=") + firstIndex];
        firstIndex++;
      }
    }
    if(html.indexOf("class=") === -1){
      hasText = false;
    }
  }

  console.log(sheet)
});
