

    

$( ".kratka" ).click(function() {     
       $(" .kratka p").html("<p>X</p>");
    $("p").css({"opacity": "0.9", "font-size": "100%"});
    // $("#1 p").css("background-color", " blue");
     $(" .calosc ").html('<div  class="kratka">  <p>ohh</p> </div>');
    
});


$( "button" ).click(function() {  
    
    for(var i=0; i<10; i++){
    
     $(" .rzad ").append(  '<div  class="kratka">  <p>k</p> </div>' );
               //$("kratka").css({"opacity": "0.9", "margin:left":  "j" + "px" "font-size": "100%"});

    console.log(i);
    }

              
              
    });




 //<div  class="kratka">  <p>k</p> </div>