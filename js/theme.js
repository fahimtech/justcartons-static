let items = document.querySelectorAll('.carousel .carousel-item')

// 
let searchHeader = document.getElementById("search-header");
let menuHeader = document.getElementById("menu-header");
let scrollTopButton = document.getElementById("scrollTopButton");

window.onscroll = function (event) {
    let searchTop = searchHeader.getBoundingClientRect().top;
    let menuTop = menuHeader.getBoundingClientRect().top;
    if (searchTop == 0) {
        searchHeader.classList.add("is-sticky");
    } else {
        searchHeader.classList.remove("is-sticky");
    }

    if (menuTop == 62) {
        menuHeader.classList.add("is-sticky");
    } else {
        menuHeader.classList.remove("is-sticky");
    }
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// 

// $('.carousel').carousel({
//     interval: 2000
// })

// 
/* Set the width of the side navigation to 250px */
function openReqQuote() {
    document.getElementById("myRequestQuoteNav").classList.add("is-req-nav-open");
}

/* Set the width of the side navigation to 0 */
function closeReqQuote() {
    document.getElementById("myRequestQuoteNav").classList.remove("is-req-nav-open");
}