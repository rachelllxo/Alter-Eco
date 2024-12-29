// Data for alternatives
const alternatives = {
    "plastic bottle": [
        {
            name: "Reusable Glass Bottle",
            description: "A stylish, eco-friendly alternative to plastic bottles made from durable glass.",
            image: "reusable-glass-bottle.jpg"
        },
        {
            name: "Stainless Steel Bottle",
            description: "Keep your drinks hot or cold for hours with a long-lasting stainless steel bottle.",
            image: "stainless-steel-bottle.jpg"
        }
    ],
    "plastic bag": [
        {
            name: "Reusable Tote Bag",
            description: "An eco-friendly alternative to plastic bags made from organic cotton.",
            image: "reusable-tote-bag.jpg"
        },
        {
            name: "Jute Shopping Bag",
            description: "A biodegradable and durable alternative to plastic shopping bags.",
            image: "jute-bag.jpg"
        }
    ],
    "plastic straw": [
        {
            name: "Bamboo Straw",
            description: "A sustainable and compostable alternative to plastic straws.",
            image: "bamboo-straw.jpg"
        },
        {
            name: "Stainless Steel Straw",
            description: "A reusable, long-lasting alternative to single-use plastic straws.",
            image: "steel-straw.jpg"
        }
    ]
};

// Event listener for the search button
document.getElementById("search-button").addEventListener("click", function() {
    const userInput = document.getElementById("search-input").value.toLowerCase();
    const alternativesContainer = document.getElementById("alternatives-container");

    // Clear previous results
    alternativesContainer.innerHTML = "";

    // If alternatives exist for the searched term, display them
    if (alternatives[userInput]) {
        alternatives[userInput].forEach(item => {
            const card = document.createElement("div");
            card.classList.add("alternative-card");

            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            `;

            alternativesContainer.appendChild(card);
        });
    } else {
        alternativesContainer.innerHTML = "<p>No alternatives found for this product.</p>";
    }
});
