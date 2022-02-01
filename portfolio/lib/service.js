import axios from 'axios';
const qs = require('qs');


const fetchFromCMS = async (path) => {
  const query = qs.stringify({
      populate: '*', 
    }, {
      encodeValuesOnly: true,
    });
    const url = `http://localhost:1337/api/${path}&${query}`;
    console.log(url);
    const res = await axios.get(url);
    return res.data.data;
  };
  
export default fetchFromCMS;