
 





function form2(){
    document.getElementById("myform1").style.display="none";
    document.getElementById("myform2").style.display="block";
}

function form1(){

    document.getElementById("myform2").style.display="none";
    document.getElementById("myform1").style.display="block";
}


function check(){
    var u=document.forms["myform"]["name"].value;
    var p1=document.forms["myform"]["pass1"].value;
    const errorEle=document.getElementById("error");
    let msg=[]
    var flag=0;
    var passw= /^[A-Za-z]\w{7,14}$/ ;
         if(!p1.match(passw))
            msg.push("Password must be atleast of 7 characters \nstarting with alphabets");
            else
            flag=1;
        
        if(u==''){
            msg.push("Enter a valid name")
        }
        
        
        if(msg.length>0){
            errorEle.innerText=msg.join(',');
            msg=[]
        }
        if(u!="" && flag==1){
            window.location.href="sort.html";
        
    }
}

function check2(){
    var u=document.forms["myform2"]["name2"].value;
    var p1=document.forms["myform2"]["pass3"].value;
    var p2=document.forms["myform2"]["pass4"].value;
    var rem2=document.getElementById("rem2");
    const errorEle=document.getElementById("error2");
    let msg=[]
    var flag=0;

    var passw= /^[A-Za-z]\w{7,14}$/ ;
         if(!p1.match(passw))
            msg.push("Password must be atleast of 7 characters \nstarting with alphabets");
            else
            flag=1;

        if(u==''){
            msg.push("*Name is required");
            
        }
        if(p1=='' || p2=='')
        msg.push("*Password is required");
       if(p1!=p2)
       msg.push("*Password must be same");
       
        if(msg.length>0){
            errorEle.innerText=msg.join(',');
            msg=[]
            
        }
        if(u!="" && p1==p2 && p1!="" && flag==1 ){
            window.location.href="sort.html";
       
        
    }
   
}