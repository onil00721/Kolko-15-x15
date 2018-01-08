

    

$( ".rzad" ).click(function() {     
       $(" .kratka p").html("<p>X</p>");
    $("p").css({"opacity": "0.9", "font-size": "100%"});
    // $("#1 p").css("background-color", " blue");
     $(" .calosc ").html('<div  class="kratka">  <p>ohh</p> </div>');
    
});





$( "button" ).click(function() {  
    
    for(var i=1; i<257; i++){
    
     $(" .rzad ").append(  '<div  class="kratka">  <p>'+ i +"</p> </div>" );
              

    console.log(i);
    }
 //$(".kratka").css({"opacity": "0.9", "margin:left":  "j" + "px" "font-size": "100%"});
              
              
    });




 //<div  class="kratka">  <p>k</p> </div>


  //<div class="kratka"><p>fa</p></div>