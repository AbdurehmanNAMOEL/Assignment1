let istrue=false;
function block()
{
    istrue=!istrue;
    if(istrue==true){
    document.getElementById('block').style.display="flex";
    }
    if(istrue==false)
    {
        document.getElementById('block').style.display="none";
    }
    alert(istrue);
}