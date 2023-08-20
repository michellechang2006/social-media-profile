let slideIndex = 0;
let slides = document.getElementsByClassName("slider");
let dots = document.getElementsByClassName("dot");






function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slider");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds

}

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function () {
        let dotIndex = Array.from(dots).indexOf(this);
        // 切換顯示對應索引的 .slide 元素
        for (let j = 0; j < slides.length; j++) {
            slides[j].style.display = "none";
            dots[j].className = dots[j].className.replace(" active", "");
        }

        dots[dotIndex].className += " active";
        slides[dotIndex].style.display = "block";

    });
}
