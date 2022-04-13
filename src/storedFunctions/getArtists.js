


const axios = require('axios')



const getArtists = async (who) => {

    var config = {
        method: 'get',
        url: `http://localhost:3333/getArtists?who=${who}`,
        headers: { }
      };
      
      var receipt = await axios(config)
      return receipt
}

module.exports = getArtists