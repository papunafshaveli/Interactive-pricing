"use strict";

const pageViewers = document.querySelector(".viewers");
const price = document.querySelector(".price-strong");
const rangeInput = document.getElementById("price-input");
const toggle = document.getElementById("switch");
const montYear = document.querySelector(".month");

// Define pricing data
const pricingData = [
  { monthly: 8, yearly: 72, pageViews: "10K PAGEVIEWS" },
  { monthly: 12, yearly: 108, pageViews: "50K PAGEVIEWS" },
  { monthly: 16, yearly: 144, pageViews: "100K PAGEVIEWS" },
  { monthly: 24, yearly: 216, pageViews: "500K PAGEVIEWS" },
  { monthly: 32, yearly: 288, pageViews: "1M PAGEVIEWS" },
];

// Function to update price and page views
function updatePriceAndPageViews() {
  const dataIndex = rangeInput.value;
  const pricingInfo = pricingData[dataIndex];

  if (toggle.checked) {
    price.textContent = `$${pricingInfo.yearly.toFixed(2)}`;
    montYear.textContent = " / year";
  } else {
    price.textContent = `$${pricingInfo.monthly.toFixed(2)}`;
    montYear.textContent = " / month";
  }
  pageViewers.textContent = pricingInfo.pageViews;
}

// Event listener for range input change
rangeInput.addEventListener("input", updatePriceAndPageViews);

// Event listener for toggle change
toggle.addEventListener("input", updatePriceAndPageViews);

// Initial update based on default range input value and toggle state
updatePriceAndPageViews();
