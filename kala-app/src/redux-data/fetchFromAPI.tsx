const apiURL = "https://cors-anywhere.herokuapp.com/http://54.214.55.177:8080/";

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
