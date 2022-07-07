import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

import "./post.css";
import { AuthContext } from "../Context/AuthContext";

const Post = ({ post }) => {
  const [like, setLike] = useState(post?.likes.length); //total likes
  const [isLiked, setIsLiked] = useState(false); //for current user liked the post or nah
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/api/users?userId=${post.userId}`);
      // console.log(res);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [post.likes.includes(currentUser._id)]);

  const likeHandler = async () => {
    try {
      await axios.put(`/api/posts/${post._id}/like`, { userId: currentUser._id });
      setLike(isLiked ? like - 1 : like + 1);
      setIsLiked(!isLiked);
    } catch (err) {}
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {/*//s/  slash(/) before profile is important in link else it will just keep adding that wheenver img gets clicked */}
            <Link to={`/profile/${user.userName}`}>
              <img className="postProfileImg" src={user.profilePicture || PF + "person/noAvatar.png"} alt="" />
            </Link>
            <span className="postUsername">{user?.userName}</span>
            <span className="postDate">{format(post?.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          {post?.img && <img className="postImg" src={PF + post?.img} />}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" onClick={likeHandler} src={`${PF}like.png`} />
            <img className="likeIcon" onClick={likeHandler} src={`${PF}heart.png`} />
            <span className="postLikeCounter">{isLiked ? `You and ${like - 1} people like it` : `${like} people like it`}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post?.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
