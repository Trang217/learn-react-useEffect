import React, { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

const Content = () => {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState(tabs[0]);
  const [showGoToTop, setShowGoToTop] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  // useEffect(callback, [dependency])
  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/posts`)
    //   .then((res) => res.json())
    //   .then((posts) => setPosts(posts));
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <h1>{width}</h1>
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

      {showGoToTop && (
        <button style={{ position: "fixed", right: 20, bottom: 20 }}>
          Go to top
        </button>
      )}
    </div>
  );
};

export default Content;
