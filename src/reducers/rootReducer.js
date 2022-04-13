const initState = {
  artistApiResponse: [],
  artistAlbums: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOG_ARTISTS":
      let receipt = action.receipt;
      return {
        ...state,
        artistApiResponse: receipt,
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
    default:
      return state;
  }
};

export default rootReducer;
