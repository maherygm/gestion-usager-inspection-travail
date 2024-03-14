const Speak = (texte) => {
  if ("speechSynthesis" in window) {
    const message = new SpeechSynthesisUtterance();
    // Définir le texte à lire
    message.text = texte;

    window.speechSynthesis.speak(message);
  } else {
    console.error("La synthèse vocale n'est pas supportée par ce navigateur.");
  }
};

export default Speak;
