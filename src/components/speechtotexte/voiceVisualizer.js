import Wave from "wave-visualizer";

export default class VoiceVisualizer {
  constructor() {
    this.audioStream = null; // Initialisez this.audioStream à null
  }

  async openAudioStream() {
    try {
      this.audioStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
    } catch (err) {
      console.error("Cannot open Audio Stream ", err);
    }
  }

  async startVisualization() {
    if (!this.audioStream) {
      await this.openAudioStream();
    }

    if (this.audioStream) {
      let wave = new Wave();

      wave.fromStream(this.audioStream, "output", {
        type: "bars",
        colors: ["blue", "3498db"],
        stroke: 1,
      });
    } else {
      console.error("Audio stream is not available.");
    }
  }
  // async closeAudioStream() {
  //   if (this.audioStream) {
  //     this.audioStream.getTracks().forEach((track) => {
  //       track.stop();
  //     });
  //     this.audioStream = null;
  //   } else {
  //     console.error("Audio stream is not available.");
  //   }
  // }

  async stopVisualization() {
    if (this.audioStream) {
      await this.audioStream.getTracks().forEach((track) => {
        track.stop();
      });
      this.audioStream = null;
    } else {
      console.error("Audio stream is not available.");
    }
  }
}
