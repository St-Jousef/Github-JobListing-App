import React, { useState, useEffect } from "react";

const Joblist = () => {
  // Define a state variable to store the job listings.
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [filteredJobs, setFilteredJobs] = useState([]); // State for filtered jobs

  // Create an async function to fetch job listings.
  const fetchJobsListing = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/cristhian19-code/github-jobs/main/src/data/data.json"
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const data = await response.json();

      // Set the fetched data into the 'jobs' state variable.
      setJobs(data);
      setFilteredJobs(data); // Initialize filteredJobs with all jobs
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Use the useEffect hook to trigger the data fetching when the component mounts.
  useEffect(() => {
    fetchJobsListing();
  }, []);

  // Handle search input change
  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    // Filter jobs based on the search term
    const filtered = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update the filtered jobs in state
    setFilteredJobs(filtered);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Call the handleSearch function when the Enter key is pressed
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for jobs"
        value={searchTerm}
        onChange={handleSearchInputChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search</button>

      {/* Map over the 'filteredJobs' array and display each job's information */}
      <ul>
        {filteredJobs.map((job, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#f4f4f4",
              borderRadius: "10px",
              padding: "5px ",
              marginBottom: "15px",
            }}
          >
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-office-startups-tanah-basah-glyph-tanah-basah.png"
              alt="external-office-startups-tanah-basah-glyph-tanah-basah"
            />
            <h5>{job.company}</h5>
            <p>{job.title}</p>
            <p>{job.location}</p>
            <p>{job.type}</p>
            <p>posted: {job.created_at}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Joblist;
