
    function click(){

        $( ".kratka" ).click(function() { 
        console.log("Coś klikłeś");

         console.log("j= "+ j);
        
         
        
        for(var j=1; j<257; j++){
              console.log("j2= "+ j);
             var htmlString = $(".kratka").html();
    if ( htmlString ==  '<div id=' + j + ' class="kratka">  <p>'+ j +"</p> </div>" ){
        console.log("Coś trafiłeś");
        
    }
        
        
    }
             });
    }

    
    function wstaw(){            //wstawianie x do kratkek po kliknięciu 

        $( "#2" ).click(function() { 

        $("#2").html("<p>X</p>");
        $("#2 p ").css({"opacity": "0.9", "font-size": "100%"});
        

        });

     }

 


//$( "button" ).click(function() {  //dodawanie kolejnych kratkek o kolejnym id i takim samym numerze 
    
    for(var i=1; i<257; i++){
    
     $(" .rzad ").append(  '<div id=' + i + ' class="kratka">  <p>'+ i +"</p> </div>" );
           
    }

      wstaw();    
      click();
   
   
    
     
    //});








