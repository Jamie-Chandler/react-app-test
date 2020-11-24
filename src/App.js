import React from "react";

//Import Components
import Tweet from "./components/Tweet";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  //Write normal JS here!
  const name = "Jamie Chandler";
  const message = "This is the message variable";
  return (
    <div className="box">
      <h1>Hello React {name}</h1>
      <CreateTweet />
      <TweetList name={name} message={message} />
    </div>
  );
}

export default App;
