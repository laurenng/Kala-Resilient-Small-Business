const apiURL = "http://kala.eba-ygpy7sha.us-west-2.elasticbeanstalk.com/";

async function fetchFromAPI<T>(url: string): Promise<any> {
    return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<{ data: string[] }>
    })
    .then(data => {
        // console.log(data)
        return data
    })
}

export default fetchFromAPI;
