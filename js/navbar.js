
// variables****************************
let header  =   document.querySelector(".banner"),
    primary =   document.querySelector(".primary"),
    shop    =   document.querySelector(".shop-content")
    second  =   document.querySelector(".secondary")
    navbar  =   document.querySelector(".navbar"),
    footer  =   document.querySelector(".footer");
    

// // event listeners*********************
//     navbar.addEventListener("click", toggleNav);


//     header.addEventListener("click", retractNav);
//     primary.addEventListener("click", retractNav);
//     second.addEventListener("click", retractNav);
//     shop.addEventListener("click", retractNav);
//     footer.addEventListener("click", retractNav);
//     window.addEventListener("scroll",retractNav);
    


// // expand/retract the sidenavbar*******
//     function toggleNav() {
//         navbar.classList.toggle("navbar-is-success");
//         navbar.classList.toggle("navbar");
//     }

// // retract sidebar outside box*********
//     function retractNav() {
//         navbar.classList.replace("navbar-is-success", "navbar")
//     }

//shrink on scroll
    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop > 80) {
        
        document.querySelector(".navbar").style.padding = "0.5em 0";
        document.querySelector(".navbar-is-success").style.padding = "0.5em 0";
    } 
    else {
    
        document.querySelector(".navbar").style.padding = "1.5em 0";
        document.querySelector(".navbar-is-success").style.padding = "0.5em 0";
    }
}
