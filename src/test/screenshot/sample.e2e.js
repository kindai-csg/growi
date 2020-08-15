/* eslint-disable no-undef */
beforeAll(async() => {
  await page.goto('https://qiita.com/');
});

afterAll(async(done) => {
  done();
});

it('トップページ', async() => {
  await page.screenshot({ path: 'src/test/screenshot/after/top.png' });

  await expect(page.title()).resolves.toMatch('Qiita');
});
