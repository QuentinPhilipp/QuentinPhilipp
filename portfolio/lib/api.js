const qs = require('qs');

export function getStrapiURL(path = "") {
  return `${
      process.env.STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

const queryDefault = qs.stringify({
  populate: '*'
  }, {
    encodeValuesOnly: true,
});

const fetchStrapi = async (path, query="") => {
  if (query=="") {
    query = queryDefault;
  }
  let apiPath = `/api/${path}${query}`;
  let requestUrl = getStrapiURL(apiPath);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data.data;
}

export default fetchStrapi;
