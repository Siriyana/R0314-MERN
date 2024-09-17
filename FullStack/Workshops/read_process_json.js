

var data = require('./persons.json');

/*TIEDOT ILMAN HTML-tageja
for (var i=0; i<data.length; i++){
    console.log(data[i].name);
    console.log(data[i].age);
    console.log(data[i].company);
    console.log(data[i].address+"\n");
}*/

console.log("table border='1'>")
for (var i=0; i<data.length; i++){
    console.log("tr>")
    console.log("<td>"+data[i].name+"</td");
    console.log("<td>"+data[i].age+"</td");
    console.log("<td>"+data[i].company+"</td");
    console.log("<td>"+data[i].address+"</td>");
    console.log("</tr>\n")
}