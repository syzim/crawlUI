import { JobCrawlUIPage } from './app.po';

describe('job-crawl-ui App', () => {
  let page: JobCrawlUIPage;

  beforeEach(() => {
    page = new JobCrawlUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
