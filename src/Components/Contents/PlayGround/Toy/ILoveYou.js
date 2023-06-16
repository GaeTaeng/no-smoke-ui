import React, { useState } from "react";
import SEOMetaTag from "../../../SEOMetaTag";
import Notification from "./GoingToGetCoffee/Notification";
import "./ILoveYou.css";

function ILoveYou() {
  const [alert, setAlert] = useState(false);

  const handleClick = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 3000);
  };

  return (
    <div className="iloveyou">
      <span className="love_name">주임님</span> <span className="love_message">사랑합니다</span>
    </div>
  );
}

export default ILoveYou;

