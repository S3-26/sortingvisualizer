function Bubble()
{
    c_delay=0;
    
    for(var i=0;i<array_size-1;i++)
    { 
        var flag=0;
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"rgb(90, 60, 65)");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "rgb(90, 60, 65)");//Color update
                div_update(divs[j+1],div_sizes[j+1], "rgb(90, 60, 65)");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "rgb(90, 60, 65)");//Height update
                div_update(divs[j+1],div_sizes[j+1], "rgb(90, 60, 65)");//Height update
                flag=1;
            }
            div_update(divs[j],div_sizes[j], "grey");//Color updat
        }
        if(flag==0)
        break;
        div_update(divs[j],div_sizes[j], "red");//Color updat
        div_update(divs[j],div_sizes[j], "rgb(96, 95, 95)");//Color update
    }
    for(var i=0;i<array_size;i++)
    div_update(divs[i],div_sizes[i], "rgb(96, 95, 95)");//Color update

    enable_buttons();
}