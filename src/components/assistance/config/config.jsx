import {
  createChatBotMessage,
  createClientMessage,
  createCustomMessage,
} from "react-chatbot-kit";

import image from "../../../assets/branding/img/400x500/kid-1837375_640.png";
import iconsClose from "../../../assets/icon/png/icons8_close_16px.png";
import Overview from "../widget/Overview";

import Fligth from "../customMessage/Fligth.jsx";
import Options from "../option/Options";
import Quiz from "../quiz/Quiz";
const botName = "Mity";

const config = {
  initialMessages: [
    createChatBotMessage(
      `Salut je suis ${botName}, Bienvenue sur notre plateforme  ! Comment puis-je vous aider aujourd'hui `
    ),
    createChatBotMessage("Voici un appercu de ce que nous faisons", {
      withAvatar: false,
      delay: 500,
      widget: "options",
    }),
  ],
  state: {
    todos: [],
  },
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      props: {},
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "JavascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {},
    },
  ],

  botName: botName,
  lang: "fr",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#9b71f5",
    },
    chatButton: {
      backgroundColor: "#9b71f5",
    },
  },
  customComponents: {
    header: () => (
      <div
        style={{
          backgroundColor: "#9b71f5",
          padding: "15px",
          borderRadius: "3px",
          color: "white",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <p>Discuter avec Mity</p>
        <div
          onClick={() => {
            document
              .querySelector(".main-container-chatbot")
              .classList.add("hidden-chat");
          }}
          style={{
            position: "absolute",
            right: "9px",
            top: "7px",
            cursor: "pointer",
          }}
        >
          <img src={iconsClose} />
        </div>
      </div>
    ),
    botAvatar: () => (
      <img style={{ width: "40px", height: "40px" }} src={image} />
    ),
  },
  customMessages: {
    custom: (props) => <Fligth {...props} />,
  },
};
export default config;
