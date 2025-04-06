// Set up WebAudio API context
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Create the master gain node
const masterGain = audioContext.createGain();
masterGain.connect(audioContext.destination);

// Create oscillators
let carrierOscillator, modulatorOscillator, ringModulator;

// Set up user interface controls
const frequencyControl = document.getElementById("frequency");
const modulatorFrequencyControl = document.getElementById(
  "modulator-frequency"
);
const masterGainControl = document.getElementById("master-gain");
const startButton = document.getElementById("startButton");

// Frequency display
const frequencyValue = document.getElementById("frequency-value");
const modulatorFrequencyValue = document.getElementById(
  "modulator-frequency-value"
);
const masterGainValue = document.getElementById("master-gain-value");

// Update displayed values when sliders are adjusted
frequencyControl.addEventListener("input", () => {
  frequencyValue.textContent = frequencyControl.value;
  if (carrierOscillator) {
    carrierOscillator.frequency.setValueAtTime(
      frequencyControl.value,
      audioContext.currentTime
    );
  }
});

modulatorFrequencyControl.addEventListener("input", () => {
  modulatorFrequencyValue.textContent = modulatorFrequencyControl.value;
  if (modulatorOscillator) {
    modulatorOscillator.frequency.setValueAtTime(
      modulatorFrequencyControl.value,
      audioContext.currentTime
    );
  }
});

masterGainControl.addEventListener("input", () => {
  masterGainValue.textContent = masterGainControl.value;
  masterGain.gain.setValueAtTime(
    masterGainControl.value,
    audioContext.currentTime
  );
});

// Function to start the audio context
startButton.addEventListener("click", () => {
  audioContext.resume().then(() => {
    startButton.disabled = true;
    createRingModulation();
  });
});

// Create the ring modulation effect
function createRingModulation() {
  // Carrier oscillator
  carrierOscillator = audioContext.createOscillator();
  carrierOscillator.frequency.setValueAtTime(
    frequencyControl.value,
    audioContext.currentTime
  );

  // Modulator oscillator
  modulatorOscillator = audioContext.createOscillator();
  modulatorOscillator.frequency.setValueAtTime(
    modulatorFrequencyControl.value,
    audioContext.currentTime
  );

  // Ring modulator
  ringModulator = audioContext.createGain();
  modulatorOscillator.connect(ringModulator.gain);
  carrierOscillator.connect(ringModulator);

  // Connect to master gain
  ringModulator.connect(masterGain);

  // Start oscillators
  carrierOscillator.start();
  modulatorOscillator.start();
}
