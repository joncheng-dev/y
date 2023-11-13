import React from "react";
import PropTypes from "prop-types";

function SuggestionPost(props) {
  return (
    <React.Fragment>
      <p>
        <strong>{props.name}</strong>
      </p>
      <p>
        <em>{props.body}</em>
      </p>
      <img src={props.imgAddress} class="ad" alt="ad image" />
      <hr />
    </React.Fragment>
  );
}

SuggestionPost.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  // imgAddress: PropTypes.string.isRequired,
};

export default SuggestionPost;
