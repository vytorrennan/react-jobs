import JobListings from "../components/JobListings";

const JobsPage = () => {
    return (
        <section className="bg-clue-50 px-4 py-6">
            <JobListings totalJobsToShow={9} title="Browse Jobs"/>
        </section>
    );
};

export default JobsPage;
