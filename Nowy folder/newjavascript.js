


var tab=[];

for (var i=1; i<257; i++){
tab[i]=i;

  tab[87]=10  
  tab[103]=10  
  tab[119]=10  
  tab[135]=10  
  tab[151]=10  
        
}



for (var k=1; k<=192 ; k++){
   // console.log(k+ " wartość k");
    //console.log(tab[j]+" wartość wypisana z 1 1 1pętli");

    

    for (var j=k; j<= k+65; j+=16){
       // console.log(k+ " wartość k");
       // console.log(j+ " wartość j");
    
    if (tab[j]==10){
        
       // console.log(  j + '  tab[j]' + "  spełnion równosć  dziesięć");  
     
        var tab2=[];
      
        tab2[j]=j;
        console.log(tab2[j]);
        
        var n = $ (tab2[j]).length;
        
        console.log(n+"Wielkość tablicy ");
        
        
      
    }

}                                   //logika przeszukująca rzędy w pionie 
}


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
