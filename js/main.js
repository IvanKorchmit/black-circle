let isOver = true;
let isPlaying = false;
let animDuration = "0.5s";
let menu_body = document.querySelector(".menu");
let menu_reserve = `
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
menu_body.innerHTML = menu_reserve;
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
menu_body.addEventListener("animationend", (e) => {
    if (e.animationName == "closeNav" || e.animationName == "openNav") {
        isPlaying = false;
        if (!isOver) {
            closeNav();
        }

    }
    e.preventDefault();
});

menu_body.addEventListener("animationstart", (e) => {
    if (e.animationName == "closeNav" || e.animationName == "openNav") {
        isPlaying = true;

    }
    e.preventDefault();
});

menu.addEventListener('mouseover', (e) => {
    isOver = true;
    if (!isPlaying) {
        openNav();
    }
    e.preventDefault();
});
menu.addEventListener('mouseleave', (e) => {
    isOver = false;
    if (!isPlaying) {
        closeNav();
    }
    e.preventDefault();
});

closeNav();

addEventListener("resize", (e) => {
    adaptMenu();
    e.preventDefault();

});
adaptMenu();
addEventListener("load",(e)=>{
    adaptMenu();
});
function adaptMenu() {
    console.log(`Loaded  with ${screen.width} pixels (width)`)
    if (screen.width <= 768) { //tablet
        if(document.querySelector(".menu-button") != undefined) {
            document.querySelector(".menu-button").remove();
            document.querySelector(".bands").remove();


            menu_body.style.width = screen.width+"px";
            let menuWidth = screen.width / document.querySelectorAll(".menu > ul > li").length-1;
            document.querySelectorAll(".menu > ul > li").forEach(element => {
                element.style.width = `${menuWidth}px`;
            });



            console.log(menu_body.style.width = screen.width+"px");
            console.log(document.querySelector(".menu > ul > li").style.width);
        }
    } else {
        document.querySelector(".menu").innerHTML = menu_reserve;
        menu = document.querySelector(".menu > ul");
    }
    menu.addEventListener('mouseleave', (e) => {
        isOver = false;
        if (!isPlaying) {
            closeNav();
        }
        e.preventDefault();
    });
    menu.addEventListener('mouseover', (e) => {
        isOver = true;
        if (!isPlaying) {
            openNav();
        }
        e.preventDefault();
    });
}