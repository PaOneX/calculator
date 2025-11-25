function cal(){

   var num1= document.getElementById("num1").value;
   var operation= document.getElementById("operation").value;
   var num2= document.getElementById("num2").value;

    if(operation=="+"){
        result=num1+num2;
    }else if(operation=="-"){
        result=num1-num2;
    }else if(operation=="*"){
        result=num1*num2;
    }else if(operation=="/"){
        result=num1/num2;
    }else{
        result="invalid operation";
    }
    console.log("jkjkj")
    document.getElementById("output").innerHTML=result;

     
}