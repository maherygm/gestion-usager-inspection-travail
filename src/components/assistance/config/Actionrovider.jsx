import React from "react";
import Overview from "../widget/Overview";

import Speak from "../../../hooks/useSpeak";
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Salut comment ça vas");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleOverview = () => {
    const botMessage = createChatBotMessage("voici ce que nous faisons", {
      widget: "options",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleTransport = () => {
    const botMessage = createChatBotMessage(
      "Identifier les trajets des bus ainsi que leurs points d'arrêt, et faciliter la localisation des taxis constituent des aspects clés pour améliorer la mobilité urbaine.",
      {
        widget: "options",
      }
    );
    Speak(
      "Identifier les trajets des bus ainsi que leurs points d'arrêt, et faciliter la localisation des taxis constituent des aspects clés pour améliorer la mobilité urbaine."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleLieux = () => {
    const botMessage = createChatBotMessage(
      "chercher des informations sur des lieux particuliers, tels que des restaurants, des magasins, des attractions touristiques, etc. Nous somme la pour vous aider",
      {
        widget: "options",
      }
    );
    Speak(
      "chercher des informations sur des lieux particuliers, tels que des restaurants, des magasins, des attractions touristiques, etc. Nous somme la pour vous aider"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleArticles = () => {
    const botMessage = createChatBotMessage(
      "Vous pouvez affiner votre recherche en utilisant des filtres tels que le type de produit, la marque, la taille, la couleur, et bien d'autres. Naviguez à travers nos catégories pour découvrir une gamme variée d'articles qui correspondent à vos besoins et préférences",
      {
        widget: "options",
      }
    );
    Speak(
      "Vous pouvez affiner votre recherche en utilisant des filtres tels que le type de produit, la marque, la taille, la couleur, et bien d'autres. Naviguez à travers nos catégories pour découvrir une gamme variée d'articles qui correspondent à vos besoins et préférences"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleCertificat = () => {
    const botMessage = createChatBotMessage(
      "Obtenez une longueur d'avance avec nos certificats et diplômes prestigieux ! Notre programme vous offre des compétences pratiques et des connaissances spécialisées. Faites progresser votre carrière et augmentez vos opportunités professionnelles. Rejoignez notre communauté d'apprenants et obtenez votre certificat ou diplôme dès aujourd'hui pour un avenir plus brillant.",
      {
        widget: "options",
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleIconnu = () => {
    const botMessage = createChatBotMessage(
      "Désole je ne comprend pas Veuiller reformuler votre demande",
      {
        widget: "options",
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleJavascriptQuiz = () => {
    const botMessage = createChatBotMessage("javascript cliked", {
      widget: "JavascriptQuiz",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleComment_allerVous = () => {
    const botMessage = createChatBotMessage(
      "oui je vais bien aujourd'hui. comment puis je vous aider  "
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleJeux = () => {
    const botMessage = createChatBotMessage(
      "il y a une section dedié au jeux dans notre plateforme vous pouvez en profiter pleinnement"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleAurevoir = () => {
    const botMessage = createChatBotMessage("Au revoir a très bientot ");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handlesuperNova = () => {
    const botMessage = createChatBotMessage(
      "Suppernova est une  team composer de plusieur talent ,des eleves de l'université de fianarantsoa talentueux c'est eu qui on contribuer au aboutissement de ce projet"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleObjectif = () => {
    const botMessage = createChatBotMessage(
      "Notre objectif est de facilité l'acces au education des jeunne malagasy"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleBibliothequeNumerique = () => {
    const botMessage = createChatBotMessage(
      "Dans ce Plateforme il y a  une bibliotheque numerique dedie aux apprenant et au proffeseur"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handle_demande = () => {
    const botMessage = createChatBotMessage(
      "si vous voulez quelque chose je suis la pour vous aider",
      {
        widget: "options",
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handle_devinnete = () => {
    const botMessage = createChatBotMessage(
      "tu veux jouez a un jeux  de devinnete ?"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handle_devinnete_1 = () => {
    const botMessage = createChatBotMessage("Qui m'a developper ?");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handle_devinnete_2 = () => {
    const botMessage = createChatBotMessage(
      "oui c'est lui qui est le proprietaire de tesla"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handle_devinnete_3 = () => {
    const botMessage = createChatBotMessage(
      "Qui est le proprietaire de tesla ?"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleOverview,
            handleTransport,
            handleLieux,
            handleArticles,
            handleIconnu,
            handleComment_allerVous,
            handleAurevoir,
          },
        });
      })}
    </div>
  );
};
export default ActionProvider;
