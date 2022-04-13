var axios = require('axios');



const getAlbums = async (id) => {
    var config = {
        method: 'get',
        url: `http://localhost:3333/getAlbums?id=${id}`,
        headers: { }
      };
      
      var receipt = await axios(config)
      return receipt
}


module.exports = getAlbums