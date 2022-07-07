import { useContext, useEffect, useState } from "react";
import axios from "axios";

import Post from "../Post/Post";
import Share from "../Share/Share";
import "./Feed.css";
import { AuthContext } from "../Context/AuthContext";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");

  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchPost = async () => {
      const res = username ? await axios.get(`/api/posts/profile/${username}`) : await axios.get(`/api/posts/timeline/${user?._id} `);
      setPosts(
        res.data.sort((p1, p2) => {
          //compare post 1 and post 2 and return the closest date
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPost();
  }, [username, user._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {/* <input type="text" onChange={(e) => setText(e.target.value)} /> */}
        <Share />
        {posts.map((p) => {
          return <Post post={p} key={p._id} />;
        })}
      </div>
    </div>
  );
};
export default Feed;
