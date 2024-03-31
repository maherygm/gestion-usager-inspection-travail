import React from "react";
import "./styles/__chatBot.css";
import { Chatbot, Message, Action } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import iconsChat from "../../assets/icon/png/icons8_chat_16px_1.png";

import config from "./config/config";
import MessageParser from "./config/MessageParser";
import ActionProvider from "./config/Actionrovider";

const ChatbotComponent = () => {
  const saveMessages = (messages, HTMLString) => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    return messages;
  };
  return (
    <div className="main-container-chatbot hidden-chat">
      <div
        className="iconsChat "
        onClick={() => {
          document
            .querySelector(".hidden-chat")
            .classList.remove("hidden-chat");
        }}
      >
        <img
          style={{
            width: "23px",
            margin: "0px 10px 0px 0px",
          }}
          src={iconsChat}
          alt=""
        />
        <span>Discuter</span>
      </div>
      <div className="chatbot-conntent">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          messageHistory={loadMessages()}
          actionProvider={ActionProvider}
          saveMessages={saveMessages}
          placeholderText="Ecrire votre message ici"
        />
      </div>
    </div>
  );
};

export default ChatbotComponent;
