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
              
              /* --- MODIFIED STYLES START --- */

              /* Main background gradient matching the new reference image */
              background: linear-gradient(105deg, #e8eefc 20%, #585ad8ff 45%, #7fcde0ff 100%);

              /* Sharp inner shadow for a clean, non-blurry black outline at the edges */
              box-shadow: 
                inset 0 0 0 2px rgba(0, 0, 0, 0.6),
                inset 0 0 40px rgba(0, 0, 0, 0.3);

              border-radius: 20px;
              padding: 40px;
              font-family: 'Inter', sans-serif;
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
              /* Updated vibrant text gradient from the reference image */
              background: linear-gradient(90deg, #0e0f18ff 60%, #2e276bff);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              color: transparent;
            }
            .header-container .subtitle {
              font-size: 3.5em;
              font-weight: 500;
              color: #2c3a47; /* Dark text for high contrast on the light background */
              margin: 15px 0 30px 0;
              border: none;
              border-radius: 12px;
              padding: 15px 30px;
              background-color: rgba(240, 245, 255, 0.85); /* Light "pill" background */
            }
            .header-container .description {
              font-size: 2.8em;
              line-height: 1.6;
              color: rgba(66, 56, 50, 0.9); /* Light text color for the darker part of the gradient */
              text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); /* Shadow for readability */
              max-width: 70%;
              margin-bottom: 40px;
            }
            .header-container .social-links a {
              display: inline-block;
              text-decoration: none;
              background-color: #0077B5; /* LinkedIn button blue */
              color: white;
              padding: 18px 45px;
              border-radius: 8px;
              font-weight: 700;
              font-size: 2.2em;
              letter-spacing: 1px;
              transition: transform 0.2s ease, box-shadow 0.2s ease;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            }
            .header-container .social-links a:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
            }

            /* --- MODIFIED STYLES END --- */
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


// Updated HTML content to match the new image (emoji and button)
const headerContent = `
    <h1>
        Hey there, I'm Lovejeet Matharu! 👋
    </h1>
    <p class="subtitle">
        AI & Machine Learning Developer
    </p>
    <p class="description">
        I build intelligent AI systems, machine learning models and autonomous robots that perceive, learn, and interact with the real world.
    </p>
    <div class="social-links">
        <a href="https://www.linkedin.com/in/lovejeet-singh-matharu-975679213/" target="_blank">
            LINKEDIN
        </a>
    </div>
`;


generateHeaderImage(
    headerContent,
    './github_header1.png', 
    2400,                  
    1350                   
).catch(console.error);