import React, { useState } from "react";
import Album from "./Album";
import { connect } from "react-redux";
import notFound from "../assets/img/not_found.jpg";

import "../ComponentCss/AlbumPage.css";
import { useEffect } from "react";
import getAlbums from "../storedFunctions/getAlbums";
import { useNavigate } from "react-router-dom";
const AlbumPage = (props) => {
  const navigate = useNavigate()
  const [albums, setAlbums] = useState(null);
  useEffect(() => {
    getAlbums(props.artistId, props.token).then((data) => {
      props.logAlbums(data.items);
    });
  }, []);
  useEffect(() => {
    if (props.artistAlbums) {
      setAlbums(
        props.artistAlbums.map((item) => {
          return (
            <Album
              key={item.id}
              name={props.name}
              albumName={item.name}
              albumDate={item.release_date}
              albumTrackCount={item.total_tracks}
              image={item.images.length > 0 ? item.images[0].url : notFound}
              albumLink={item.external_urls.spotify}
            ></Album>
          );
        })
      );
    }
  }, [props.artistAlbums]);

  return (
    <React.Fragment>
      <div className="pageDivider">

        <div className="artistInfo">
          <div className="artist-name">
            <h1>{props.name}</h1>
            <button onClick={()=>{
              navigate('../search')
            }}><i className="bi bi-arrow-left-circle-fill"></i></button>
          </div>
          <span>Albums</span>
        </div>
        <div className="artistAlbums">
          <div className="row">{albums}</div>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    artistAlbums: state.artistAlbums,
    artistId: state.artistId,
    name: state.name,
    token: state.token
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logAlbums: (entry) => {
      dispatch({ type: "LOG_ALBUMS", receipt: entry });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPage);
