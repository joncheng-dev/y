import React from "react";
import elaineprofile from "./../img/elaineprofile.png";

function Profile() {
  return (
    <React.Fragment>
      <h1>Elaine Monks</h1>
      <hr />
      <img src={elaineprofile} class="center" alt="elaine's profile photo" />
      <h3>Yass Fam: 5,067</h3>
      <hr />
      <h3>About Me: </h3>
      <p>
        I am an entrepreneur and philantropist looking to take over the world. "Self made" billionaire who started Y from a "small" loan of 10 million
        dollars from my sugar daddy.
      </p>
    </React.Fragment>
  );
}

export default Profile;
