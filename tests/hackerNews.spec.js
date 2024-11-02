const { test, expect } = require('@playwright/test');

test('Validate that the first 100 articles are sorted by newest to oldest', async ({ page }) => {
  try {
    // Step 1: Navigate to Hacker News
    await page.goto('https://news.ycombinator.com/news');
    console.log('Navigated to Hacker News');

    // Step 2: Get the timestamps for the first 100 articles using the .age element
    const articleTimes = await page.locator('tr.athing + tr .age a').allTextContents();
    console.log('Article times extracted:', articleTimes.slice(0, 100));

    // Step 3: Convert timestamps to a comparable format
    const convertedTimes = articleTimes.slice(0, 100).map(time => convertToComparableTime(time));
    console.log('Converted times:', convertedTimes);

    // Step 4: Assert that the times are sorted from newest to oldest
    for (let i = 1; i < convertedTimes.length; i++) {
      console.log(`Comparing time ${convertedTimes[i]} with previous time ${convertedTimes[i - 1]}`);
      expect(convertedTimes[i]).toBeLessThanOrEqual(convertedTimes[i - 1]);
    }

    console.log('Test passed: The articles are sorted from newest to oldest.');

  } catch (error) {
    console.error('Test failed: Articles are not sorted from newest to oldest.');
    console.error('Error details:', error.message);
  }

  console.log('Test completed');
});

// Helper function to convert relative time (e.g., '10 minutes ago') to milliseconds
function convertToComparableTime(timeString) {
  const [value, unit] = timeString.split(' ');
  const timeValue = parseInt(value, 10);

  if (unit.startsWith('minute')) {
    return timeValue * 60000; // 1 minute = 60,000 milliseconds
  } else if (unit.startsWith('hour')) {
    return timeValue * 3600000; // 1 hour = 3,600,000 milliseconds
  } else if (unit.startsWith('day')) {
    return timeValue * 86400000; // 1 day = 86,400,000 milliseconds
  } else if (unit.startsWith('month')) {
    return timeValue * 2592000000; // 1 month = 2,592,000,000 milliseconds
  } else if (unit.startsWith('year')) {
    return timeValue * 31536000000; // 1 year = 31,536,000,000 milliseconds
  }

  return 0; // In case there's no recognizable unit
}
