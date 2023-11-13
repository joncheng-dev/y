import React from "react";
import SuggestionPost from "./Suggestion";

const tempSuggestionList = [
  {
    name: "Looking for love?",
    body: "Check out these hot singles in your area",
  },
  {
    name: "Click here to make a million bucks!",
    body: "All we need is your banking information!",
  },
  {
    name: "Clan of Dominion",
    body: "Try this awesome new game for free.",
  },
];

function SuggestionFeed() {
  return (
    <React.Fragment>
      <h3>Suggestions</h3>
      <hr />
      {tempSuggestionList.map((suggestion, index) => (
        <SuggestionPost name={suggestion.name} body={suggestion.body} key={index} />
      ))}
    </React.Fragment>
  );
}

export default SuggestionFeed;
