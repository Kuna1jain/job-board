document.addEventListener("submit", (event) => {
  if (event.target.id !== "applyForm") return;
  event.preventDefault();

  const email = document.getElementById("email")?.value || "";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Invalid Email");
    return;
  }

  alert("Application Submitted Successfully");
  event.target.reset();

  const applyModal = document.getElementById("applyModal");
  if (applyModal) applyModal.classList.add("hidden");
});