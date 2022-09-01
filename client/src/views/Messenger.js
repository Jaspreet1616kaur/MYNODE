import React from "react";

import "./messenger.css";
function Messenger() {
  return (
    <>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper"> box</div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">online</div>
        </div>
        <span className="noConversationText">
          Open a conversation to start a chat.
        </span>
      </div>
    </>
  );
}

export default Messenger;
