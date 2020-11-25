import React, { useState } from "react";

//Import Components
import Tweet from "./components/Tweet";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  //Write normal JS here!
  const name = "Jamie Chandler";
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  return (
    <div>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;
