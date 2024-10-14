const jobLoader = async ({ params }) => {
    const resp = await fetch(`/api/jobs/${params.id}`);
    const data = await resp.json();
    return data;
}

export default jobLoader;
