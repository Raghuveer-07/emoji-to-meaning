import react, { useState } from "react";
import "./styles.css";

var color = "#2dd4bf";
var headingText = "Emoji To Meaning 🔥";

var emojiDictionary = {
  "🔥": "fire",
  "😉": "wink",
  "😊": "smile",
  "😑": "annoyed",
  "❤️": "heart",
  "🎂": "cake",
  "🎈": "ballon",
  "😔": "sad",
  "😭": "crying",
  "😠": "angry"
};
//var userName =prompt("give me your name");

var emojis = Object.keys(emojiDictionary);

export default function App(event) {
  var [meaning, setMeaning] = useState("");

  function emojiHandler(event) {
    var inputEmoji = event.target.value;

    var meaning = emojiDictionary[inputEmoji];

    if (meaning === undefined) {
      meaning = "not available in database";
    }
    setMeaning(meaning);
  }

  function onClickEmojiHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{headingText}</h1>
      <input onChange={emojiHandler}></input>
      <div id="meaning">{meaning}</div>
      <h2>what we know for now !!</h2>
      <ul id="emojis">
        {emojis.map(function (emoji, index) {
          return <li onClick={() => onClickEmojiHandler(emoji)}>{emoji}</li>;
        })}
      </ul>
    </div>
  );
}
