// const apiURL = "http://kala.eba-ygpy7sha.us-west-2.elasticbeanstalk.com/";

/**
Fetches data from the backend API

@params
@url - String - the API endpoint URL

@returns data object as a string[] representative of the fetched data from the API
*/

async function fetchFromAPI(url: string): Promise<any> {
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
