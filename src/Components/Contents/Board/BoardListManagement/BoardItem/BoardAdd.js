import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { DEV_TEST_DATA } from "../../TEST_DATA";
import BoardItemV2 from "./BoardItemV2";

const BoardAdd = () => {
  const [posts, setPosts] = useState([]); 
  const [currentPost, setCurrentPost] = useState({
    no : 0,
    title : "",
    contents : "",
    create_user_name : "",
  });

  const addPost = (post) => {
    post.no = Math.random();
    post.create_user_name = "김태훈";
    post.insert_timestamp = dayjs().format("YYYY-MM-DD HH:mm");
    
    DEV_TEST_DATA.push(post) 
    setCurrentPost({
        no : 0,
        title : "",
        contents : "",
        create_user_name : "",
      })
    // setPosts([...posts, post]);
  };

//   useEffect(() => {
//     // DEV_TEST_DATA
//   }, [posts])
 

  return (
    <div className="container">
      <h1>My Blog</h1>
        <div>
          <h2>Add Post</h2>
          {/* <form> */}
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
              value={currentPost.contents}
              onChange={(e) =>
                setCurrentPost({ ...currentPost, contents: e.target.value })
            }
            />
            <br />
            <button onClick={() => addPost(currentPost)}>Save</button>
            {/* </form> */}
            </div>
            TEST
            {DEV_TEST_DATA.map((board, idx) => { 
                return <BoardItemV2 key={idx} idx={idx} data={board} />
            })}
        </div>
        );
        };

        export default BoardAdd;