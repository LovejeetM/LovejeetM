const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

/**
 * @param {string} htmlContent - The inner HTML content for the banner.
 * @param {string} outputPath - The path to save the generated image.
 * @param {number} width - The width of the output image in pixels.
 * @param {number} height - The height of the output image in pixels.
 */
async function generateSimpleHeader(htmlContent, outputPath, width, height) {
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
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
            
            * { box-sizing: border-box; }
            body { margin: 0; padding: 0; background-color: transparent; }

            .title-banner {
              width: ${width}px;
              height: ${height}px;
              
              background-color: #050515;
              background-image: 
                linear-gradient(135deg, rgba(0, 200, 255, 0.2) 0%, transparent 30%, transparent 70%, rgba(150, 0, 255, 0.2) 100%),
                radial-gradient(circle at 10% 10%, rgba(0, 150, 255, 0.25) 0%, transparent 50%),
                radial-gradient(circle at 90% 80%, rgba(100, 0, 255, 0.25) 0%, transparent 50%);
              
              /* Subtle outer glow */
              box-shadow: 0 0 30px rgba(0, 225, 255, 0.2);

              border-radius: 15px;
              padding: 0 80px;
              font-family: 'Inter', sans-serif;
              
              display: flex;
              align-items: center;
              justify-content: flex-start;
            }

            .main-title {
              font-size: 3.5em;
              font-weight: 700;
              color: #ffffffff;
              margin: 0;
              letter-spacing: -2px;
            }
          </style>
        </head>
        <body>
          <div class="title-banner" id="target-banner">
            ${htmlContent}
          </div>
        </body>
        </html>
    `;

    await page.setContent(fullHtml, { waitUntil: 'networkidle0' });
    const element = await page.$('#target-banner');
    await element.screenshot({ path: outputPath, omitBackground: true });
    console.log(`Projects header image successfully generated and saved to ${outputPath}`);
    await browser.close();
}

const projectsHeaderContent = `
    <h1 class="main-title">My Featured Projects</h1>
`;

generateSimpleHeader(
    projectsHeaderContent,
    './projects_header.png', 
    2400,
    150
).catch(console.error);