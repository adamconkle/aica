const pricingOptions = [
  { title: "Basic", price: "$199", features: ["Single Page Website", "Basic SEO", "Mobile Responsive"] },
  { title: "Standard", price: "$499", features: ["3-5 Page Website", "SEO Optimization", "Custom Design"] },
  { title: "Premium", price: "$999", features: ["6-10 Page Website", "Advanced SEO", "E-Commerce Integration"] }
];

function generatePricing() {
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = ""; // Clear existing content

  pricingOptions.forEach(option => {
    const card = document.createElement("div");
    card.classList.add("pcard");
    
    const title = document.createElement("h3");
    title.textContent = option.title;
    
    const featureList = document.createElement("ul");
    featureList.innerHTML = `<strong>What You Get</strong>`;
    option.features.forEach(feature => {
      const li = document.createElement("li");
      li.textContent = feature;
      featureList.appendChild(li);
    });
    
    const price = document.createElement("p");
    price.textContent = option.price;
    
    const button = document.createElement("button");
    button.textContent = "Purchase";
    
    card.appendChild(title);
    card.appendChild(featureList);
    card.appendChild(price);
    card.appendChild(button);
    optionsContainer.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", generatePricing);
