var all_btn = document.querySelectorAll(".taps .btn");
var all_div_cont = document.querySelectorAll(".content div");

all_btn.forEach((btn =>{
    btn.addEventListener("click", remov_add_active);
    btn.addEventListener("click", show_content);
}));


function remov_add_active(){
    // remve class active from button
    all_btn.forEach((btn)=>{
        btn.classList.remove("active")
    });
    // add class active in button
    this.classList.add("active");
};
// ================================================
function show_content(e){

    all_div_cont.forEach((divs)=>{
        divs.style.display = "none"
    });
    document.querySelector(e.currentTarget.dataset.show).style.display = "block";
};

// =================================================



// ===================================================================
// ====================theem dark & light

var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("theem-dark");
    if(document.body.classList.contains("theem-dark")){
        icon.src = "img/sun.png";
    }else{
        icon.src = "img/moon.png";
    };
};
