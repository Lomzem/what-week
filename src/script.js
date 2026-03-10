import { getWeekNumber, FIRST_DAY } from "./utils.js";

const CURRENT_DAY = new Date();

/** @type {HTMLSpanElement | null} */
const weekNum = document.querySelector("#weekNum");
weekNum.textContent = getWeekNumber(FIRST_DAY, CURRENT_DAY);
