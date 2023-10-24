import { useCallback, useState } from "react";
import "./App.css";
import PostLengthCalc from "./PostLengthCalc";
import Post from "./Post";
function App() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [postLength, setPostLength] = useState(0);
  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const callBackInput = useCallback(handleInput, []);
  const handlePost = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setPosts([input, ...posts]);
      setPostLength(postLength + input.length);
      setInput("");
    }
  };
  console.log("app shi shemovida");
  return (
    <div className="App">
      <input
        onKeyDown={handlePost}
        type="text"
        value={input}
        onChange={callBackInput}
        style={{ backgroundColor: "yellow", height: "40px" }}
        placeholder="enter post tittle"
      />
      <PostLengthCalc postLength={postLength} />
      {posts.map((postText, i) => (
        <Post key={i} text={postText} />
      ))}
    </div>
  );
}

export default App;
