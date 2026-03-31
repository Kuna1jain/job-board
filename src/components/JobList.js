import JobCard from "./JobCard";

function JobList({ jobs, onApply }) {

return (
<div className="jobs-grid">

{jobs.map(job => (
<JobCard key={job.id} job={job} onApply={onApply} />
))}

</div>
);

}

export default JobList;