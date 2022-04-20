const initState = {
  artistApiResponse: [],
  artistAlbums: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOG_ARTISTS":
      let receipt = action.receipt;
      let searchTrm = action.searchTrm.toLowerCase()
      let filtered = receipt.filter(item =>item.name.toLowerCase().includes(searchTrm))
      return {
        ...state,
        artistApiResponse: filtered,
      };
    case "LOG_ALBUMS":
      let albumReceipt = action.receipt;
    
      return {
        ...state,
        artistAlbums: albumReceipt,
      };
    case "LOG_ID":
      return {
        ...state,
        artistId: action.id,
      };
    case "LOG_NAME":
      return {
        ...state,
        name: action.name,
      };
    case "LOG_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default rootReducer;
