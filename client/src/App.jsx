import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Card } from "./components/Card";
import { posts } from "../data";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  console.log(user);
  return (
    <div>
      {user ? (
        <>
          <div className="w-[300px] border-2 border-blue-500 flex flex-col justify-between rounded">
            {" "}
            <NavBar />
            {posts.map((post) => (
              <Card key={post.id} post={post} />
            ))}
            <span>{user}</span>
          </div>
        </>
      ) : (
        <div className="flex flex-col h-14">
          <input
            className="border rounded border-red-500 p-2 mb-2"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            className="bg-black rounded text-white p-2"
            onClick={() => setUser(username)}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
