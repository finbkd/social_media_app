import Post from "../Post/Post";
import Share from "../Share/Share";
import "./Feed.css";

import { Posts } from "../../dummyData";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => {
          return <Post post={p} key={p.id} />;
        })}
        <Post />
      </div>
    </div>
  );
};
export default Feed;
