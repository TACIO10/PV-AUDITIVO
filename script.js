document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".js-checkout").forEach((link) => {
  link.addEventListener("click", () => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "InitiateCheckout");
    }
  });
});

document.querySelectorAll(".faq details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    document.querySelectorAll(".faq details[open]").forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

const proofGrid = document.querySelector(".proof-grid");
const proofNext = document.querySelector(".proof-next");

if (proofGrid && proofNext) {
  proofNext.addEventListener("click", () => {
    const slide = proofGrid.querySelector("figure");
    const gap = 11;
    const step = slide ? slide.getBoundingClientRect().width + gap : proofGrid.clientWidth;
    const atEnd = proofGrid.scrollLeft + proofGrid.clientWidth >= proofGrid.scrollWidth - 8;

    proofGrid.scrollTo({
      left: atEnd ? 0 : proofGrid.scrollLeft + step,
      behavior: "smooth"
    });
  });
}
