function Insertion()
{
    c_delay=0;

    for(var i=1;i<array_size;i++)
    {
        div_update(divs[i],div_sizes[i],"rgb(96, 95, 95)");//Color update
       var store=div_sizes[i];
        for(var j=i-1;j>=0;j--)
        {
           
    
            if(div_sizes[j]>store)
            {
                div_update(divs[j],div_sizes[j],"grey");//Color update
                div_update(divs[j+1],div_sizes[j+1], "grey");//Color update
                div_sizes[j+1]=div_sizes[j];
                div_update(divs[j+1],div_sizes[j+1], "grey");//Height update
                
            }
            else{
                break;
            }
            div_update(divs[j],div_sizes[j], "darkred");//Color update
            div_update(divs[j+1],div_sizes[j+1], "darkred");//Color update
        }
        div_sizes[j+1]=store;
        div_update(divs[j+1],div_sizes[j+1], "red");//Color updat
        div_update(divs[j+1],div_sizes[j+1], "darkred");//Color updat


    }
    div_update(divs[array_size-1],div_sizes[array_size-1], "rgb(96, 95, 95)");//Color update
    for(var i=0;i<array_size;i++)
    div_update(divs[i],div_sizes[i], "rgb(96, 95, 95)");//Color update
    enable_buttons();
}