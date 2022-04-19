var axios = require('axios');




const getAlbums = async (id, token) => {
    var config = {
        method: 'get',
        url: `https://api.spotify.com/v1/artists/${id}/albums`,
        headers: { 
          'Authorization': `Bearer ${token}`
        }
      };
      try{
        const response = await axios(config)
        return response.data
      }
      catch (err){
          console.log("an error happened")
      }
}

module.exports = getAlbums