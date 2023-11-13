import React from "react";
import Header from "./Header";
import YeetFeed from "./YeetFeed";
import SuggestionsList from "./SuggestionsList";
import Profile from "./Profile";

function App() {
  return (
    <React.Fragment>
      <div id="header">
        <Header />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-4" id="profile">
            <Profile />
          </div>
          <div class="col-5" id="yeetfeed">
            <YeetFeed />
          </div>
          <div class="col-3" id="suggestionList">
            <SuggestionsList />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
