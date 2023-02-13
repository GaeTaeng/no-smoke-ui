import React, { useState } from "react";

const BoardEdit = () => {
  const [posts, setPosts] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState({
    id: null,
    title: "",
    content: "",
  }); 
  const updatePost = (id, updatedPost) => {
    setEditing(false);

    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, title: updatedPost.title, content: updatedPost.content }
          : post
      )
    );
  };

  return (
    <div className="container">
      <h1>My Blog</h1> 
        <div>
          <h2>Edit Post</h2>
          <form>
            <input
              type="text"
              placeholder="Enter title"
              value={currentPost.title}
              onChange={(e) =>
                setCurrentPost({ ...currentPost, title: e.target.value })
              }
            />
            <br />
            <textarea
              placeholder="Enter content"
              value={currentPost.content}
              onChange={(e) =>
                setCurrentPost({ ...currentPost, content: e.target.value })
              }
            />
            <br />
            <button onClick={() => updatePost(currentPost.id, currentPost)}>
              Update
            </button>
            <button onClick={() => setEditing(false)}>Cancel</button>
          </form>
        </div> 
        </div>
        );
        };

        export default BoardEdit;