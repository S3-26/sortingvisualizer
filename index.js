var inp=document.getElementById("inputtext").value;
inp.addEventListener('input',inputit);
function inputit(){
    window.alert('dhkd');
   window.location.href="sort.html";
}

function responsive_menu(){
    var e=document.getElementById('menu_list');
    if(e.className === 'navbar1'){
        e.className += " responsive";
    }
    else{
        e.className='navbar1';
    }
}
