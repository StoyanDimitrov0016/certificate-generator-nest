const foundYear = 2025;
const currentYear = new Date().getFullYear();

const yearRangeSpan = document.getElementById("yearRange");

if (currentYear > foundYear) {
  yearRangeSpan.textContent = `${foundYear} - ${currentYear}`;
} else {
  yearRangeSpan.textContent = `${foundYear}`;
}
