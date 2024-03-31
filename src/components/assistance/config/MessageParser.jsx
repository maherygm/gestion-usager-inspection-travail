import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    let messageLower = message.toLowerCase();
    console.log(messageLower);
    if (messageLower.includes("salut") || messageLower.includes("bonjour")) {
      actions.handleHello();
    } else if (
      messageLower.includes("service") ||
      messageLower.includes("menu")
    ) {
      actions.handleOverview();
    } else if (
      messageLower.includes("transport")
    ) {
      actions.handleTransport();
    } else if (messageLower.includes("ça vas")) {
      actions.handleComment_allerVous();
    } else if (messageLower.includes("jeux")) {
      actions.handleJeux();
      actions.handle_devinnete();
    } else if (
      messageLower.includes("au revoir") ||
      messageLower.includes("bye")
    ) {
      actions.handleAurevoir();
    } else if (
      messageLower.includes("supernova") ||
      messageLower.includes("developpeur")
    ) {
      actions.handlesuperNova();
    }  else if (
      messageLower.includes("aides") ||
      messageLower.includes("aide")
    ) {
      actions.handle_demande();
    } else if (messageLower.includes("oui je veux jouez")) {
      actions.handle_devinnete_3();
    } else if (messageLower.includes("elon musk")) {
      actions.handle_devinnete_2();
    } else {
      actions.handleIconnu();
    }
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
