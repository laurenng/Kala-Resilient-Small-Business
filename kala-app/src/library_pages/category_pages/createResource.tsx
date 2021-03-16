export const createResource = (resourceName: string, resourceURL: string, resourceDesc: string) => {
    return (
        <div className="resource">
            <h2>{resourceName}</h2>
            <a href={resourceURL} target="_blank" rel="noreferrer"><h3>{resourceDesc}</h3></a>
        </div>
    );
};
