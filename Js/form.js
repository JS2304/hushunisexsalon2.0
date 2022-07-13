
function what1(){

   
    var fname =document.getElementById("input1").value;
    var lastname=document.getElementById("input2").value;
    var date=document.getElementById("input3").value;
    var phone=document.getElementById("input4").value;
    var email=document.getElementById("input5").value;
    var textarea=document.getElementById("input6").value;
   
    var Url="https://api.whatsapp.com/send?phone=+918319251431"
    + "first Name :"+ fname + "%0a"
    + "Last Name :"+ lastname + "%0a"
    + "Date :"+ date + "%0a"
    + "Phone No :"+ phone + "%0a"
    + "Email:"+ email +"%0a"
    + "Comments :"+ textarea;

    window.open(Url).focus();
}
