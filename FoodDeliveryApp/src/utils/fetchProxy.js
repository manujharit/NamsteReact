const fetchWithProxy = async (url) => {
    const queryParams = {
        url: url
      };
      const queryString = new URLSearchParams(queryParams).toString();
    const data = await fetch(
        `http://localhost:3000/proxy/?${queryString}`
      )
      return await data.json()
}

export default fetchWithProxy;