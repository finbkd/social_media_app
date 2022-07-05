import "./Share.css";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/1.jpeg" className="shareProfileImg" alt="" />
          <input placeholder="What's in your mind" type="text" className="shareInput" />
        </div>
        <hr className="shareHr"></hr>
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PhotoLibraryIcon htmlColor="red" />
              <span className="shareOption">Photo or video</span>
            </div>
            <div className="shareOption">
              <LabelIcon htmlColor="blue" />
              <span className="shareOption">Tag</span>
            </div>
            <div className="shareOption">
              <LocationOnIcon htmlColor="green" />
              <span className="shareOption">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon htmlColor="goldenrod" />
              <span className="shareOption">Emoji</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};
export default Share;
