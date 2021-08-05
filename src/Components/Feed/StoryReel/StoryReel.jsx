import React from "react";
import Story from "../Story/Story";
import "./StoryReel.css";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import poster1 from "./poster1.jpg";
import poster2 from "./poster2.jpg";
import poster3 from "./poster3.jpg";
import poster4 from "./poster4.jpg";
import poster5 from "./poster5.jpg";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story image={poster2} profileSrc={img2} title="Developer" />

      <Story image={poster3} profileSrc={img3} title="Analyst" />

      <Story image={poster4} profileSrc={img4} title="DevOpsEng" />

      <Story image={poster5} profileSrc={img5} title="Accountant" />
      <Story image={poster1} profileSrc={img1} title="Engineers" />
    </div>
  );
}

export default StoryReel;
