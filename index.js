var fs = require('fs')


fs.readFile(filename, 'utf8', function (err, data) {
  if (err) console.log(err);
  var result = data.replace(/regex/g, newStr);

  fs.writeFile(filename, result, 'utf8', function (err) {
     if (err) console.log(err);
  });
});
