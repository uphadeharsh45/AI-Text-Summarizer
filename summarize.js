
const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios');

async function summarizeText(text) {

  let data = JSON.stringify({
    "inputs":text,
    "parameters": {
      "max_length": 200,
      "min_length": 20
    }
  });
  const token=process.env.ACCESS_TOKEN
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer ' + token
    },
    data : data
  };


    try {
      const response = await axios.request(config);
      // console.log(JSON.stringify(response.data));
      return response.data[0].summary_text;

    }
    catch (error) {
      console.log(error);
    }

}


module.exports = summarizeText;