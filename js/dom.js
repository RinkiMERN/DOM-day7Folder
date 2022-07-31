//set Item
// window.localStorage.setItem("username","rinki");
// //getItem
// let username=window.localStorage.getItem("username");
// console.log(username);

let form=document.querySelector("form");
let profile=document.querySelector("#profile");
let login=document.querySelector("#login");
let logout=document.querySelector("#logout");
form.addEventListener("submit",e=>{
    e.preventDefault();
    let username=e.target[0].value.trim();
    let password=e.target[1].value.trim();
    let userData={username,password};
    //store this data into local storage
    window.localStorage.setItem("login",JSON.stringify(userData));
})