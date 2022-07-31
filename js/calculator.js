let form1=document.getElementById("firstInput");
let form2=document.getElementById("operator");
let form3=document.getElementById("secondInput");
let submit1=document.getElementById("one");
let submit2=document.getElementById("two");
let three=document.getElementById("three");
let submit3=document.getElementById("plus");
let minus=document.getElementById("minus");
let equals=document.getElementById("equals");
let para=document.getElementById("output");
    submit1.onclick=function(){
        if(submit1.value=="1")
        {
            form1.value +=submit1.value;
        }
    }
    submit2.onclick=function(){
        if(submit2.value=="2")
        {
            form1.value +=submit2.value;
        }
    }
    three.onclick=function(){
        if(three.value=="3")
        {
            form1.value +=three.value;
        }
    }
    equals.onclick=function(){
        para.textContent =`Answer=${eval(form1.value)}`;
        form1.value += equals.value;
        
    }
    submit3.onclick=function(){
        if(submit3.value=="+")
        {
            form1.value +=submit3.value;
        }
    }
    minus.onclick=function(){
        if(minus.value=="-")
        {
            form1.value +=minus.value;
        }
    }
    

