document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const menuItems = document.querySelectorAll(".menu-item");
  const form = document.getElementById("reservationForm");
  const formMessage = document.getElementById("formMessage");

  // Menu filtering
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;

      menuItems.forEach((item) => {
        const category = item.dataset.category;
        const show = filter === "all" || category === filter;
        item.style.display = show ? "block" : "none";
      });
    });
  });

  // Reservation form validation + confirmation
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    if (!name || !phone || !email || !date || !time || !guests) {
      formMessage.textContent = "Please complete all required fields.";
      formMessage.style.color = "#c0392b";
      return;
    }

    const selectedDate = new Date(date + "T" + time);
    const now = new Date();

    if (selectedDate < now) {
      formMessage.textContent = "Please choose a future date and time.";
      formMessage.style.color = "#c0392b";
      return;
    }

    formMessage.textContent = `Thank you, ${name}! Your reservation request has been received.`;
    formMessage.style.color = "#198754";

    form.reset();
  });
});
