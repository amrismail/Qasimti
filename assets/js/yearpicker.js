var start = new Date().getFullYear();
var end = new Date().getFullYear()+10;
var options = "";
for(var year = start ; year <=end; year++){
  options += "<option>"+ year +"</option>";
}
document.getElementById("year").innerHTML = options;