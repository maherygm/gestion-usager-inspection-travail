import React from "react";

const AvatarChatBot = ({ image }) => {
  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        background: `url(${image})`,
        borderRadius: "100%",
      }}
    ></div>
  );
};

export default AvatarChatBot;
