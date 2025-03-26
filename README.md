# **Project 3: Modulation Techniques**

## **Overview**
In this project, you will create a simple web-based synthesizer that generates a waveform and applies a modulation technique to the oscillator or its output using the WebAudio API.

### **Modulation Techniques**
Choose **ONE** of the following techniques to implement:

#### **Amplitude Modulation**
- **Ring Modulation**
![Ring Modulation.png](img%2FRing%20Modulation.png)
- **Tremolo Effect**
![Tremolo.png](img%2FTremolo.png)
#### **Frequency Modulation**
- **FM Synthesis**
![FM.png](img%2FFM.png)
#### **Delay Modulation**
- **Flanger Effect**
- ![Flanger.png](img%2FFlanger.png)
- **Chorus Effect**

#### **Filter Modulation**
- **Phaser Effect**
- **Wah Effect**
- **Wobble Bass**

---
## **Objectives**
- Apply the basics of the WebAudio API.
- Implement one of the modulation techniques in WebAudio.
- Use **JavaScript event listeners** to respond to user input in real time.
- Work with **HTML input elements** to create a functional user interface.

---
## **Requirements**

### **1. User Interface (`index.html`)**
Your `index.html` file should provide **interactive controls** for users to manipulate the sound, including:
- Controls for the primary parameters of the chosen modulation technique.
- A master gain control.
- A button to start the audio context (`context.resume()`).

### **2. Audio Processing (`script.js`)**
Your `script.js` should:
- Implement all necessary WebAudio nodes and context to create your chosen effect.
- Ensure real-time updates and smooth parameter changes through event listeners.

---
## **Setup Instructions**
1. Create `index.html` with all necessary **sliders and labels**.
2. Write `script.js` to create the **WebAudio context** and handle **user interactions**.
3. Test your synthesizer to ensure all controls **function properly and update in real-time**.

---
## **GitHub Pages Deployment**

### **1. Create a New Repository**
- Log into your GitHub account.
- Navigate to the Repositories tab and click "New."
- Name your repository **`<username>.github.io`**, replacing `<username>` with your GitHub username.
- Choose public or private visibility.
- Click "Create repository."

### **2. Upload Your Website Files**
- Click the "Add file" button and select "Upload files."
- Upload `index.html`, `script.js`, and any supporting files.
- Add a commit message and click "Commit changes."

### **3. Enable GitHub Pages**
- Go to your repository's **Settings** tab.
- Scroll down to the **GitHub Pages** section.
- Under **Source**, select the branch where your files are uploaded (typically `main`).
- Click "Save."
- A URL (e.g., `https://<username>.github.io`) will be generated.

### **4. Access Your Website**
- Visit your assigned URL to view your project.
- Updates to your repository will automatically reflect on your site.

---
## **Submission Instructions**
Submit the url to your page (e.g., `https://<username>.github.io`) 