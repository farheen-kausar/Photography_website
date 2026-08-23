// ===============================
// SIDEBAR MENU
// ===============================

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const text = link.innerText;

        if (text === "Gallery") {
            document.querySelector(".photography_section")
                .scrollIntoView({ behavior: "smooth" });
        }

        else if (text === "Shortcuts") {
            alert("Shortcuts: Use the menu to explore the website.");
        }

        else if (text === "Exhibits") {
            alert("Exhibits section coming soon!");
        }

        else if (text === "Events") {
            alert("No upcoming events at the moment.");
        }

        else if (text === "Store") {
            alert("Photography prints and products coming soon!");
        }

        else if (text === "Contact") {
            showContactForm();
        }

        else if (text === "Feedback") {
            showFeedbackForm();
        }

    });

});


// ===============================
// PHOTO CARDS
// ===============================

const cards = document.querySelectorAll(".photo_card");

cards.forEach(function (card) {

    card.addEventListener("click", function () {

        const title = card.querySelector("h3").innerText;
        const description = card.querySelector("p").innerText;

        alert(title + "\n\n" + description);

    });

});


// ===============================
// CONTACT FORM
// ===============================

function showContactForm() {

    const name = prompt("Enter your name:");

    if (name === null || name.trim() === "") {
        return;
    }

    const email = prompt("Enter your email:");

    if (email === null || email.trim() === "") {
        return;
    }

    const message = prompt("Enter your message:");

    if (message === null || message.trim() === "") {
        return;
    }

    alert("Thank you, " + name + "!\nYour message has been received.");
}


// ===============================
// FEEDBACK FORM
// ===============================

function showFeedbackForm() {

    const feedback = prompt("Please enter your feedback:");

    if (feedback === null || feedback.trim() === "") {
        return;
    }

    alert("Thank you for your feedback!");
}

const photos = document.querySelectorAll(".photo_thumb");

photos.forEach(function(photo) {

    photo.addEventListener("click", function() {

        const image = document.createElement("div");

        image.classList.add("image-preview");

        image.innerHTML = `
            <span class="close-preview">&times;</span>
            <div class="preview-image"></div>
        `;

        document.body.appendChild(image);

        const previewImage = image.querySelector(".preview-image");

        previewImage.style.backgroundImage =
            window.getComputedStyle(photo).backgroundImage;

        image.querySelector(".close-preview").addEventListener("click", function() {
            image.remove();
        });

    });

});