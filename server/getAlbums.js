var axios = require('axios');




const getAlbums = async (id, token) => {
    var config = {
        method: 'get',
        url: `https://api.spotify.com/v1/artists/${id}/albums`,
        headers: { 
          'Authorization': `Bearer ${token}`, 
          'Cookie': 'sp_t=91c7d944201688a9faaac0477d6fba2f'
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