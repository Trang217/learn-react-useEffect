import React, { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

const Content = () => {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState(tabs[0]);
  // useEffect(callback, [dependency])
  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/posts`)
    //   .then((res) => res.json())
    //   .then((posts) => setPosts(posts));
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, [type]);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          onClick={() => setType(tab)}
          key={tab}
          style={type === tab ? { color: "#fff", background: "#333" } : {}}
        >
          {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
