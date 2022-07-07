import "./Share.css";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import axios from "axios";
import { useContext, useState } from "react";
import { useRef } from "react";

import { AuthContext } from "../Context/AuthContext";

const Share = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData(); //create a new formData
      const fileName = `${Date.now() + file.name}`; //filename
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName; //adding our img to newPost img

      try {
        //upload file to directory
        await axios.post("/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      // uploading newPOst img to website
      await axios.post(`/api/posts`, newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} className="shareProfileImg" alt="" />
          <input placeholder={`What's in your mind, ${user.userName} ?`} type="text" className="shareInput" ref={desc} />
        </div>
        <hr className="shareHr"></hr>
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PhotoLibraryIcon htmlColor="red" />
              <span className="shareOption">Photo or video</span>
              <input style={{ display: "none" }} type="file" id="file" accept=".png, .jpeg, .jpg" onChange={(e) => setFile(e.target.files[0])} />
            </label>
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
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};
export default Share;
