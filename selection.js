function Selection()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {

        div_update(divs[i],div_sizes[i],"grey");//Color update
        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"rgb(90, 60, 65)");//Color update
            if(div_sizes[j]<div_sizes[i])
            {
                div_update(divs[j],div_sizes[j], "rgb(90, 60, 65)");//Color update
                div_update(divs[i],div_sizes[i], "rgb(90, 60, 65)");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[i];
                div_sizes[i]=temp;

                div_update(divs[j],div_sizes[j], "rgb(90, 60, 65)");//Height update
                div_update(divs[i],div_sizes[i], "rgb(90, 60, 65)");//Height update
            }
            div_update(divs[j],div_sizes[j], "grey");//Color updat
        }
        div_update(divs[i],div_sizes[i], "red");//Color updat
        div_update(divs[i],div_sizes[i], "rgb(96, 95, 95)");//Color update
    }
    div_update(divs[array_size-1],div_sizes[array_size-1], "rgb(96, 95, 95)");//Color update
    for(var i=0;i<array_size;i++)
    div_update(divs[i],div_sizes[i], "rgb(96, 95, 95)");//Color update
    enable_buttons();
}