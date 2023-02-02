import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is opened$/, async function(){
    await browser.url("https://www.google.com");
    await browser.pause(2000);

});

When(/^Search with (.*)$/, async function(searchItem){
    console.log(`>>>> Search Item: ${searchItem}`);
    let elem = await $(`input.gLFyf`);
    await elem.click();
    await elem.setValue(searchItem);
    await browser.keys("Enter");
});

Then(/^Click on first search result$/, async function(){
    let elem = await $(`[href="https://webdriver.io/"] h3`);
    await await elem.click();
});

Then(/^URL should match (.*)$/, async function(expectedURL){
    console.log(`>>>> Expected URL: ${expectedURL}`);
    let url = await browser.getUrl();
    chai.expect(url).to.equal(expectedURL);
});