const lib = require("fs");

lib.writeFile("MyFile1.txt","Some Random Data Again",function(err)
{
  if(err) throw err;
  else
  console.log("File was Written");
})
