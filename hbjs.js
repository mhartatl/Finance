/*** Created by maurahart on 4/28/16.*/
//Useful for data hiding - putting a function within a function
// printRocket is a private method


var countDown = function() {  //add len here to make it a parm
    var counter;
    for(counter = 3; counter > 0; counter--) {
        console.log(counter);
    }
}
var countDown10 = function() {  //this goes away if using len
    var counter;
    for(counter = 10; counter > 0; counter--) {
        console.log(counter);
    }
}

function launchRocket(Myfavorite, rocketName) { //add len as a parm called cdcounter
    Myfavorite();  //this is the execution of countdown that was passed in; add len as parm called cdcounter

    function printRocketMessage() {
        console.log( "Launching " + rocketName);
    }

    printRocketMessage();
}

 //   printRocketMessage(); does not work here outside of function launchRocket

launchRocket(countDown, "Falcon"); //add len as a parm to pass that is 3
launchRocket(countDown10, "Jets"); //add len as a parm to pass that is 10

/* $.ajax({
    url: 'http://data.consumerfinance.gov/api/views.json',
    data:{format: "json"},
    success: function(response){
        console.log(response);
    },
    error: function(response){
        console.log('error');
    }
}); */

//alternate way
//httpRequest.onreadystatechange=function () {
    
//}