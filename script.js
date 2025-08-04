const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

//change product varient image
function changeImage(imgElement) {
    const mainImage = document.getElementById("mainImage");
    const allThumbs = document.querySelectorAll(".thumbnails img");

    allThumbs.forEach(img => img.classList.remove("active"));
    imgElement.classList.add("active");

    mainImage.src = imgElement.src;
}

// Payment Method Selection
const paymentContainer = document.getElementById("paymentMethods");
const paymentOptions = paymentContainer.querySelectorAll("img");

paymentOptions.forEach(img => {
    img.addEventListener("click", () => {
        paymentOptions.forEach(i => i.classList.remove("active-payment"));
        img.classList.add("active-payment")
    });
});