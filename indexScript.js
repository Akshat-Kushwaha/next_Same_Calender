function getit(c){
    console.log(c);
    document.getElementById("same-Calender").innerHTML="The next same calendar is <span style='color: blue;'>" + c + "</span>";
}
function sameyear(){
    var a=parseInt(document.getElementById("year").value);
    let b=a;
    console.log(a,b);
    while (true){
        if (b%4==0){
            if (b-a==1 || b-a==2){
                getit(a+11);
                break;
            }
            else if(b-a==0){
                getit(a+28);
                break;
            }
            else {
                getit(a+6);
                break;
            }
        }
        console.log(a+5)
        b++;

    }
}