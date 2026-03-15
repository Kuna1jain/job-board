const jobModal = document.getElementById("jobModal");
const modalContent = document.getElementById("modalContent");
const applyModal = document.getElementById("applyModal");

function openJobDetail(id){
  const job = jobs.find(j => j.id === id);

  modalContent.innerHTML = `
    <h2>${job.title}</h2>

    <p class="company">${job.company}</p>

    <p>${job.location} • ${job.mode}</p>

    <p>${job.description}</p>

    <h3>Responsibilities</h3>

    <ul>
      ${job.responsibilities.map(r => `<li>${r}</li>`).join("")}
    </ul>

    <h3>Requirements</h3>

    <ul>
      ${job.requirements.map(r => `<li>${r}</li>`).join("")}
    </ul>

    <button onclick="closeModal()">Close</button>
  `;

  jobModal.classList.remove("hidden");
}

function closeModal() {
  jobModal.classList.add("hidden");
}

function openApplyModal(job) {
  const titleEl = document.getElementById("applyJobTitle");
  if (titleEl) {
    titleEl.textContent = `${job.title} at ${job.company}`;
  }

  applyModal.classList.remove("hidden");
}

function closeApplyModal() {
  applyModal.classList.add("hidden");
}

// Close modal when clicking outside the content
[ jobModal, applyModal ].forEach(modal => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });
});

// Close button for apply modal
if (applyModal) {
  const applyCloseBtn = applyModal.querySelector(".close-modal");
  if (applyCloseBtn) {
    applyCloseBtn.addEventListener("click", closeApplyModal);
  }
}
