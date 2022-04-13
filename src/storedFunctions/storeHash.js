import axios from "axios";

const storeHash = async () => {
  if (window.location.hash !== "") {
    let extract = window.location.hash.substring(14);
    let index = extract.indexOf("&");
    let token = extract.slice(0, index);
    window.history.replaceState("", "", "http://localhost:3000/search");
    var data = JSON.stringify({
      token: `${token}`,
    });

    var config = {
      method: "post",
      url: "http://localhost:3333/getToken",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    try {
      await axios(config);
    } catch (err) {
      console.log(err);
    }
  }
};

export default storeHash;
