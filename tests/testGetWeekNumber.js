import { getWeekNumber } from "../src/utils.js";

const START_DATE = new Date(2026, 0, 20);

/**
 * @param {string} description
 * @param {Date} date
 * @param {number} expected
 */
function TEST(description, date, expected) {
  const result = getWeekNumber(START_DATE, date);
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

TEST("", new Date(2026, 0, 26), 2);
TEST("", new Date(2026, 0, 27), 2);
TEST("", new Date(2026, 0, 28), 2);
TEST("", new Date(2026, 0, 29), 2);
TEST("", new Date(2026, 0, 30), 2);
TEST("", new Date(2026, 0, 31), 2);
TEST("", new Date(2026, 1, 1), 3);

TEST("Midterm Week", new Date(2026, 2, 10), 8);
