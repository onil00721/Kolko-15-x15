

var t=1;
var a,b,e,f,g;//zmienne potrzebne do sortowania tablicy 2
var tab=[]; //tablica przechowująca informacje o zapełnionych indeksach
var tab2=[];//tablica zawierająca numery zwycięzkich indeksów

for (var i=1; i<257; i++){
tab[i]=i;

  tab[87]=1000  
  tab[88]=1000  
  tab[89]=1000  
  tab[90]=1000  
  tab[91]=1000
    
    
}



for (var k=1; k<=192 ; k++){  
       var l=0;
        var h=0;
        
 for (var j=k; j<= k+65; j+=16){             //przeszukujem pola pionowo po 5 kratek i z przesunięciem w bok    
    console.log(j);
     if (tab[j]==1000){       
         tab2[h]=j;       
         h++;   
         l++;
         
         if (l==5){                //zwraca informacje o numerach zwycięzkich pól 
             console.log("hit");
              console.log(tab2);
         }
      }
    }
}

