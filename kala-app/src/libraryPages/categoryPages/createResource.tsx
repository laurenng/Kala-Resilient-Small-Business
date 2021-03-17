/**
 * Creates a resource for the library given the needed information
 * 
 * @param resourceName - String - the name of the resource
 * @param resourceURL - String - the url to the external resource's website
 * @param resourceDesc - String - the short description of what the resource is
 * @returns div containing the created resource
 */
export const createResource = (resourceName: string, resourceURL: string, resourceDesc: string) => {
    return (
        <div className="resource">
            <h2>{resourceName}</h2>
            <a href={resourceURL} target="_blank" rel="noreferrer"><h3>{resourceDesc}</h3></a>
        </div>
    );
};
