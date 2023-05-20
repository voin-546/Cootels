let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
    let header = document.querySelector("header");
    header.classList.toggle("show");
    hamburger.classList.toggle("open");
})
const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})
let icon = document.querySelector(".appearance");
icon.onclick = function () {
    icon.classList.toggle("switch");
    let body = document.querySelector("body");
    body.classList.toggle("dark");
}