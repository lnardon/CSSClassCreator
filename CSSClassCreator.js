const fs = require('fs');

fs.readFile( process.argv[2] + '.html',"utf8", function (err, data) {
  if (err) {
    throw err; 
  }

  let html = data;
  let loop = true;
  let classes = [];
  let ids = [];
  let i = 0;

  while(loop){
    let index = data.charAt(data.indexOf("class=") + 7);
    console.log(index)
    if (index == 0){
        let className = "";
        let letter = 1;
        while(index != "\""){
            className += index;
            index = data.charAt((data.indexOf("class=") + 7)+ letter);
            letter++;
        }
        classes.push(className);
        className = "";
        html = html.slice(index);
    } else {
        loop = false;
    }
  }
  console.log(classes)

});
