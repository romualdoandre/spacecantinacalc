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

function sum(){
    var value=0;
    var star=$('#star-value').val();
    var client=$('#client-value').val();
    var alien=$('#alien-value').val();
    var ciborg=$('#ciborg-value').val();
    var robot=$('#robot-value').val();
    var demand=$('#demand-value').val();
    var goal=$('#goal-value').val();
    var insatisfaction=$('#insatisfaction-value').val();
    var manager=$('#manager-value').val();
    var maitre=$('#maitre-value').val();
    var chef=$('#chef-value').val();
    var money=$('#money-value').val();
    var satisfaction=$('#insatisfaction-check').prop('checked')?3:0;
    value=star+client+alien+ciborg+robot+demand+goal+money+satisfaction-insatisfaction-manager-maitre-chef;
    
    showPopup(value);
}

function showPopup(sum){
    $('#result-value').text(sum+'$');
    $('#result-popup').modal();
}
// ...additional event handlers here...
