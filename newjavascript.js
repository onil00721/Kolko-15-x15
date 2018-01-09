
    function click(){

        $( "#4" ).click(function() { 
          
     var htmlString = $("#4 p").html();
   
            console.log(htmlString + "  Jeden");
            
            
            if ( htmlString ==   '4'  ){
        console.log("Coś trafiłeś");
        console.log(htmlString + "Dwa");
        
     
           
        
        
}
             });
    }

    
    function wstaw(){            //wstawianie x do kratkek po kliknięciu 

        $( "#2").click(function() { 

        $("#2").html("<p>X</p>");
        $("#2 p ").css({"opacity": "0.9", "font-size": "100%"});
        

        });

     }

 


//$( "button" ).click(function() {  //dodawanie kolejnych kratkek o kolejnym id i takim samym numerze 
    
    for(var i=1; i<257; i++){   //generujemy kkolejne kwadraty 
    
     $(" .rzad ").append(  '<div id=' + i + ' class="kratka">  <p>'+ i +"</p> </div>" );
           
    }

 

      wstaw();    
      click();
   
   
    
     
    //});








