import React from "react";
import YeetCompose from "./YeetCompose";
import YeetPost from "./YeetPost";

const tempYeetPostList = [
  {
    author: "Dean Winchester",
    post: "Has anyone seen any demons asking for a friend",
    timePosted: "10/31/2023 11:35pm",
    yass: "77",
  },
  {
    author: "Jiminy Cricket",
    post: "... ... ... ...",
    timePosted: "11/10/2023 3:15am",
    yass: "1,000,000",
  },
  {
    author: "Old Man on Stoop",
    post: "Get off my lawn!",
    timePosted: "07/04/2023",
    yass: "80",
  },
];

function YeetFeed() {
  return (
    <React.Fragment>
      <YeetCompose />
      <hr />
      {tempYeetPostList.map((yeet, index) => (
        <YeetPost author={yeet.author} post={yeet.post} timePosted={yeet.timePosted} yass={yeet.yass} key={index} />
      ))}
    </React.Fragment>
  );
}

export default YeetFeed;
