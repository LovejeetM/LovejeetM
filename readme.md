<style>
  * {
    box-sizing: border-box;
  }
  table {
    width: 100%; 
    table-layout: fixed; 
  }

  table td {
    background-color: #0a0a2a; /* Deeper dark blue-black base */
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    padding: 10px;
    vertical-align: top;
    
    background-image: 
      linear-gradient(135deg, rgba(0, 200, 255, 0.15) 0%, transparent 25%, transparent 75%, rgba(150, 0, 255, 0.15) 100%),
      linear-gradient(45deg, rgba(50, 0, 255, 0.15) 0%, transparent 25%, transparent 75%, rgba(0, 255, 180, 0.15) 100%),
      linear-gradient(225deg, rgba(0, 100, 255, 0.1) 0%, transparent 50%, rgba(200, 0, 255, 0.1) 100%),
      radial-gradient(circle at top left, rgba(0, 150, 255, 0.08) 0%, transparent 50%),
      radial-gradient(circle at bottom right, rgba(100, 0, 255, 0.08) 0%, transparent 50%);
    background-color: #0a0a2a; /* Fallback and underlying dark color */

    border: 1px solid rgba(50, 150, 255, 0.2); /* Bluish border */

    box-shadow: 
      0 4px 15px rgba(0, 0, 0, 0.7),
      0 0 15px rgba(0, 200, 255, 0.25), /* Light blue glow */
      0 0 15px rgba(150, 0, 255, 0.25); /* Purple glow */
    
    transition: all 0.3s ease-in-out;

    color: #e0e0e0; 
  }

  table td:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 8px 25px rgba(0, 0, 0, 0.9),
      0 0 25px rgba(0, 200, 255, 0.5), /* Enhanced light blue glow */
      0 0 25px rgba(150, 0, 255, 0.5); /* Enhanced purple glow */
    border-color: rgba(50, 150, 255, 0.5); /* More prominent border on hover */
  }

  table td h3 {
    color: #00bfff; /* Keep existing header color, it fits */
  }

  table td a {
    color: #00bfff; /* Keep existing link color */
    text-decoration: none;
  }

  table td a:hover {
    text-decoration: underline;
  }
</style>

<div align="center" style="margin-bottom: 30px;">
  <h1>
    Hey there, I'm Lovejeet Matharu! 
    <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="30px"/>
  </h1>
  <p>
    <strong>AI & Machine Learning Engineer</strong>
  </p>
  <p>
    I'm a Master's candidate specializing in AI, driven by a deep passion for robotics, autonomous systems, and continuous learning.
    <br/>
    My focus is on applying state-of-the-art AI to build tangible innovations—from intelligent user-assistance platforms to complex autonomous robots that perceive and interact with the world.
  </p>
</div>

<div align="center" style="margin-bottom: 30px;">
  <a href="https://www.linkedin.com/in/lovejeet-singh-matharu-975679213/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
</div>

---

## My Featured Projects

<table style="margin-bottom: 50px;">
  <tr>
    <td width="50%" style="vertical-align: top; padding: 10px;">
      <h5>            </h5>
      <img 
        src="./img/serena.png" 
        alt="Screenshot of Serena AI Therapy Platform" 
        width="100%" 
        style="border-radius: 8px; margin-bottom: 10px;"
      >
      <h3>Serena: AI Therapy Platform</h3>
      <p>A full-stack AI therapy platform leveraging Python (Flask) and TypeScript with a synchronized Live2D character for an immersive, empathetic user experience.</p>
      <p>
        <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
        <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
        <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask"/>
        <img src="https://img.shields.io/badge/WebSocket-010101?style=for-the-badge" alt="WebSocket"/>
        <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite"/>
      </p>
      <a href="https://github.com/LovejeetM/Serena" target="_blank">View Project →</a>
      <h5>            </h5>
    </td>
    <td width="50%" style="vertical-align: top; padding: 10px;">
      <h5>            </h5>
      <img 
        src="./img/frame2.png" 
        alt="Screenshot of Weather Point Java Desktop App" 
        width="100%" 
        style="border-radius: 8px; margin-bottom: 10px;"
      >
      <h3>Weather Point: Java Desktop App</h3>
      <p>A robust Java Swing desktop app providing real-time weather, multi-day forecasts, and AI-powered travel recommendations via RESTful API integrations.</p>
      <p>
        <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="Java"/>
        <img src="https://img.shields.io/badge/Swing-555555?style=for-the-badge" alt="Swing"/>
        <img src="https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white" alt="Maven"/>
        <img src="https://img.shields.io/badge/RESTful%20APIs-027585?style=for-the-badge" alt="REST APIs"/>
        <img src="https://img.shields.io/badge/Gemini%20API-4A90E2?style=for-the-badge" alt="Gemini API"/>
      </p>
      <a href="https://github.com/LovejeetM/Weather-Point" target="_blank">View Project →</a>
      <h5>            </h5>
    </td>
  </tr>
  <tr>
    <td width="50%" style="vertical-align: top; padding: 10px;">
      <h5>            </h5>
      <img 
        src="./img/chess.png" 
        alt="Screenshot of Chess ML & Move Prediction System" 
        width="100%" 
        style="border-radius: 8px; margin-bottom: 10px;"
      >
      <h3>Chess ML & Move Prediction</h3>
      <p>A system using Computer Vision and a trained ML model to detect chess pieces from an image, generate FEN, and predict the optimal move using a chess engine.</p>
      <p>
        <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
        <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask"/>
        <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white" alt="OpenCV"/>
        <img src="https://img.shields.io/badge/Scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="Scikit-learn"/>
      </p>
      <a href="https://github.com/LovejeetM/Chess_ML_Algorithm" target="_blank">View Project →</a>
      <h5>            </h5>
    </td>
    <td width="50%" style="vertical-align: top; padding: 10px;">
      <h5>            </h5>
      <img 
        src="./img/rbt.png" 
        alt="Image of Plantey Autonomous Robot" 
        width="100%" 
        style="border-radius: 8px; margin-bottom: 10px;"
      >
      <h3>Plantey: Autonomous Robot</h3>
      <p>An autonomous robot for the Gemini API competition that uses LiDAR, a Raspberry Pi camera, and the A* algorithm to navigate and analyze plants with AI.</p>
      <p>
        <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
        <img src="https://img.shields.io/badge/Gemini%20API-4A90E2?style=for-the-badge" alt="Gemini API"/>
        <img src="https://img.shields.io/badge/Raspberry%20Pi-A22846?style=for-the-badge&logo=raspberry-pi&logoColor=white" alt="Raspberry Pi"/>
        <img src="https://img.shields.io/badge/Hardware-5E5E5E?style=for-the-badge" alt="Hardware"/>
        <img src="https://img.shields.io/badge/A*%20Algorithm-FF6F00?style=for-the-badge" alt="A* Algorithm"/>
      </p>
      <a href="https://github.com/LovejeetM/autonomous_robot" target="_blank">View Project →</a>
      <h5>            </h5>
    </td>
  </tr>
</table>

---

## My Tech Stack

<p align="center">
  <strong>Languages:</strong><br>
  <a href="#"><img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" /></a>
  <a href="#"><img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" /></a>
  <a href="#"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" /></a>
  <a href="#"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /></a>
  <a href="#"><img src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white" /></a>
  <a href="#"><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /></a>
  <a href="#"><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /></a>
</p>

<p align="center">
  <strong>AI / ML Frameworks:</strong><br>
  <a href="#"><img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" /></a>
  <a href="#"><img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" /></a>
  <a href="#"><img src="https://img.shields.io/badge/LangChain-FFFFFF?style=for-the-badge" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" /></a>
  <a href="#"><img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white" /></a>
</p>

<p align="center">
  <strong>Backend, Frontend & Databases:</strong><br>
  <a href="#"><img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Node.js-339933?style=for-for-the-badge&logo=nodedotjs&logoColor=white" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Swing-555555?style=for-the-badge" /></a>
  <a href="#"><img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white" /></a>
</p>

<p align="center">
  <strong>Tools, Platforms & Cloud:</strong><br>
  <a href="#"><img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Google%20Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Amazon%20AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Gemini%20API-4A90E2?style=for-the-badge" /></a>
</p>

---