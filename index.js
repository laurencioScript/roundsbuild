const puppeteer = require('puppeteer');

async function captureSpecificArea(url, outputPath) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    
    await page.setViewport({ width: 252, height: 365 });
  
    await page.goto(url);
  
    const clipDimensions = { x: 0, y: 0, width: 242, height: 350 };
    await page.screenshot({ path: outputPath, clip: clipDimensions });
  
    await browser.close();
  }

async function downloadImagesFromWeb(urls) {
    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      console.log('>>> url', url);
      await captureSpecificArea(url, `image_${i + 1}.png`)
    }
}




const  urls = [
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-6png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-57png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-50png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-60png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-35png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-16png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-31png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-53png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-54png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-25png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-23png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-64png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-41png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-34png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-55png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-21png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-30png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-38png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-47png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-63png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-52png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-26png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-27png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-45png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-36png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-20png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-56png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-7png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-67png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-37png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-58png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-66png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-18png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-44png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-3png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-43png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-10png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-12png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-14png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-19png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-2png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-1png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-33png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-22png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-8png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-9png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-13png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-40png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-46png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-15png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-17png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-48png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-39png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-51png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-61png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-4png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-5png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-29png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-49png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-24png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-65png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-59png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-28png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-42png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-32png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-11png.png',
    'https://tiermaker.com/images/chart/chart/rounds-cards-63935/unknown-62png.png',
]

downloadImagesFromWeb(urls)
