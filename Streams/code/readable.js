// Working through https://github.com/substack/stream-handbook

var Readable = require('stream').Readable;

var rs = new Readable;
rs.push('beep\n');
rs.push('boop\n');
rs.push('bop\n');
rs.push(null); // tells the consumer that rs is done outputting data, stops the

rs.pipe(process.stdout);


var rs = Readable();
var c = 97;
rs._read = function () {
  rs.push(String.fromCharCode(c++));
  if (c > 'z'.charCodeAt(0)) rs.push(null);
};

rs.pipe(process.stdout);
