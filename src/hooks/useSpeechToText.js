import React, { useState } from "react";

const useSpeechToText = () => {
  const [result, setResult] = useState("");

  function speechToText(params) {
    let SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition,
      recognition;
    try {
      recognition = new SpeechRecognition();
      recognition.lang = "fr-FR";
      recognition.interimResults = true;

      recognition.start();

      recognition.onresult = (event) => {
        const speechResult = event.result[0][0].transcript;

        if (event.result[0].isFinal) {
          setResult(result + " " + speechResult);
        }
      };
      recognition.onspeechend = () => {
        speechToText();
      };
      recognition.onerror = (event) => {
        recognition.stop();
        if (event.error === "no-speech") {
          // speak("JE DETECTE PAS DES MOTS");
        } else if (event.error === "audio-capture") {
          // alert(
          //   "No microphone was found. Ensure that a microphone is installed."
          // );
        } else if (event.error === "not-allowed") {
          // alert("Permission to use microphone is blocked.");
        } else if (event.error === "aborted") {
          // alert("Listening Stopped.");
        } else {
          // alert("Error occurred in recognition: " + event.error);
          console.log("Error occurred in recognition: " + event.error);
        }
      };
    } catch (err) {
      console.log(err);
    }
  }
  return result;
};

export default useSpeechToText;
