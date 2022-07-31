let calculate=document.getElementById("calculation");
let td1=document.getElementsByTagName("td");
let input1=document.getElementById("output");
let span1=document.getElementById("ans");
calculate.addEventListener("click",e=>{
    if(e.target.innerText=="="){
        
        span1.innerText=`=${eval(input1.value)}`;
    }
    else if(e.target.innerText=="Clear All")
    {
        input1.value="";
        span1.innerText="";  
    }
    else{
        input1.value +=e.target.textContent;
    }   })