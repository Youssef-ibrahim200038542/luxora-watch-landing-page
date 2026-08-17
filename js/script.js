console.log("LUXORA website loaded successfully!");

const modal = document.getElementById("watchModal");
const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");

const viewButtons = document.querySelectorAll(".watch-link");


// Open Modal
viewButtons.forEach(button => {

    button.addEventListener("click", function (e) {

        e.preventDefault();

        const card = this.closest(".watch-card");

        const image = card.querySelector("img").src;
        const title = card.querySelector("h3").textContent;
        const price = card.querySelector("p").textContent;

        modalImage.src = image;
        modalTitle.textContent = title;
        modalPrice.textContent = price;

        modalDescription.textContent =
            "A beautifully crafted Luxora timepiece designed with precision, elegance, and timeless style.";

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


// Close Modal
closeModal.addEventListener("click", function () {

    modal.classList.remove("active");

    document.body.style.overflow = "";

});


// Close Modal when clicking overlay
document.querySelector(".modal-overlay").addEventListener("click", function () {

    modal.classList.remove("active");

    document.body.style.overflow = "";

});