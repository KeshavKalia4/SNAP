/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

 const DB12 = {
    name: "DB12",
    imageURL: "https://content.homenetiol.com/1280x960/cd4bcc0f17bf4d7cacf89780c5a1ad7a.jpg",
    bulletPoints: [
        "MSRP: $245,000",
        "Horsepower: 671",
        "Engine: 4.0L V8"
    ],
    price: 245000,
    horsepower: 671
};

const Vanquish = {
    name: "Vanquish",
    imageURL: "https://content.homenetiol.com/1280x960/6ddefba168584082a6ae8b54b48b4690.jpg",
    bulletPoints: [
        "MSRP: $300,000",
        "Horsepower: 580",
        "Engine: 6.0L V12"
    ],
    price: 300000,
    horsepower: 580
};

const Vantage = {
    name: "Vantage",
    imageURL: "https://content.homenetiol.com/1280x960/f3dd8c24b29c48d1b3f39073a1cd90f2.jpg",
    bulletPoints: [
        "MSRP: $143,000",
        "Horsepower: 690",
        "Engine: 5.2L V12"
    ],
    price: 143000,
    horsepower: 690
};

const DBX = {
    name: "DBX",
    imageURL: "https://platform.cstatic-images.com/in/v2/34a644a1-eed8-573a-aeb7-d3c44c306394/79713d55-ff76-42da-b65d-0d56a4822c10/FjOz7F7of6HNFwS8z1oUmd-8k10.jpg",
    bulletPoints: [
        "MSRP: $197,000",
        "Horsepower: 542",
        "Engine: 4.0L V8"
    ],
    price: 197000,
    horsepower: 542
};

// This is an array of objects representing car models
let carModels = [
    DB12,
    Vanquish,
    Vantage,
    DBX
];

// Function to display the selected car model
function displaySelectedModel(selectedModel) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; // Clear existing cards

    let modelsToDisplay = [];
    if (selectedModel === "all") {
        modelsToDisplay = carModels.slice(); // Make a copy of the array
    } else {
        const selectedCarModel = carModels.find(model => model.name === selectedModel);
        if (selectedCarModel) {
            modelsToDisplay.push(selectedCarModel);
        }
    }

    modelsToDisplay.forEach(model => {
        const templateCard = document.querySelector(".card");
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, model); // Edit content of the card
        cardContainer.appendChild(nextCard); // Add new card to the container
    });

    sortModels(modelsToDisplay);
}

function sortModels(models) {
    const sortCriteria = document.getElementById("sort-criteria").value;

    if (sortCriteria === "price") {
        models.sort((a, b) => a.price - b.price);
    } else if (sortCriteria === "horsepower") {
        models.sort((a, b) => a.horsepower - b.horsepower);
    }

    // Redraw the sorted models
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; // Clear existing cards
    models.forEach(model => {
        const templateCard = document.querySelector(".card");
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, model); // Edit content of the card
        cardContainer.appendChild(nextCard); // Add new card to the container
    });
}

// This calls the displaySelectedModel() function when the page is first loaded
document.addEventListener("DOMContentLoaded", () => {
    displaySelectedModel(""); // Display nothing initially
});

function editCardContent(card, carModel) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = carModel.name;

    const cardImage = card.querySelector("img");
    cardImage.src = carModel.imageURL;
    cardImage.alt = carModel.name + " Poster";

    const bulletPointsList = card.querySelector("ul");
    bulletPointsList.innerHTML = ""; // Clear existing bullet points

    carModel.bulletPoints.forEach(bulletPoint => {
        const li = document.createElement("li");
        li.textContent = bulletPoint;
        bulletPointsList.appendChild(li);
    });
}















