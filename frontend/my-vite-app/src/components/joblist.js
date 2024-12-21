// src/components/JobList.js
import  { useEffect, useState } from 'react';
import { fetchJobs } from '../services/authservice';
import JobItem from './jobitem';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const getJobs = async () => {
            const jobsData = await fetchJobs();
            setJobs(jobsData);
        };
        getJobs();
    }, []);

    return (
        <div>
            <h2>Available Jobs</h2>
            {jobs.map((job) => (
                <JobItem key={job._id} job={job} />
            ))}
        </div>
    );
};

export default JobList;
