document.addEventListener('DOMContentLoaded', function () {
    let cardEls = document.querySelectorAll(".card")
    let dotsEls = document.querySelectorAll(".three-dots")

    cardEls.forEach((cardEl, index) => {
        let dotsEl = dotsEls[index];

        // Mouse enters, change background color (blue)
        cardEl.addEventListener('mouseover', function () {
            dotsEl.style = "opacity:1";
        })

        // Mouse leaves, restore background color
        cardEl.addEventListener('mouseout', function () {
            dotsEl.style = "opacity:0";
        })
    })
})
