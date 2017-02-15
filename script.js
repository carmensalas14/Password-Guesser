$(document).ready(function(){
    
    $("#button").click(function(){
     
     var mypassword = $("input").val(); 
     
     if( mypassword ==="hsfirox"){
        $("h2").append(" Correct")
         } else if( mypassword!=="hsfirox"){
            $("h2").append("Incorrect, please try again")
     }
    });
    
   
        
        
        
});