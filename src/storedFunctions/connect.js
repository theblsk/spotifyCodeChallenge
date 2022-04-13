



const connectAuth = () => {
  let client_id = 'f647ee314efa441ba236ed6bf499d490';
  let response = "token";
  let redirect = "http://localhost:3000/search";
  let url = "https://accounts.spotify.com/authorize";
  let finalUrl =
    url +
    "?response_type=" +
    response +
    "&client_id=" +
    client_id +
    "&redirect_uri=" +
    redirect;
  window.open(finalUrl, "_self");
};
export default connectAuth;
