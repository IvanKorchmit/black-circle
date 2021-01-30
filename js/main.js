let isOver = true;
let isPlaying = false;
let animDuration = "0.5s";
let menu_body = document.querySelector(".menu");
menu_body.innerHTML = `
<ul>
<li class="menu-button">Show Menu</li>
<li class="home"><a href="index.html">Home</a></li>
<li class="bands">Bands</li>
<li class="burzum"><a href="burzum.html"></a></li>
<li class="mayhem"><a href="mayhem.html"></a></li>
<li class="darkthrone"><a href="darkthrone.html"></a></li>
<li class="dissection"><a href="dissection.html"></a></li>
<li class="summoning"><a href="summoning.html"></a></li>
</ul>
`;
let menu = document.querySelector(".menu > ul");
let main = document.querySelector(".main");
function openNav() {
    menu_body.style.animationName = "openNav";
    menu_body.style.animationDuration = animDuration;
    menu_body.style.animation;
    
    
    main.style.animationName = "moveMarginLeft";
    main.style.animationDuration = animDuration;
}

function closeNav() {
    menu_body.style.animationName = "closeNav";
    menu_body.style.animationDuration = animDuration;

    main.style.animationName = "moveMarginRight";
    main.style.animationDuration = animDuration;
}
menu_body.addEventListener("animationend", (e)=>{
    if(e.animationName == "closeNav" || e.animationName == "openNav") {
        isPlaying = false;
        console.log(e.animationName)
        if(!isOver) {
            closeNav();
        }
        
    }
    e.preventDefault();
});

menu_body.addEventListener("animationstart", (e)=>{
    if(e.animationName == "closeNav" || e.animationName == "openNav") {
        isPlaying = true;
        console.log(e.animationName)
        
    }
    e.preventDefault();
});

menu.addEventListener('mouseover',(e)=>{
    isOver = true;
    if(!isPlaying) {
        openNav();
    }
    e.preventDefault();
});
menu.addEventListener('mouseleave',(e)=>{
    isOver = false;
    if(!isPlaying) {
        closeNav();
    }
    e.preventDefault();
});

closeNav();