const lib = require("fs");

lib.readFile(__dirname+ "/MyFile.txt",function(err,data)
{
  if(err) throw err;
  else
  console.log(data.toString());// toString applied else will give data in buffer
})
