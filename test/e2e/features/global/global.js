'use strict';

const { Before, After, setDefaultTimeout } = require('cucumber');
const puppeteer = require('puppeteer');

const { TIME_OUT, HEADLESS, RESOLUTION, SHOW_MOUSE } = require('../config.json');

const { installMouseHelper } = require('../helpers/injectors');

Before(async function () {
    //set timeout
    setDefaultTimeout(TIME_OUT);

    //instantiate browser
    this.browser = await puppeteer.launch({
        headless: HEADLESS,
        handleSIGINT: false,
        args: ['--disable-gpu', `--window-size=${RESOLUTION.X},${RESOLUTION.Y}`, '--no-sandbox']
    });

    //instantiate page
    this.page = await this.browser.newPage();

    //mouse viewer
    if (SHOW_MOUSE) installMouseHelper(this.page);

    //stored values
    this.storedValues = {};

    //ignore images
    await this.page.setRequestInterception(true);
    this.page.on('request', req => {
        if (req.resourceType() === 'image') {
            req.abort();
        } else {
            req.continue();
        }
    });
});

After(async function () {
    //clear browser and mongo
    await this.page.close();
    await this.browser.close();

    //clear variables
    this.browser = undefined;
    this.page = undefined;
    this.storedValues = undefined;
});
