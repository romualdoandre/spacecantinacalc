/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }
function mainEventHandler(){
    $('#sum-button').click(sum);
}

function sum(){
    var sum=0;
    showPopup(sum);
}

function showPopup(sum){
    console.log(sum);
    $('#result-value').text(sum+'$');
    $('#result-popup').modal();
}
// ...additional event handlers here...
