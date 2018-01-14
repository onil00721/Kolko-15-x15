

//var t=1;
//var a,b,e,f,g;//zmienne potrzebne do sortowania tablicy 2
var tab=[]; //tablica przechowująca informacje o zapełnionych indeksach
var tab2=[];//tablica zawierająca numery zwycięzkich indeksów
var tab3=[];//tablica zawierająca numery zwycięzkich indeksów
var tab4=[];//tablica zawierająca numery zwycięzkich indeksów
var tab5=[];//tablica zawierająca numery zwycięzkich indeksów

// uzywane zmienne globalne i k l h j m q w o v a b c d  f g n p 


for (var i=1; i<257; i++){
tab[i]=i;

    
  tab[145]=1000  
  tab[130]=1000  
  tab[115]=1000  
  tab[100]=1000  
  tab[85]=1000
    
 
    
  
    
}



for (var k=1; k<=192 ; k++){  
       var l=0;
        var h=0;
        
 for (var j=k; j<= k+65; j+=16){             //przeszukujem pola pionowo po 5 kratek i z przesunięciem w bok   
  
     if (tab[j]==1000){       
         tab2[h]=j;       
         h++;   
         l++;
         
         if (l==5){                //zwraca informacje o numerach zwycięzkich pól 
       console.log("hit 2 ");                   
       console.log(tab2);                   
         }
      }
    }
}




var m=1;
for (var o=m; o<=256; o++){           //wyszukujemy zwycięzkie pola w poziomie 
    
     var q=0;
     var w=0;       
 
    if(o>=12+m){        
        o+=4;
        m+=16;        
      }
     
     for ( var v=o; v<6+o; v++){  
          
         if (tab[v]==1000){       
           tab3[w]=v;       
           w++;   
           q++;
               
         if (q==5){                //zwraca informacje o numerach zwycięzkich pól w poziomie          
           console.log("hit 3 ");
           console.log(tab3);
         
           }           
        }         
    }
    
}



var r=12;
for (var a=1; a<=188 ; a++){  
       var b=0;
       var c=0;
        
      if ( a <= r   ){        
       }
    else {
       a+=4;
       r+=16;
        }
       
 for (var d=a; d<= a+68; d+=17){             //przeszukujem pola na ukos w prawo po 5 kratek i z przesunięciem w bok 
    
     if (tab[d]==1000){       
         tab4[c]=d;       
         c++;   
         b++;
        
     if (b==5){                //zwraca informacje o numerach zwycięzkich pól 
         console.log("hit 4");                   
         console.log(tab4);                   
         }
      }
    }
}




var s=181;
for (var f=192; f>=5 ; f--){  
      var g=0;
      var n=0;
   
     if ( f>=s ){        
      }   
    else  {
        f-=4;
        s-=16;       
     }    
    
 for (var p=f; p<=f+68; p+=15){             //przeszukujem pola na ukos w lewo  po 5 kratek i z przesunięciem w bok                 
     if (tab[p]==1000){       
         tab5[n]=p;       
         n++;   
         g++;                             

         if (g==5){                //zwraca informacje o numerach zwycięzkich pól 
       console.log("hit 5 ");                   
        console.log(tab5);                   
         }
      }
    }
}











