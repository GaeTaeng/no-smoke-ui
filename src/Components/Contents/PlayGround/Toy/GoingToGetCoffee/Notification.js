import React, { useState } from "react";
import "./Notification.css"
function Notification() {
  const [showNotification, setShowNotification] = useState(true);

  setTimeout(() => {
    setShowNotification(false);
  }, 3000);

  return (
    <div
      className={`notification ${showNotification ? "" : "hidden"}`}
      onClick={() => setShowNotification(false)}
    >
      <p>커피 사러 갑니다!</p>
    </div>
  );
}

export default Notification;

