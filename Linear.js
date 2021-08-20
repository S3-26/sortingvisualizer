
function Linear(){

   var flag=0;
    for(var i=0;i<array_size;i++){
        if(divs[i].innerHTML==no){

          
            div_update(divs[i],"lightgreen");//Color update
            document.getElementById("found").style.display="block";
    document.getElementById("notfound").style.display="none";

            flag=1;
            break;
        }
        else{
            div_update(divs[i],"red");//Color update
            div_update(divs[i],"orange");//Color update
           
        }
    }
    if(flag==0){

        document.getElementById("notfound").style.display="block";
    document.getElementById("found").style.display="none";

    }
    enable_buttons();
}