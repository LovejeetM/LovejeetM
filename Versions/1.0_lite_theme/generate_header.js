const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

/**
 * @param {string} headerHtml - The inner HTML content for the header.
 * @param {string} outputPath - The path to save the generated image.
 * @param {number} width - The width of the output image in pixels.
 * @param {number} height - The height of the output image in pixels.
 */
async function generateHeaderImage(headerHtml, outputPath, width, height) {
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
            /* Using a modern, clean font */
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
            
            * {
              box-sizing: border-box;
            }
            body {
              margin: 0;
              padding: 0;
              background-color: transparent;
            }
            .header-container {
              width: ${width}px;
              height: ${height}px;
              
              background-color: rgba(185, 206, 211, 1);
              background-image: 
                
                linear-gradient(135deg, rgba(34, 81, 211, 0.52) 0%, transparent 30%, transparent 70%, rgba(16, 35, 189, 0.55) 100%),
                radial-gradient(circle at 10% 10%, rgba(16, 35, 189, 0.55) 0%, transparent 50%),
                radial-gradient(circle at 90% 80%, rgba(16, 35, 189, 0.55) 0%, transparent 50%);
              
              border: 2px solid rgba(50, 150, 255, 0.3);
              box-shadow: 
                0 0 50px rgba(16, 35, 189, 0.85) inset,
                0 0 30px rgba(16, 35, 189, 0.55);
              

              border-radius: 20px;
              padding: 40px;
              font-family: 'Inter', sans-serif;
              color: #15151aff; 
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
            .header-container h1 {
              font-size: 7.8em;
              font-weight: 700;
              margin: 0;
              margin-bottom: 20px;
              letter-spacing: -3px;
              background: linear-gradient(90deg, #050316ff, #336ace, #050316ff);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              color: transparent;
            }
            .header-container h1 img {
              height: 0.9em; 
              vertical-align: middle;
              margin-left: 15px;
            }
            .header-container .subtitle {
              font-size: 3.5em;
              font-weight: 500;
              color: rgba(13, 12, 17, 0.9);
              margin: 15px 0 30px 0;
              border: 1px solid rgba(255, 255, 255, 0.4);
              border-radius: 8px;
              padding: 10px 20px;
              background-color: rgba(255,255,255,0.17);
            }
            .header-container .description {
              font-size: 2.8em;
              line-height: 1.6;
              color: #111113ff; 
              max-width: 70%;
              margin-bottom: 40px;
            }
            .header-container .social-links img {
              height: 95px; 
              transition: transform 0.2s ease;
              border: 4px solid #181818ff; 
            }
            .header-container .social-links img:hover {
                transform: scale(1.05);
            }
          </style>
        </head>
        <body>
          <div class="header-container" id="target-header">
            ${headerHtml}
          </div>
        </body>
        </html>
    `;

    await page.setContent(fullHtml, { waitUntil: 'networkidle0' });
    const element = await page.$('#target-header');
    await element.screenshot({ path: outputPath, omitBackground: true });
    console.log(`Header image successfully generated and saved to ${outputPath}`);
    await browser.close();
}



const headerContent = `
    <h1>
        Hey there, I'm Lovejeet Matharu! 
        <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" />
    </h1>
    <p class="subtitle">
        AI & Machine Learning Developer
    </p>
    <p class="description">
        I build intelligent AI systems, machine learning models and autonomous robots that perceive, learn, and interact with the real world.
    </p>
    <div class="social-links">
        <a href="https://www.linkedin.com/in/lovejeet-singh-matharu-975679213/" target="_blank">
            <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
        </a>
    </div>
`;


generateHeaderImage(
    headerContent,
    './github_header_new.png', 
    2400,                  
    1350                   
).catch(console.error);

/**   Grid:  repeating-linear-gradient(to bottom, rgba(0, 255, 255, 0.05), rgba(0, 255, 255, 0.05) 1px, transparent 1px, transparent 40px),
                repeating-linear-gradient(to right, rgba(170, 0, 255, 0.05), rgba(170, 0, 255, 0.05) 1px, transparent 1px, transparent 40px), */