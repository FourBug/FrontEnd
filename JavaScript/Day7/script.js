function bill(){
    var amt = 0;
    for(let i=1;i<=5;i++)
        if( document.getElementById("item"+i).checked )
            amt=amt+parseInt(document.getElementById("item"+i).value);

    document.getElementById("bill").innerHTML = "Bill : "+amt+".00/-";
}