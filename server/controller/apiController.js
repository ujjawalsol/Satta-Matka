const PanelOne = require('../models/panelOneModel');
const PanelTwo = require('../models/panelTwoModel');
const PanelThree = require('../models/panelThreeModel');
const PanelFour = require('../models/panelFourModel');
const startScraping = require('../api/scrap');
const zlib = require('zlib');
const { redis } = require('../config/dbConfig');

const collections = [
  {
    model: PanelOne,
    fields: ['Home', 'MilanMorning', 'Sridevi', 'KalyanMorning', 'Padmavati',
  'Madhuri', 'SrideviMorning', 'Maharani', 'Prabhat', 'KarnatakDay', 'TimeBazarMorning',
  'TimeBazar', 'Diamond', 'TaraMumbaiDay', 'MainKalyan', 'TimeBazarDay', 'MilanDay',
  'MainBazarDay', 'PunaBazar', 'Kalyan', 'SrideviNight', 'DiamondNight', 'MadhuriNight',
  'NightTimeBazar', 'TaraMumbaiNight', 'MainBazarNight', 'MilanNight', 'RajdhaniNight',
  'MainBazar', 'MaharaniDay', 'SrideviDay', 'Dhanashree', 'KalyanNight', 'KalyanPro',
  'Gujarat', 'OldMainMumbai', 'RajLaxmi', 'MadhurMorning', 'MadhurDay', 'MadhurNight',
  'RatanKhatri', 'MaharaniNight', 'PadmavatiNight', 'JayShreeDay', 'SriDhanalaxmi', 'DhanshreeDay',
  'MainBombay', 'SundayBazar', 'SundayBazarNight', 'SuperGoaDay', 'PunaNightMain', 'Khajana',
  'SrideviMain', 'SrideviMainNight', 'SupremeMorning', 'SupremeDay', 'SupremeNight',
  'GujratNight', 'DhanaShreeNight'],
    document: null,
  },
  {
    model: PanelTwo,
    fields: ['BSFBazar', 'SitaMorning', 'KalyanGoldNight', 'BombayDay',
  'Srilakshmi', 'MilanBazar', 'RatanDay', 'Chandan', 'Maharashtra', 'Worli', 'WorliMumbaiDay',
  'MainMumbaiRK', 'WorliMumbai', 'SitaDay', 'SatyamMumbai', 'CountryBazar', 'RoseBazarDay',
  'RoseBazarNight', 'JantaMorning', 'CentralBombay', 'TeenPatti', 'SuperTime', 'Bhagyalaxmi',
  'kaali', 'MainMumbaiNight', 'SuperMatka', 'MaharajTime', 'MaharajDay', 'MaharajNight',
  'BazarDay', 'BazarNight', 'RajdhaniDay', 'PunaNight', 'TimeNight', 'Mohini', 'MumbaiStar',
  'kalyanBazar', 'MainBazarMumbai', 'Mahadevi', 'SatyamMumbaiEvening', 'KalyanGold', 'SitaNight',
  'KamalMorning', 'KamalDay', 'KamalNight', 'RajdhaniSunday', 'AndhraMorning', 'AndhraDay', 'AndhraNight',
  'BombayRajshreeDay', 'BombayRajshreeNight', 'MilanBazarMorning', 'MilanBazarDay', 'MilanBazarNight',
  'MahadeviMorning', 'MahadeviNight', 'RajyogDay', 'RajyogNight', 'Gowa', 'RoyalDay', 'MumbaiStarMain'],
    document: null,
  },
  {
    model: PanelThree,
    fields: ['JodiMilanMorning', 'JodiSridevi', 'JodiKalyanMorning', 'JodiPadmavati',
  'JodiMadhuri', 'JodiSrideviMorning', 'JodiMaharani', 'JodiPrabhat', 'JodiKarnatakDay', 'JodiTimeBazarMorning', 'JodiTimeBazar',
  'JodiDiamond', 'JodiTaraMumbaiDay', 'JodiMainKalyan', 'JodiTimeBazarDay', 'JodiMilanDay', 'JodiMainBazarDay',
  'JodiPunaBazar', 'JodiKalyan', 'JodiSrideviNight', 'JodiDiamondNight', 'JodiMadhuriNight', 'JodiNightTimeBazar',
  'JodiTaraMumbaiNight', 'JodiMainBazarNight', 'JodiMilanNight', 'JodiRajdhaniNight', 'JodiMainBazar', 'JodiMaharaniDay',
  'JodiSrideviDay', 'JodiDhanashree', 'JodiKalyanNight', 'JodiKalyanPro', 'JodiGujarat', 'JodiOldMainMumbai',
  'JodiRajLaxmi', 'JodiMadhurMorning', 'JodiMadhurDay', 'JodiMadhurNight', 'JodiRatanKhatri', 'JodiMaharaniNight',
  'JodiPadmavatiNight', 'JodiJayShreeDay', 'JodiSriDhanalaxmi', 'JodiDhanshreeDay', 'JodiMainBombay', 'JodiSundayBazar',
  'JodiSundayBazarNight', 'JodiSuperGoaDay', 'JodiPunaNightMain', 'JodiKhajana', 'JodiSrideviMain', 'JodiSrideviMainNight',
  'JodiSupremeMorning', 'JodiSupremeDay', 'JodiSupremeNight', 'JodiGujratNight', 'JodiDhanaShreeNight'],
    document: null,
  },
  {
    model: PanelFour,
    fields: ['JodiBSFBazar', 'JodiSitaMorning', 'JodiKalyanGoldNight', 'JodiBombayDay',
  'JodiSrilakshmi', 'JodiMilanBazar', 'JodiRatanDay', 'JodiChandan', 'JodiMaharashtra', 'JodiWorli',
  'JodiWorliMumbaiDay', 'JodiMainMumbaiRK', 'JodiWorliMumbai', 'JodiSitaDay', 'JodiSatyamMumbai',
  'JodiCountryBazar', 'JodiRoseBazarDay', 'JodiRoseBazarNight', 'JodiJantaMorning', 'JodiCentralBombay',
  'JodiTeenPatti', 'JodiSuperTime', 'JodiBhagyalaxmi', 'Jodikaali', 'JodiMainMumbaiNight', 'JodiSuperMatka',
  'JodiMaharajTime', 'JodiMaharajDay', 'JodiMaharajNight', 'JodiBazarDay', 'JodiBazarNight', 'JodiRajdhaniDay',
  'JodiPunaNight', 'JodiTimeNight', 'JodiMohini', 'JodiMumbaiStar', 'JodikalyanBazar', 'JodiMainBazarMumbai',
  'JodiMahadevi', 'JodiSatyamMumbaiEvening', 'JodiKalyanGold', 'JodiSitaNight', 'JodiKamalMorning', 'JodiKamalDay',
  'JodiKamalNight', 'JodiRajdhaniSunday', 'JodiAndhraMorning', 'JodiAndhraDay', 'JodiAndhraNight', 'JodiBombayRajshreeDay',
  'JodiBombayRajshreeNight', 'JodiMilanBazarMorning', 'JodiMilanBazarDay', 'JodiMilanBazarNight', 'JodiMahadeviMorning',
  'JodiMahadeviNight', 'JodiRajyogDay', 'JodiRajyogNight', 'JodiGowa', 'JodiRoyalDay', 'JodiMumbaiStarMain'],
    document: null,
  },
];

async function initializeDocuments() {
  try {
    for (let collection of collections) {
      collection.document = await collection.model.findOne();
      if (!collection.document) {
        const initialFields = collection.fields.reduce((acc, field) => {
          acc[field] = '';
          return acc;
        }, {});
        collection.document = new collection.model(initialFields);
      }
    }
  } catch (error) {
    console.log('Error initializing documents:', error.message);
    throw error; // Re-throw the error to ensure the process is halted
  }
}

async function storeHtmlTags() {
  try {
    // Initialize documents for all collections
    await initializeDocuments();

    // Fetch the HTML tags using the Puppeteer script
    const scraper = startScraping();

    let collectionIndex = 0;
    let fieldIndex = 0;

    for await (const htmlTag of scraper) {
      try {
        if (htmlTag) {
          const buffer = Buffer.from(htmlTag);
          const compressedBuffer = zlib.deflateSync(buffer);
          const compressedData = compressedBuffer.toString('base64');

          const currentCollection = collections[collectionIndex];
          const currentField = currentCollection.fields[fieldIndex];

          // Store data in MongoDB
          currentCollection.document[currentField] = compressedData;
          await currentCollection.document.save();

          // Store data in Redis
          await redis.set (currentField, compressedData);
          console.log(`${currentField} data stored/updated successfully.`);

          fieldIndex++;

          // Transition to the next collection if all fields in the current collection have been processed
          if (fieldIndex >= currentCollection.fields.length) {
            collectionIndex++;
            fieldIndex = 0;
          }

          // Exit if all collections have been processed
          if (collectionIndex >= collections.length) {
            break;
          }
        } else {
          console.log(`No data fetched for the current field in collection ${collectionIndex + 1}.`);
        }
      } catch (error) {
        console.log(`Error processing HTML tag for collection ${collectionIndex + 1}:`, error.message);
      }
    }
  } catch (error) {
    console.log('An error occurred during the scraping process:', error.message);
  }
}

// Schedule the function to run every hour
setInterval(storeHtmlTags, 60 * 60 * 1000);

module.exports = {
  storeHtmlTags,
};