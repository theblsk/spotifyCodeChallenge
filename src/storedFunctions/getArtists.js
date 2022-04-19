


const axios = require("axios");

const getArtistes = async (token, who) => {
  var config = {
    method: "get",
    url: `https://api.spotify.com/v1/search?q=${who}&type=artist`,
    headers: {
      Authorization: `Bearer ${token}`
    },
  };
  try {

    const response = await axios(config);
    return response.data;
  } catch (err) {
    console.log("an error happened")
  }
};

module.exports = getArtistes;
