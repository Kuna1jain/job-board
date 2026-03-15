const searchInput = document.getElementById("searchInput")
const typeCheckboxes = document.querySelectorAll('.filters input[type="checkbox"]');
const sortSelect = document.getElementById('sortSelect');

searchInput.addEventListener("input", handleSearch)
typeCheckboxes.forEach(cb => cb.addEventListener('change', applyFiltersAndSort));
sortSelect.addEventListener('change', applyFiltersAndSort);

function getFilteredJobs() {
  let filtered = jobs;

  // Search
  const keyword = searchInput.value.toLowerCase();
  if (keyword) {
    filtered = filtered.filter(job =>
      job.title.toLowerCase().includes(keyword) ||
      job.company.toLowerCase().includes(keyword) ||
      job.tags.join(" ").toLowerCase().includes(keyword)
    );
  }

  // Types
  const selectedTypes = Array.from(typeCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
  if (selectedTypes.length > 0) {
    filtered = filtered.filter(job => selectedTypes.includes(job.type.toLowerCase()));
  }

  // Sort
  const sortValue = sortSelect.value;
  if (sortValue === 'recent') {
    filtered.sort((a, b) => {
      const aDays = parseInt(a.posted.split(' ')[0]);
      const bDays = parseInt(b.posted.split(' ')[0]);
      return aDays - bDays; // smaller days first (more recent)
    });
  } else if (sortValue === 'salary') {
    filtered.sort((a, b) => b.salaryMax - a.salaryMax);
  }

  return filtered;
}

function handleSearch() {
  renderJobs(getFilteredJobs());
}

function applyFiltersAndSort() {
  renderJobs(getFilteredJobs());
}

// Render jobs
function renderJobs(jobsArray){

const container = document.getElementById("jobsContainer");
container.innerHTML="";

jobsArray.forEach(job=>{

const tagsHTML = job.tags.map(tag=>`<span class="tag">${tag}</span>`).join("");

const card=document.createElement("div");
card.className="job-card";

card.innerHTML=`

<div class="job-left">

<div class="company-logo">
${job.company.charAt(0)}
</div>

<div class="job-info">

<div class="company-name">${job.company}</div>

<div class="job-title">${job.title}</div>

<div class="job-meta">
<span>📍 ${job.location}</span>
<span>• ${job.type}</span>
</div>

<div class="job-tags">
<span class="tag">${job.location}</span>
${tagsHTML}
</div>

<div class="salary">${job.salary} / year</div>

</div>

</div>


<div class="job-right">

${job.featured ? '<span class="featured">FEATURED</span>' : ""}

<button class="apply-btn">Apply</button>

</div>

`;

container.appendChild(card);

const applyBtn = card.querySelector(".apply-btn");
if (applyBtn) {
  applyBtn.addEventListener("click", () => openApplyModal(job));
}

});

}
renderJobs(getFilteredJobs());