

//var t=1;
//var a,b,e,f,g;//zmienne potrzebne do sortowania tablicy 2
var tab=[]; //tablica przechowująca informacje o zapełnionych indeksach
var tab2=[];//tablica zawierająca numery zwycięzkich indeksów

for (var i=1; i<257; i++){
tab[i]=i;

  tab[87]=1000  
  tab[103]=1000  
  tab[119]=1000  
  tab[135]=1000  
  tab[151]=1000
    
    
    
  
  tab[162]=1000  
  tab[163]=1000  
  tab[164]=1000  
  tab[165]=1000  
  tab[166]=1000
 
    
}



for (var k=1; k<=192 ; k++){  
       var l=0;
        var h=0;
        
 for (var j=k; j<= k+65; j+=16){             //przeszukujem pola pionowo po 5 kratek i z przesunięciem w bok    
   // console.log(j);
     if (tab[j]==1000){       
         tab2[h]=j;       
         h++;   
         l++;
         
         if (l==5){                //zwraca informacje o numerach zwycięzkich pól 
       // console.log("hit");
        //console.log(tab2);
         }
      }
    }
}
/*
for (var k=1; k<=241 ; k+=16){  
       var l=0;
        var h=0;
            console.log(k);
 for (var j=k; j<= k+4; j++){  
*/


var s=0;
for (var k=1; k<=241+s ; k+=16){  
       //var l=0;
        //var h=0;
    // console.log(k+"kk");
    for (var j=k; j<=k+4; j++){    
 //console.log(k);
         console.log(s);
       var g=241;
    if (k==g){
        g=241+s
         console.log(s);
        s++;     
       k=0+s;
         console.log(s);
    }
    }
    /*        
 for (var j=1; j<=5; j++){             //przeszukujem pola pionowo po 5 kratek i z przesunięciem w bok   
 console.log(j);
   
     
     
     /*if (tab[j]==1000){       
         tab2[h]=j;       
         h++;   
         l++;
         k++;
         if (l==5){                //zwraca informacje o numerach zwycięzkich pól 
            // console.log("hit");
              //console.log(tab2);
         }
      } */
 }

