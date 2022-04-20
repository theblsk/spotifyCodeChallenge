import React, { useEffect, useState } from "react";
import { debounce } from "debounce";
import "../ComponentCss/searchPage.css";
import storeHash from "../storedFunctions/storeHash";
import Artist from "./Artist";
import getArtists from "../storedFunctions/getArtists";
import { connect } from "react-redux";
import notFound from "../assets/img/not_found.jpg";

const SearchPage = (props) => {
  const logArtists = props.logArtists;

  const [artists, setArtists] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    storeHash(props.logToken);
  }, []);

  useEffect(() => {
    if (searchTerm !== "")
      getArtists(props.token, searchTerm).then((data) => {
        if (data.artists.items) {
          logArtists(data.artists.items, searchTerm);
        } else {
          console.log("type something please");
        }
      });
  }, [searchTerm]);
  useEffect(() => {
    if (props.artistList) {
      setArtists(
        props.artistList.map((item) => {
          return (
            <Artist
              idPass={item.id}
              key={item.id}
              name={item.name}
              followCount={item.followers.total.toLocaleString("en-US")}
              image={item.images.length > 0 ? item.images[0].url : notFound}
            ></Artist>
          );
        })
      );
    }
  }, [props.artistList]);
  return (
    <React.Fragment>
      <div className="contain">
        <div className="searchBarContainer">
          <input
            type="text"
            placeholder="Search For an Artist..."
            onChange={debounce((e) => {
              setSearchTerm(e.target.value);
              if (e.target.value.toString() === "") {
                setArtists(null);
              }
            }, 500)}
          />
          <i className="bi bi-search"></i>
        </div>
        <div className="searchResultContainer">{artists}</div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return { artistList: state.artistApiResponse, token: state.token };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logArtists: (entry, search) => {
      dispatch({ type: "LOG_ARTISTS", receipt: entry, searchTrm: search });
    },
    logToken: (entry) => {
      dispatch({ type: "LOG_TOKEN", token: entry });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
