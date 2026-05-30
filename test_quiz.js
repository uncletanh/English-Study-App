const puppeteer = require('puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Simple static server
const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath == './') filePath = './index.html';

    const extname = path.extname(filePath);
    let contentType = 'text/html';
    switch (extname) {
        case '.js': contentType = 'text/javascript'; break;
        case '.css': contentType = 'text/css'; break;
        case '.json': contentType = 'application/json'; break;
    }

    fs.readFile(filePath, (error, content) => {
        if (error) {
            console.error('500 ERROR for:', filePath);
            res.writeHead(500);
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(8080, async () => {
    console.log('Server running at http://127.0.0.1:8080/');
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', err => console.error('PAGE ERROR:', err));
    
    await page.goto('http://127.0.0.1:8080/');
    
    // Switch to quiz tab
    await page.waitForSelector('#nav-quiz', { visible: true });
    await page.click('#nav-quiz');
    
    // Wait for questions to load
const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(2000);
    
    // Check if we have buttons
    const buttons = await page.$$('#quiz-container button');
    console.log('Found buttons:', buttons.length);
    
    if (buttons.length > 0) {
        console.log('Evaluating click on first answer button');
        const errorMsg = await page.evaluate(() => {
            try {
                const btns = document.querySelectorAll('#quiz-container button');
                btns[0].click();
                return null;
            } catch (e) {
                return e.message + '\\n' + e.stack;
            }
        });
        
        if (errorMsg) {
            console.error('CLICK ERROR:', errorMsg);
        } else {
            console.log('Click executed without throwing.');
        }
        await delay(1000);
    }
    
    await browser.close();
    server.close();
});
