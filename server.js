var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var second ={
    title:'second',
    content:"<p> hey guys.this is my second web page </p>"
};

var third ={
    title:'third',
    content:"<h3> hey guys.this is my third web page </h3>"
};


function cc(data){
   var t = data.title;
   var content = data.content;
   var common = `
    <html>
        <head>
            <title>
                ${t}
            </title>
        </head>
        <body>
            <div>
               ${content}
            </div>
        </body>
    </html> `;
    return common;
    
    
}

app.get('/a1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'a1.html'));
});

app.get('/a2', function (req, res) {
  res.send(cc(second));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
