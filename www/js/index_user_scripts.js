/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #sum-button */
    
    
        /* button  #sum-button */
    $(document).on("click", "#sum-button", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* button  #button-about */
    
    
        /* button  #button-about */
    $(document).on("click", "#button-about", function(evt)
    {
         /*global activate_page */
         activate_page("#uib_page_1"); 
         return false;
    });
    
        /* button  #back-button */
    $(document).on("click", "#back-button", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_63_17"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
