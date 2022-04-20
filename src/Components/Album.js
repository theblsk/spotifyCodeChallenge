import React from "react";
import "../ComponentCss/Album.css";
const Album = (props) => {
  return (
    <React.Fragment>
      <div className="spacer">
        <div className="album">
          <div className="albumImageContainer">
            <img src={props.image} alt="Not Found" className="albumImage" />
          </div>
          <div className="details">
            <div className="up">
              <h1>{props.albumName}</h1>
              <span>{props.name}</span>
            </div>
            <div className="down">
              <div className="dateTracks">
                <span>{props.albumDate}</span>
                <span>{props.albumTrackCount} Tracks</span>
              </div>
              <div className="preview">
                <span>
                  <a href={props.albumLink} target="_blank" rel="noreferrer">
                    Preview on Spotify
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Album;
