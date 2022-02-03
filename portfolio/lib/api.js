export function getStrapiURL(path = "") {
  return `${
      process.env.STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

const fetchStrapi = async (path) => {
  let apiPath = `/api/${path}&populate=%2A`;
  let requestUrl = getStrapiURL(apiPath);
  const response = await fetch(requestUrl);
  const data = await response.json();
  console.log(path, data);
  return data.data;
}

export default fetchStrapi;
