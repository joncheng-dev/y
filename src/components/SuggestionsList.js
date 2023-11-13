import React from "react";
import SuggestionPost from "./Suggestion";
import adImage from "../img/mobile_ads.jpg";
import adImageMoney from "../img/make_money.jpg";
import adImageDog from "../img/dog_tinder.jpg";

const tempSuggestionList = [
  {
    name: "Looking for love?",
    body: "Check out these hot singles in your area",
    imgAddress: adImageDog,
  },
  {
    name: "Click here to make a million bucks!",
    body: "All we need is your banking information!",
    imgAddress: adImageMoney,
  },
  {
    name: "Clan of Dominion",
    body: "Try this awesome new game for free.",
    imgAddress: adImage,
  },
];

function SuggestionFeed() {
  return (
    <React.Fragment>
      <h3>Suggestions</h3>
      <hr />
      {tempSuggestionList.map((suggestion, index) => (
        <SuggestionPost name={suggestion.name} body={suggestion.body} imgAddress={suggestion.imgAddress} key={index} />
      ))}
    </React.Fragment>
  );
}

export default SuggestionFeed;
