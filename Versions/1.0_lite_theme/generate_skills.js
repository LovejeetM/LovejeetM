const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

/**
 * @param {string} htmlContent - The inner HTML content for the banner.
 * @param {string} outputPath - The path to save the generated image.
 * @param {number} width - The width of the output image in pixels.
 * @param {number} height - The height of the output image in pixels.
 */
async function generateTechStackImage(htmlContent, outputPath, width, height) {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    await page.setViewport({ width, height, deviceScaleFactor: 2 });

    const fullHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
            
            * { box-sizing: border-box; }
            body { margin: 0; padding: 0; background-color: transparent; }

            .tech-stack-container {
              width: ${width}px;
              height: ${height}px;
              
              background-color: #050515;
              background-image: 
                
                linear-gradient(135deg, rgba(0, 200, 255, 0.2) 0%, transparent 30%, transparent 70%, rgba(150, 0, 255, 0.2) 100%),
                radial-gradient(circle at 10% 10%, rgba(0, 150, 255, 0.25) 0%, transparent 50%),
                radial-gradient(circle at 90% 80%, rgba(100, 0, 255, 0.25) 0%, transparent 50%);
              
              border: 2px solid rgba(50, 150, 255, 0.3);
              box-shadow: 
                0 0 50px rgba(0, 0, 0, 0.8) inset,
                0 0 30px rgba(0, 225, 255, 0.3);

              border-radius: 20px;
              padding: 120px; /*  10px */
              padding-right: 160px;
              font-family: 'Inter', sans-serif;
              
              display: flex;
              flex-direction: column;
              align-items: flex-start;  
              justify-content: center;
            }

            .main-title {
              font-size: 6.5em;
              font-weight: 700;
              margin: 0 0 70px 0; 
              color: #e0e0e0;
              text-align: left;
            }

            .badge-wall {
              display: flex;
              flex-wrap: wrap; 
              justify-content: space-between;
              align-items: center;
              gap: 25px; 
              width: 100%;
            }
            .badge-wall img {
              height: 70px; 
              transition: transform 0.2s ease-in-out;
            }
            .badge-wall img:hover {
                transform: scale(1.1);
            }
          </style>
        </head>
        <body>
          <div class="tech-stack-container" id="target-stack">
            ${htmlContent}
          </div>
        </body>
        </html>
    `;

    await page.setContent(fullHtml, { waitUntil: 'networkidle0' });
    const element = await page.$('#target-stack');
    await element.screenshot({ path: outputPath, omitBackground: true });
    console.log(`Tech Stack image successfully generated and saved to ${outputPath}`);
    await browser.close();
}


const techStackContent = `
    <h1 class="main-title">My Skills</h1>
    <div class="badge-wall">
        <!-- All badges in one block -->
        <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
        <img src="https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=white" />
        <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" />
        <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" />
        <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
        <img src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white" />
        <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
        <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
        <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" />
        <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" />
        <img src="https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white" />
        <img src="https://img.shields.io/badge/LangChain-FFFFFF?style=for-the-badge" />
        <img src="https://img.shields.io/badge/Scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" />
        <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white" />
        <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" />
        <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
        <img src="https://img.shields.io/badge/Swing-555555?style=for-the-badge" />
        <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
        <img src="https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white" />
        <img src="https://img.shields.io/badge/Amazon%20AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" />
        <img src="https://img.shields.io/badge/Google%20Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" />
        <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" />
        <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
        <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
        <img src="https://img.shields.io/badge/Gemini%20API-4A90E2?style=for-the-badge" />
        <img src="https://img.shields.io/badge/IBM%20Cloud-1F70C1?style=for-the-badge&logo=ibmcloud&logoColor=white" />



            
        <img src="https://img.shields.io/badge/Open3D-0055FF?style=for-the-badge&logo=open3d&logoColor=white" />
        <img src="https://img.shields.io/badge/Hugging%20Face-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black" />
        <img src="https://img.shields.io/badge/Depth%20Estimation-4B0082?style=for-the-badge" />
        <img src="https://img.shields.io/badge/Deep%20Learning-FF6F00?style=for-the-badge&logo=deeplearningdotai&logoColor=white" />
        <img src="https://img.shields.io/badge/Async%20IO-008B8B?style=for-the-badge" />
        <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" />
        <img src="https://img.shields.io/badge/Next-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
        <img src="https://img.shields.io/badge/LangGraph-222222?style=for-the-badge" />
        <img src="https://img.shields.io/badge/LangSmith-444444?style=for-the-badge" />
        <img src="https://img.shields.io/badge/n8n-EA4E9D?style=for-the-badge&logo=n8n&logoColor=white" />
        <img src="https://img.shields.io/badge/Arduino%20IDE-00979D?style=for-the-badge&logo=arduino&logoColor=white" />
        <img src="https://img.shields.io/badge/IoT-00BFA5?style=for-the-badge&logo=internetofthings&logoColor=white" />
        <img src="https://img.shields.io/badge/MediaMTX-FF4500?style=for-the-badge" />
        <img src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white" />
        <img src="https://img.shields.io/badge/Web%20Servers-1E90FF?style=for-the-badge" />
        <img src="https://img.shields.io/badge/Pydantic-E92063?style=for-the-badge&logo=pydantic&logoColor=white" />
        <img src="https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white" />
        <img src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" />
        <img src="https://img.shields.io/badge/Seaborn-76B900?style=for-the-badge" />
        <img src="https://img.shields.io/badge/Matplotlib-11557C?style=for-the-badge" />
        <img src="https://img.shields.io/badge/MATLAB-FF6600?style=for-the-badge&logo=mathworks&logoColor=white" />
        <img src="https://img.shields.io/badge/SciPy-8CAAE6?style=for-the-badge&logo=scipy&logoColor=white" />
        <img src="https://img.shields.io/badge/WebSockets-0000CD?style=for-the-badge" />
        <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" />
        <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" />
        <img src="https://img.shields.io/badge/PythonAnywhere-1D9FD7?style=for-the-badge&logo=pythonanywhere&logoColor=white" />
        <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
        <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
        <img src="https://img.shields.io/badge/Canva-00C4CC?style=for-the-badge&logo=canva&logoColor=white" />
        <img src="https://img.shields.io/badge/Hadoop-FFB500?style=for-the-badge&logo=apachehadoop&logoColor=black" />
        <img src="https://img.shields.io/badge/NVIDIA%20NIM-76B900?style=for-the-badge&logo=nvidia&logoColor=white" />
        <img src="https://img.shields.io/badge/NVIDIA%20TensorRT-76B900?style=for-the-badge&logo=nvidia&logoColor=white" />
        <img src="https://img.shields.io/badge/NVIDIA%20DALI-76B900?style=for-the-badge&logo=nvidia&logoColor=white" />
        <img src="https://img.shields.io/badge/NVIDIA%20TAO%20Toolkit-76B900?style=for-the-badge&logo=nvidia&logoColor=white" />
        <img src="https://img.shields.io/badge/Gradio-FF6F00?style=for-the-badge&logo=gradio&logoColor=white" />
        <img src="https://img.shields.io/badge/Vector%20Stores-2E8B57?style=for-the-badge" />
        <img src="https://img.shields.io/badge/VirtualBox-183A61?style=for-the-badge&logo=virtualbox&logoColor=white" />
        <img src="https://img.shields.io/badge/VMware-607078?style=for-the-badge&logo=vmware&logoColor=white" />
        <img src="https://img.shields.io/badge/Kaggle-20BEFF?style=for-the-badge&logo=kaggle&logoColor=white" />
        <img src="https://img.shields.io/badge/Google%20Colab-F9AB00?style=for-the-badge&logo=googlecolab&logoColor=black" />
        <img src="https://img.shields.io/badge/AI%20Agents-800080?style=for-the-badge" />
        <img src="https://img.shields.io/badge/CUDA-76B900?style=for-the-badge&logo=nvidia&logoColor=white" />
        <img src="https://img.shields.io/badge/PyWinAuto-FF4500?style=for-the-badge" />
        <img src="https://img.shields.io/badge/Tkinter-FFB6C1?style=for-the-badge" />
        <img src="https://img.shields.io/badge/Speech%20Recognition-4682B4?style=for-the-badge" />
        <img src="https://img.shields.io/badge/Piper%20TTS-00CED1?style=for-the-badge" />
        <img src="https://img.shields.io/badge/TTS%20%26%20STT-1E90FF?style=for-the-badge" />
        <img src="https://img.shields.io/badge/IBM%20Watson-054ADA?style=for-the-badge&logo=ibmwatson&logoColor=white" />
        <img src="https://img.shields.io/badge/Geopy-556B2F?style=for-the-badge" />
        <img src="https://img.shields.io/badge/aiosqlite-00008B?style=for-the-badge" />
        <img src="https://img.shields.io/badge/Transformers-FF6F00?style=for-the-badge&logo=huggingface&logoColor=white" />
        <img src="https://img.shields.io/badge/CNNs-FF1493?style=for-the-badge" />
        <img src="https://img.shields.io/badge/ANNs-9370DB?style=for-the-badge" />
        <img src="https://img.shields.io/badge/RNNs-6A5ACD?style=for-the-badge" />
        <img src="https://img.shields.io/badge/LSTMs-4682B4?style=for-the-badge" />
        <img src="https://img.shields.io/badge/GANs-DC143C?style=for-the-badge" />
        <img src="https://img.shields.io/badge/Live%202D-FF69B4?style=for-the-badge" />

    </div>
`;

generateTechStackImage(
    techStackContent,
    './skills_banner.png',
    2400,                      // Width   def 2400
    1900                       // Height  def 1000
).catch(console.error);