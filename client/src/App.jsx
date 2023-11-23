import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  console.log(user);
  return (
    <div className="">
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
    </div>
  );
}

export default App;
