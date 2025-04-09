// Set up WebAudio API context
//-------------------------------------------------------------------------------------------------
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
//-------------------------------------------------------------------------------------------------
// Create the master gain node
//-------------------------------------------------------------------------------------------------
const masterGain = audioContext.createGain();
masterGain.connect(audioContext.destination);
//-------------------------------------------------------------------------------------------------
// Create Variables (Oscillators)
//-------------------------------------------------------------------------------------------------
let carrierOscillator;
let modulatorOscillator;
let ringModulator;

//-------------------------------------------------------------------------------------------------
// Set up user interface controls
//-------------------------------------------------------------------------------------------------
//START BUTTON
const startButton = document.getElementById("startButton");
//-------------------------------------------------------------------------------------------------
//SLIDER
//-------------------------------------------------------------------------------------------------
//SLIDER: CARRIER FREQ
const frequencyControl = document.getElementById("frequency");
const modulatorFrequencyControl = document.getElementById("modulatorFrequency"); //id mismatch!
//SLIDER: MASTER GAIN
const masterGainControl = document.getElementById("masterFader"); //id mismatch!
//-------------------------------------------------------------------------------------------------
//NUMBERS/LABELS
//-------------------------------------------------------------------------------------------------
//NUMBER/LABEL: CARRIER FREQ
const frequencyValue = document.getElementById("frequencyLabel"); //id mismatch!
//NUMBER/LABEL: MODULATOR FREQ SLIDER
const modulatorFrequencyValue = document.getElementById(
  "modulatorFrequencyLabel"
); //id mismatch!
//NUMBER/LABEL: MASTER GAIN
const masterGainValue = document.getElementById("fadeLabel"); //id mismatch!

//------------------------------------------------------------------
// Update displayed values when sliders are adjusted
//------------------------------------------------------------------
//CARRIER FREQ
frequencyControl.addEventListener("input", () => {
  frequencyValue.textContent = frequencyControl.value;
  if (carrierOscillator) {
    carrierOscillator.frequency.setValueAtTime(
      frequencyControl.value,
      audioContext.currentTime
    );
  }
});
//------------------------------------------------------------------
//MODULATOR FREQUENCY
modulatorFrequencyControl.addEventListener("input", () => {
  modulatorFrequencyValue.textContent = modulatorFrequencyControl.value;
  if (modulatorOscillator) {
    modulatorOscillator.frequency.setValueAtTime(
      modulatorFrequencyControl.value,
      audioContext.currentTime
    );
  }
});
//------------------------------------------------------------------
//MASTER GAIN
masterGainControl.addEventListener("input", () => {
  masterGainValue.textContent = masterGainControl.value;
  masterGain.gain.setValueAtTime(
    masterGainControl.value,
    audioContext.currentTime
  );
});
//------------------------------------------------------------------
// Function to start the audio context
//------------------------------------------------------------------
startButton.addEventListener("click", () => {
  audioContext.resume().then(() => {
    startButton.disabled = true;
    createRingModulation();
  });
});

//------------------------------------------------------------------
//Create Modulators
//------------------------------------------------------------------
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
  //------------------------------------------------------------------
  // Connect to master gain
  //------------------------------------------------------------------
  ringModulator.connect(masterGain);

  //------------------------------------------------------------------
  // Start oscillators
  //------------------------------------------------------------------
  carrierOscillator.start();
  modulatorOscillator.start();
}
