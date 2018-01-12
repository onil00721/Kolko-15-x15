


var tab=[];
 var tab2=[];
for (var i=1; i<257; i++){
tab[i]=i;
//tab2[i]=0;



  tab[87]=1000  
  tab[103]=1000  
  tab[119]=1000  
  tab[135]=1000  
  tab[151]=1000
    
}

//console.log(tab.indexOf(1000));





    var h=0;

for (var k=1; k<=192 ; k++){   

   var l=1;
  

    for (var j=k; j<= k+65; j+=16){             //przeszukujem pola pionowo       
    
    if (tab[j]==1000){       
        //console.log(tab2);
      
    
       
        
       
        
        tab2[h]=j;
         
     //  console.log(tab2);
        // console.log(h); 
        
            // console.log(tab2);
        
        
         l++;
           h++;
        if(l==6){
             console.log("Jesteś zwycięzcą");
       
            
    }}}}

        tab2.sort();
    //console.log(tab2);
       
            
       var t=1;
     var a,b,e,f,g;

      for( t=0; t<tab2.length; t++){
        console.log(tab2);
        e=t+1;
        f=t+1;
        g=t+2;
        a =tab2.slice(t,e);
        b = tab2.slice(f,g);
        a = parseInt(a);
        b = parseInt(b);


            if(a!=b){

        //console.log(a + "   a");  
               // console.log(tab2+ "    tab2 ");
        }   
       }

               
             
                                   
             
             
        
     /*   l++;
         
        if(l==6){
             console.log("Jesteś zwycięzcą");
             //console.log(tab2 + "szczęśliwe numery to ");
            
        
             
            
               */        
             
        
     
        
       
      
                                   //logika przeszukująca rzędy w pionie 



/*
console.log(tab[87]);
console.log(tab[103]);
console.log(tab[119]);
console.log(tab[135]);
console.log(tab[151]);
console.log(tab[152]);
console.log(tab[153]);
console.log(tab[154]);
        
        

/*for (k=1; k<=192 ; k++){
    if (tab[k]==10){
        
        console.log(  k + 'tab[k]' + "  test test");        
    }   
}




 if(j==10){
    console.log(tab[j]+" wartość wypisana z pętli");
}





*/
