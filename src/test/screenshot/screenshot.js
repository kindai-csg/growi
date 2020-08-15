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
  await page.screenshot({ path: 'src/test/screenshot/after/top.png' });

  const imageBefore = fs.readFileSync('src/test/screenshot/before/top.png');
  const imageAfter = fs.readFileSync('src/test/screenshot/after/top.png');

  let misMatchPercentage = 0;

  // Compare the difference between before and after
  resemble(imageAfter).compareTo(imageBefore)
    .ignoreColors()
    .onComplete((data) => {
      // fs.writeFileSync('src/test/screenshot/diff/top.png', data.getBuffer());
      misMatchPercentage = data.misMatchPercentage;
    });

  // Difference tolerance
  expect(misMatchPercentage).toBeLessThan(1);
});
