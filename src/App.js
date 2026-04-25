import { useState, useEffect } from "react";
import jobsData from "./data/jobs";
import JobList from "./components/JobList";
import Modal from "./components/Modal";

function App() {

const [jobs] = useState(jobsData);
const [search, setSearch] = useState("");
const [selectedJob, setSelectedJob] = useState(null);
const [theme, setTheme] = useState("light");
const [typeFilter, setTypeFilter] = useState("");
// console.log("Selected Job:", selectedJob);
//  Dark mode
useEffect(() => {
document.documentElement.setAttribute("data-theme", theme);
}, [theme]);

// 🔍 Search logic
const filteredJobs = jobs.filter(job => {
  return (
    (job.title.toLowerCase().includes(search.toLowerCase()) ||
     job.company.toLowerCase().includes(search.toLowerCase())) &&
    (typeFilter ? job.type === typeFilter : true)
  );
});

return (

<div>

{/* NAVBAR */}
<nav className="navbar">

<div className="logo">TalentBridge</div>

<div className="nav-links">
<span>Find Jobs</span>
<span>Companies</span>
<span>Salaries</span>
<span>Resources</span>
</div>

<div className="nav-right">

{/* 🌙 Dark mode button */}
<button
id="themeToggle"
onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
>
{theme === "dark" ? "☀️" : "🌙"}
</button>

<button className="btn-primary">Post a Job</button>

</div>

</nav>


{/* HERO */}
<header className="hero">

<h1>Find your next role here.<br />No noise, Just lots of opportunity.</h1>

<p>Browse verified listings from top companies hiring right now.</p>

<div className="search-bar">

{/* 🔍 Search input */}
<input
value={search}
onChange={(e) => setSearch(e.target.value)}
placeholder="Job title, keyword or company"
/>

<button className="btn-primary">Search Jobs</button>

</div>

</header>


{/* MAIN */}
<main className="container">

{/* FILTERS */}
<aside className="filters">

<h3>Filters</h3>

<select onChange={(e) => setTypeFilter(e.target.value)}>
  <option value="">All</option>
  <option value="Full-time">Full-time</option>
  <option value="Part-time">Part-time</option>
  <option value="Contract">Contract</option>
</select>

</aside>

{/* JOB LIST */}
<section className="jobs-section">

<h2>Available Jobs</h2>

<JobList jobs={filteredJobs} onApply={setSelectedJob} />

</section>

</main>

{/* MODAL */}
<Modal job={selectedJob} onClose={() => setSelectedJob(null)} />

</div>

);

}

export default App;