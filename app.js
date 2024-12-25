let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");
let btn2 = document.querySelector(".del");

btn.addEventListener("click",function(event){
    let item = document.createElement("li");
    item.innerText = input.value;
    let del = document.createElement("button")
    del.innerText = "delete";
    del.classList.add("del");
    item.appendChild(del);
    ul.appendChild(item);
    console.log(input.value);
    input.value = "";
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});
