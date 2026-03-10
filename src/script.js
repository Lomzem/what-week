import { getWeekNumber, FIRST_DAY } from "./utils.js";

const CURRENT_DAY = new Date();

/** @type {HTMLSpanElement | null} */
const currentDateElem = document.querySelector("#currentDate");
currentDateElem.textContent = CURRENT_DAY.toDateString();

/** @type {HTMLSpanElement | null} */
const weekNumElem = document.querySelector("#weekNum");
weekNumElem.textContent = getWeekNumber(FIRST_DAY, CURRENT_DAY);
