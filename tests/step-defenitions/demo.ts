import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is opened$/, async function () {
  await browser.url("https://www.google.com");
  await browser.pause(2000);
});

When(/^Search with (.*)$/, async function (searchItem) {
  console.log(`>>>> Search Item: ${searchItem}`);
  let elem = await $(`input.gLFyf`);
  await elem.click();
  await elem.setValue(searchItem);
  await browser.keys("Enter");
});

Then(/^Click on first search result$/, async function () {
  let elem = await $(`[href="https://webdriver.io/"] h3`);
  await await elem.click();
});

Then(/^URL should match (.*)$/, async function (expectedURL) {
  console.log(`>>>> Expected URL: ${expectedURL}`);
  let url = await browser.getUrl();
  chai.expect(url).to.equal(expectedURL);
});

Given(/^A webpage is opened$/, async function () {
  await browser.maximizeWindow();
  await browser.url("/inputs");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
});

When(/^Perform web interactions$/, async function () {
  let elem = await browser.$(`input[type=number]`);
  let str = "123456";
  let strNum = str.split("");
  console.log(`>>> : ${strNum}`);
  for (let item of strNum) {
    await elem.addValue(item);
    await browser.pause(500);
  }
  await browser.pause(15000);
});
