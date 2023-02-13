import React, { useState } from "react";
import "./IWillGoToCoffee.css";

function IWillGoToCoffee() {
  const [alert, setAlert] = useState(false);

  const handleClick = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 3000);
  };

  return (
    <div className="iwillgotocoffee">
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

