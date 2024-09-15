var fs = require('fs');

fs.readdir('.', function(err, data){
    if(err) throw err;
    console.log("Result of readdir as a list: ");
    data.forEach(function(dir){
        console.log(dir);
    })
    console.log("\ndata.toString()");
    console.log(data.toString());
    console.log("\ndata");
    console.log(data);
    });
    console.log("Program Ended");

// jos haluaa, että "Program Ended" tulostuu vasta kun ohjelma suoritettu loppuun
var fs = require('fs');

fs.readdir('.', function(err, data) {
    if (err) throw err;

    console.log("Result of readdir as a list: ");
    data.forEach(function(dir) {
        console.log(dir);
    });

    console.log("\ndata.toString()");
    console.log(data.toString());

    console.log("\ndata");
    console.log(data);

    // Tämä tulostuu vasta, kun hakemiston luku on valmis
    console.log("Program Ended");
});
