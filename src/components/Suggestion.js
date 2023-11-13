import React from "react";
import PropTypes from "prop-types";

function SuggestionPost(props) {
  return (
    <React.Fragment>
      <p>
        <strong>Name:</strong> {props.name}
      </p>
      <p>
        <strong>Suggestion:</strong> {props.body}
      </p>
      <img src={props.imgAddress} class="center" alt="ad image" />
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
