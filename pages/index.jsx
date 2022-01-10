import React, { useState } from "react";
import Link from "next/link";

function App() {
  const [username, setUsername] = useState("");
  return (
    <div>
      <label>
        setUsername
        <input
          value={username}
          onChange={(e) => {
            console.log(e.target.value);
            setUsername(e.target.value);
          }}
        />
      </label>
      <p>{username} 깃허브 검색하기</p>
      <Link href={`/users/${username}`}>
        <a>검색하기</a>
      </Link>
    </div>
  );
}

export default App;
