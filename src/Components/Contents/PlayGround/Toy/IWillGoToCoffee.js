import React, { useState } from "react";
import SEOMetaTag from "../../../SEOMetaTag";
import "./IWillGoToCoffee.css";

function IWillGoToCoffee() {
  const [alert, setAlert] = useState(false);

  const handleClick = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 3000);
  };

  return (
    <div className="iwillgotocoffee">
    <SEOMetaTag title={"IWillGoToCoffee"} description={"커피하나만 사서올게요!\n음료 필요하면 말씀해주세요!"} imgsrc={"src/Components/Contents/PlayGround/Toy/IWillGoToCoffee.png"} url={"https://gaetaeng.xyz/coffee"}/>
      <h1 className="iwillgotocoffee-title">Going to get coffee!</h1>
      <button onClick={handleClick} className="iwillgotocoffee-button">Set reminder</button>
      {alert && (
        <p className="iwillgotocoffee-alert">
          Time to go get coffee!
        </p>
      )}
    </div>
  );
}

export default IWillGoToCoffee;

