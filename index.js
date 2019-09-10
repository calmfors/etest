console.log("Hello")
function btnClick() {
    var x = document.getElementById("show");
    var y = document.getElementById("btn");
    if (x.style.display==="none"){
        document.getElementById("show").style.display="block";
        document.getElementById("btn").textContent="Hide";
    }
    else  if (y.innerHTML!=="Show"){
        document.getElementById("show").style.display="none";
        document.getElementById("btn").textContent="Show";    
    }
}
function btnClick3() {
    var z = document.getElementById("show");
    var y = document.getElementById("btn2");
    if (z.style.display==="none"){
        document.getElementById("show").style.display="block";
        document.getElementById("btn2").textContent="Hide";
    }
    else if (y.innerHTML!=="Show"){
        document.getElementById("show").style.display="none";
        document.getElementById("btn2").textContent="Show";    
    }
}
function btnClick2() {
    var y = document.getElementsByTagName("h1")[0];
    if (y.style.color==="rgb(255, 255, 255)"){
        document.getElementsByTagName("h1")[0].style.color="rgb(18, 182, 165)";
    }
    else{
        document.getElementsByTagName("h1")[0].style.color="rgb(255, 255, 255)";
    }
}