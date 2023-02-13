import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

// =========================GIVEN SECTION=================================

Given(/^Google page is opened$/, async function () {
  await browser.url("https://www.google.com");
});

Given(/^A default webpage is opened at "(.*)"$/, async function (addURL) {
  await browser.maximizeWindow();
  await browser.url(`/${addURL}`);
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
});

Given(/^A default webpage is opened$/, async function () {
  await browser.maximizeWindow();
  await browser.url("/");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
});

Given(
  "A webpage with URL {string} with login and password {string} and {string} is opened",
  async function (url, login, password) {
    await browser.maximizeWindow();
    await browser.url(url);
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await $(`#user-name`).setValue(login);
    await $(`#password`).setValue(password);
    await $(`#login-button`).click();
  }
);

// =========================WHEN SECTION=================================

When("I wait {int} seconds", async function (searchItem) {
  await browser.pause(searchItem * 1000);
});

When(/^Search with (.*)$/, async function (searchItem) {
  let elem = await $(`input.gLFyf`);
  await elem.click();
  await elem.setValue(searchItem);
  await browser.keys("Enter");
});

When(/^Perform web interactions input$/, async function () {
  let elem = await browser.$(`input[type=number]`);
  let str = "123456";
  let strNum = str.split("");
  //console.log(`>>> : ${strNum}`);
  for (let item of strNum) {
    await elem.addValue(item);
    await browser.pause(500);
  }
  await browser.pause(15000);
});

When(/^Perform web interactions dropdown$/, async function () {
  let elem = await browser.$(`#dropdown`);
  let elemArr = await browser.$$(`option[value]`);
  let optionsArr = ["Please select an option", "Option 1", "Option 2"];
  let arr = [];

  for (let item of elemArr) {
    let val = await item.getText();
    arr.push(val);
  }

  chai.expect(optionsArr).to.eql(arr);

  await elem.selectByVisibleText(`Option 1`);

  await browser.pause(15000);
});

When(/^Perform web interactions checkboxes$/, async function () {
  let elemArr = await browser.$$(`input`);

  for (let item of elemArr) {
    if (!(await item.isSelected())) {
      await browser.pause(1000);
      await item.click();
    }
  }

  for (let item of elemArr) {
    chai.expect(await item.isSelected()).to.be.true;
  }

  await browser.pause(15000);
});

When(/^Perform web interactions open new window$/, async function () {
  await $(`=Click Here`).click();
  await $(`=Elemental Selenium`).click();
  let windowHandlers = await browser.getWindowHandles();

  for (let item of windowHandlers) {
    await browser.switchToWindow(item);
    await browser.pause(1000);
    switch (await browser.getTitle()) {
      case `The Internet`: {
        chai.expect(await $(`h3`).getText()).to.equal(`Opening a new window`);
        break;
      }
      case `New Window`: {
        chai.expect(await $(`h3`).getText()).to.equal(`New Window`);
        break;
      }
      case `Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro`: {
        chai.expect(await $(`h1`).getText()).to.equal(`Elemental Selenium`);
        break;
      }
    }
  }

  await browser.switchWindow(`https://the-internet.herokuapp.com/windows`);
  await browser.pause(10000);
});

When("I click on element with locator {string}", async function (elemLocator) {
  await $(`${elemLocator}`).click();
});

When(
  "I click on element with locator {string} and text {string}",
  async function (elemLocator, elemText) {
    await $(`${elemLocator}=${elemText}`).click();
  }
);

When("Perform web interactions alerts {string}", async function (alertAction) {
  if (await browser.isAlertOpen()) {
    switch (alertAction) {
      case "ACCEPT": {
        await browser.acceptAlert();
        break;
      }
      case "DISMISS": {
        await browser.dismissAlert();
        break;
      }
    }
  }

  await browser.pause(2000);
});

When(
  "I upload file {string} with element {string}",
  async function (fileLocator, uploadElement) {
    await $(uploadElement).setValue(`${process.cwd()}/${fileLocator}`);
  }
);

When("I switch to frame {string}", async function (frameLocator) {
  await browser.switchToFrame(await $(frameLocator));
});

When(
  "I enter text {string} to element {string}",
  async function (inputText, elemLocator) {
    await (await $(elemLocator)).addValue(inputText);
  }
);

When("I switch to parent frame", async function () {
  await browser.switchToParentFrame();
});

When("I press keys {string} + {string}", async function (key1, key2) {
  await browser.keys([key1, key2]);
});

When("I press key {string}", async function (key) {
  await browser.keys(key);
});

When(
  "I scroll to element with locator {string} and text {string}",
  async function (elemLocator, elemText) {
    await $(`${elemLocator}=${elemText}`).scrollIntoView();
  }
);

// =========================THEN SECTION=================================

Then(
  "I expect that text of element with locator {string} is equal to {string}",
  async function (elemLocator, elemText) {
    chai.expect(await $(elemLocator).getText()).to.equal(elemText);
  }
);

Then(/^Click on first search result$/, async function () {
  let elem = await $(`[href="https://webdriver.io/"] h3`);
  await elem.click();
});

Then(/^URL should match (.*)$/, async function (expectedURL) {
  console.log(`>>>> Expected URL: ${expectedURL}`);
  let url = await browser.getUrl();
  chai.expect(url).to.equal(expectedURL);
});

Then(
  "I expect that number of elements with locator {string} on the page is {int}",
  async function (elemLocator, numberOfItems) {
    chai.expect(await $$(elemLocator).length).to.equal(numberOfItems);
  }
);

Then(
  "I expect that each element value with locator {string} is {word} than {float}",
  async function (elemLocator, arg, minPrice) {
    let elemArray = await $$(elemLocator);
    for (let item of elemArray){
      let price = Number((await item.getText()).replace('$',''));
      chai.expect(price).to.be[arg](minPrice);
    }
  }
);