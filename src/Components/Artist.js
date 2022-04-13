import React from "react";
import "../ComponentCss/Artist.css";
// import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";
import { useDispatch } from "react-redux";
const Artist = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <React.Fragment>
      <div className="col-md-4 spacer">
        <div className="artist">
          <div className="artistImageContainer" onClick={()=>{
            dispatch({type: "LOG_ID", id: props.idPass})
            dispatch({type: "LOG_NAME", name: props.name})
            navigate('../albums')
          }}>
            <img src={props.image} alt="Not Found" className="artistImage" />
          </div>
          <div className="detailsContainer">
            <div className="artistName">
              <h1>{props.name}</h1>
            </div>
            <div className="artistFollowers">
              <span>{props.followCount} followers</span>
            </div>
            <div className="artistRating">
              <StarRating></StarRating>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};




// const mapDispatchToProps = (dispatch) => {
//   return {
//     logId: (entry) => {
//       dispatch({ type: "LOG_ID", id: entry });
//     },
//   };
// };
export default Artist;
