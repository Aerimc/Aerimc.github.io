function calcTip(){ 
    let subtot= parseInt(document.getElementById("subtotal").value); 
    let tip= parseInt(document.getElementById("tip").value); 
    document.getElementById("subtotal").value = "";
    document.getElementById("tip").value = "";
    document.getElementById("total").innerHTML="$" + (subtot+(subtot*tip)/100); 
 } 