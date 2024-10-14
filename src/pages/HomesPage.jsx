import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
    return (
        <>
            <Hero />
            <HomeCards />
            <JobListings totalJobsToShow={3} title="Most Recent Jobs"/>
            <ViewAllJobs />
        </>
    );
};

export default HomePage;
