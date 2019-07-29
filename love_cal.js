function love(){
    var num1,num2;
    num1 = document.getElementById("int1").value;
    num2 = document.getElementById("int2").value;
    var len1 = num1.length;
    var len2 = num2.length;

    var lp = Math.floor(Math.random()*80)+20;
    var lp1 = Math.floor(Math.random()*90)+10;
    var lp2 = Math.floor(Math.random()*70)+30;
    var lp3 = Math.floor(Math.random()*10)+5;

   var per = (len1 * lp3);
   var per1 = (len2 * lp3);
 
   if (per > per1); {
       alert("You love " + num2 + " " +lp +" %");
       alert(num2 + " loves you "+ lp1 + " %");
   }

}
