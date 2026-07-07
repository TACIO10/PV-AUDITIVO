document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".js-checkout").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "InitiateCheckout");
    }

    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    if (window.goatcounter && typeof window.goatcounter.count === "function") {
      window.goatcounter.count({
        path: "clique-checkout",
        title: "Clique no botão de checkout",
        event: true
      });

      event.preventDefault();
      window.setTimeout(() => {
        window.location.href = link.href;
      }, 180);
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
