function JobCard({ job, onApply }) {
  return (
    <div className="job-card">

      <div className="job-left">

        <div className="company-logo">
          {job.logo}
        </div>

        <div className="job-info">

          <div className="company-name">{job.company}</div>

          <div className="job-title">{job.title}</div>

          <div className="job-meta">
            📍 {job.location} • {job.type}
          </div>

          <div className="job-tags">
            {job.tags.map(tag => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>

          <div className="salary">{job.salary} / year</div>

        </div>
      </div>

      <div className="job-right">
        {job.featured && <span className="featured">FEATURED</span>}

        <button className="apply-btn" onClick={() => onApply(job)}>
          Apply
        </button>
      </div>

    </div>
  );
}

export default JobCard;