const resemble = require('resemblejs');
const fs = require('fs-extra');

/* eslint-disable no-undef */
beforeAll(async() => {
  await page.goto('https://qiita.com/');
});

afterAll(async(done) => {
  done();
});

it('Top page', async() => {

  const imageStock = fs.readFileSync('src/test/screenshot/stock/top.png');
  const image = await page.screenshot();

  let misMatchPercentage = 0;

  // Compare the difference between before and after
  resemble(image).compareTo(imageStock)
    .ignoreColors()
    .onComplete((data) => {
      // fs.writeFileSync('src/test/screenshot/diff/top.png', data.getBuffer());
      misMatchPercentage = data.misMatchPercentage;
    });

  // Difference tolerance
  expect(misMatchPercentage).toBeLessThan(1);
});
