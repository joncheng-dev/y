import React from "react";
import PropTypes from "prop-types";

function YeetPost(props) {
  return (
    <React.Fragment>
      <div class="yeetPost">
        <p class="post-author">Author: {props.author}</p>
        <p>Post: {props.post}</p>
        <p>Time Posted: {props.timePosted}</p>
        <p>Yass Count: {props.yass}</p>
      </div>
      <hr />
    </React.Fragment>
  );
}

YeetPost.propTypes = {
  author: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  timePosted: PropTypes.string.isRequired,
  yass: PropTypes.number.isRequired,
};

export default YeetPost;
