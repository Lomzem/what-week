import { weeksBetween } from "../src/utils.js";

const START_DATE = new Date(2026, 0, 20);

/**
 * @param {string} description
 * @param {Date} date
 * @param {number} expected
 */
function TEST(description, date, expected) {
  const result = weeksBetween(START_DATE, date);
  if (result !== expected) {
    console.error(`FAILED TEST: ${description}`);
    console.error(
      `date1=${START_DATE.toDateString()} date2=${date.toDateString()}`,
    );
    console.error(`Expected: ${expected}`);
    console.error(`Got: ${result}`);
  } else {
    console.log(`test passed: ${description}`);
  }
}

TEST("same day", new Date(2026, 0, 20), 1);
TEST("one day after", new Date(2026, 0, 21), 1);
TEST("sat same week", new Date(2026, 0, 24), 1);
TEST("sunday next week", new Date(2026, 0, 25), 2);
