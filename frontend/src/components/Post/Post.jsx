import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../dummyData";
import { useState } from "react";

const Post = ({ post }) => {
  const [like, setLike] = useState(post?.like); //total likes
  const [isLiked, setIsLiked] = useState(false); //for current user liked the post or nah

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const user = Users.filter((user) => user.id === post?.userId)[0]; // filter gives the user which is equal to userId of person who has posted
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={user?.profilePicture} alt="" />
            <span className="postUsername">{user?.username}</span>
            <span className="postDate">{post?.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post?.photo} />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" onClick={likeHandler} src="/assets/like.png" />
            <img className="likeIcon" src="/assets/heart.png" />
            <span className="postLikeCounter">{like} people like it</span>
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
