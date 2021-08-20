function Binary(){


    sort();
    var l=0;
    var h=array_size-1;
    var mid=0;
    var flag=0;
    h++;
   while(l<=h){
         mid=Math.floor((h+l)/2);
 
         div_update(divs[mid],"lightgreen");//Color update
        if(divs[mid].innerHTML==no){
            div_update(divs[mid],"lightgreen");//Color update
            document.getElementById("found").style.display="block";
          document.getElementById("notfound").style.display="none";

            flag=1;
               break;
        }
         else if(no>divs[mid].innerHTML){
        div_update(divs[mid],"red");//Color update
                l=mid+1;
        }
        else{
        div_update(divs[mid],"brown");//Color update

            h=mid-1;
        }
    }
    if(flag==0){

        document.getElementById("notfound").style.display="block";
    document.getElementById("found").style.display="none";

    }
    enable_buttons();
}

function sort(){
    for(var i=0;i<array_size;i++){
        for(var j=i+1;j<array_size;j++){
            if(divs[i].innerHTML>divs[j].innerHTML){
                var temp=divs[i].innerHTML;
                divs[i].innerHTML=divs[j].innerHTML;
                divs[j].innerHTML=temp;
            }
        }
    }
}