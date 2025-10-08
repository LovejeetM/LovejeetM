const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

/**
 * @param {string} cardHtml - The inner HTML content for the project card.
 * @param {string} outputPath - The path to save the generated image.
 * @param {number} width - The width of the output image in pixels.
 * @param {number} height - The height of the output image in pixels.
 */
async function generateCardImage(cardHtml, outputPath, width, height) {
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
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
            
            * {
              box-sizing: border-box;
            }
            body {
              margin: 0;
              padding: 0;
              background-color: transparent;
            }
            .project-card {
              width: ${width}px;
              height: ${height}px;
              background-image: 
                linear-gradient(135deg, rgba(0, 200, 255, 0.15) 0%, transparent 25%, transparent 75%, rgba(150, 0, 255, 0.15) 100%),
                linear-gradient(45deg, rgba(50, 0, 255, 0.15) 0%, transparent 25%, transparent 75%, rgba(0, 255, 180, 0.15) 100%),
                linear-gradient(225deg, rgba(0, 100, 255, 0.1) 0%, transparent 50%, rgba(200, 0, 255, 0.1) 100%),
                radial-gradient(circle at top left, rgba(0, 150, 255, 0.08) 0%, transparent 50%),
                radial-gradient(circle at bottom right, rgba(100, 0, 255, 0.08) 0%, transparent 50%);
              background-color: #0a0a2a; 
              border: 2px solid rgba(50, 150, 255, 0.2); 
              box-shadow: 
                0 4px 30px rgba(0, 0, 0, 0.7),
                0 0 20px rgba(0, 200, 255, 0.25),
                0 0 20px rgba(150, 0, 255, 0.25);
              
              border-radius: 24px;
              padding: 60px; 
              font-family: 'Roboto', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
              color: #e0e0e0;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
            }
            .main-image {
                width: 100%;
                border-radius: 20px; 
                margin-bottom: 40px; 
                box-shadow: 0 4px 15px rgba(0,0,0,0.5); 
            }
            h3 {
              color: rgba(12, 35, 201, 1);
              font-size: 5.0em;
              font-weight: 500;
              margin: 130px 0 25px 0;
            }
            p.description {
              font-size: 4.2em; 
              line-height: 1.5;
              font-weight: 300;
              margin: 0 0 40px 0; 
              color: #ffffffff; 
            }
            .tech-badges {
                margin-bottom: 20px; 
            }
            .tech-badges img {
                height: 125px; 
                margin-right: 20px;
                margin-bottom: 20px;
                border: 4px solid #181818ff;
            }
            a.view-project {
              color: color: rgba(12, 35, 201, 1);
              text-decoration: none;
              font-size: 4.2em; 
              font-weight: 500;
              margin-top: 50px; 
            }
          </style>
        </head>
        <body>
          <div class="project-card" id="target-card">
            ${cardHtml}
          </div>
        </body>
        </html>
    `;

    await page.setContent(fullHtml, { waitUntil: 'networkidle0' });
    const element = await page.$('#target-card');
    await element.screenshot({ path: outputPath, omitBackground: true });
    console.log(`Image successfully generated and saved to ${outputPath}`);
    await browser.close();
}


const serenaImageRelativePath = './img/rbt.png';

if (!fs.existsSync(serenaImageRelativePath)) {
    console.error(`ERROR: Image not found at path: ${path.resolve(serenaImageRelativePath)}`);
    process.exit(1);
}

const imageFileBuffer = fs.readFileSync(serenaImageRelativePath);
const imageAsBase64 = imageFileBuffer.toString('base64');
const imageMimeType = path.extname(serenaImageRelativePath) === '.png' ? 'image/png' : 'image/jpeg';
const imageAsDataUri = `data:${imageMimeType};base64,${imageAsBase64}`;
console.log('Image file read and converted to Base64 Data URI successfully.');

const serenaCardContent = `
    <img 
        src="${imageAsDataUri}" 
        alt="Screenshot of Serena AI Therapy Platform" 
        class="main-image"
    >
    <h3>Chess Machine Learning & Move Prediction</h3>
    <p class="description">A system using Computer Vision and a trained ML model to detect chess pieces from an image, generate FEN, and predict the optimal move using a chess engine.</p>
    <div class="tech-badges">
        <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
        <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask"/>
        <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white" alt="OpenCV"/>
        <img src="https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="scikit-learn"/>
    </div>
    <a href="#" target="_blank" class="view-project">View Project →</a>
`;

generateCardImage(
    serenaCardContent,
    './robot_project_card.png',
    2048,
    2376
).catch(console.error);