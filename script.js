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
