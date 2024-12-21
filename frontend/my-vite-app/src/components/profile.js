// src/components/Profile.js
import  { useEffect, useState } from 'react';
import { useAuth } from '../context/authcontext';
import { getProfile } from '../services/authservice';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const { token } = useAuth();

    useEffect(() => {
        const fetchProfile = async () => {
            const profileData = await getProfile(token);
            setProfile(profileData);
        };
        fetchProfile();
    }, [token]);

    if (!profile) return <p>Loading...</p>;

    return (
        <div>
            <h2>{profile.name}s Profile</h2>
            <p>Email: {profile.email}</p>
            <h3>Registered Jobs:</h3>
            <ul>
                {profile.registeredJobs.map((job) => (
                    <li key={job._id}>{job.position} at {job.company}</li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;
