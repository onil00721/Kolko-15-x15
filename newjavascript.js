var jakiZnak = false; // false = O true = X

var tab = [];


    function click() {          //tutaj jest odczytywany numer kratki i wstawiany odpowiedni znak (X lub O ) oraz dodawana w miejsce znaku wartość (1=O lub X=10)
        $( "p" ).click(function() {           
        var htmlString = $(this).html();
   
            if ( htmlString ){
               
                if (jakiZnak==false){
                     $("#"+ htmlString).html("<p>X</p>");
                     $("#"+htmlString+" "+"p").css({"opacity": "0.9", "font-size": "100%"});
                    jakiZnak=true;
                   
                    //var d= parseInt(htmlString);   //konwersja htmlString na typ number   
                    var d=0;
                    tab [htmlString]=  d + 10 ; //dodawanie liczby do tablicy
                    console.log(tab[htmlString] + " Liczba z tablicy ");                    
                }  
                
                
                else{
                    $("#"+ htmlString).html("<p>O</p>");                   
                    $("#"+htmlString+" "+"p").css({"opacity": "0.9", "font-size": "100%"});
                    jakiZnak=false;
                                        
                     //var d= parseInt(htmlString);   //konwersja htmlString na typ number   
                     var d=0;
                     tab [htmlString]=  d + 1 ; //dodawanie liczby do tablicy
                     console.log(tab[htmlString] + " Liczba z tablicy ");
                     console.log(tab[49] + " Liczba z tablicy o ind 49 ");
                    
                }
                
            }           
        
        });
    }








    


   

 


//$( "button" ).click(function() {  //dodawanie kolejnych kratkek o kolejnym id i takim samym numerze 
    
    for(var i=1; i<257; i++){   //generujemy kolejne kwadraty z ich numerami id i nr. p 
    //tab[i]=i;
       
     $(" .rzad ").append(  '<div id=' + i + ' class="kratka">  <p>'+ i +"</p> </div>" );
           
    }

      click();
    
    
     
    //});








