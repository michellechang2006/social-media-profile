let modals = {
    "web": document.querySelector(".modal-web"),
    "fb": document.querySelector(".modal-fb"),
    "github": document.querySelector(".modal-github"),
    "ig": document.querySelector(".modal-ig")
}
let allModals = document.querySelectorAll(".modal-container")
let dotsEls = document.querySelectorAll(".three-dots")


let closeBtn = document.querySelector(".close-btn")
let mql = window.matchMedia("(max-width: 640px)");


function showModal(modalName) {
    if (modals[modalName]) {
        modals[modalName].style = "display:inline-flex;";
    }
}

function hiddenAllModal() {
    
    allModals.forEach((allModals) => {
        allModals.style = "opacity:0;"
    })

    if (mql.matches === true) {
        dotsEls.forEach((dotsEl) => {
            dotsEl.style = "opacity:1";
        })
    }
    
}