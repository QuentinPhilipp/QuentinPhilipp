export function getStrapiURL(path = "") {
  return `${
      process.env.STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

const fetchStrapi = async (path, query) => {
  let apiPath = `/api/${path}${query}`;
  let requestUrl = getStrapiURL(apiPath);
  console.log(requestUrl);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data.data;
}

export default fetchStrapi;
