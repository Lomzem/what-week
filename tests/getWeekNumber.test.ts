import { expect, test } from "vitest"
import { getWeekNumber } from "../src/utils/getWeekNumber"

test("first day means first week", () => {
  const start = new Date(2026, 0, 20)
  const current = new Date(2026, 0, 20)
  expect(getWeekNumber(start, current)).toBe(1)
})

test("second day means first week", () => {
  const start = new Date(2026, 0, 20)
  const current = new Date(2026, 0, 21)
  expect(getWeekNumber(start, current)).toBe(1)
})

test("saturday same week is the same", () => {
  const start = new Date(2026, 0, 20)
  const current = new Date(2026, 0, 24)
  expect(getWeekNumber(start, current)).toBe(1)
})

test("sunday next week is increased", () => {
  const start = new Date(2026, 0, 20)
  const current = new Date(2026, 0, 25)
  expect(getWeekNumber(start, current)).toBe(2)
})

test("Midterm Week", () => {
  const start = new Date(2026, 0, 20)
  const current = new Date(2026, 2, 10)
  expect(getWeekNumber(start, current)).toBe(8)
})

test("Spring Break Start", () => {
  const start = new Date(2026, 0, 20)
  const current = new Date(2026, 2, 15)
  expect(getWeekNumber(start, current)).toBe(9)
})

test("Spring Break Sat", () => {
  const start = new Date(2026, 0, 20)
  const current = new Date(2026, 2, 21)
  expect(getWeekNumber(start, current)).toBe(9)
})

test("Spring Break End Sun", () => {
  const start = new Date(2026, 0, 20)
  const current = new Date(2026, 2, 22)
  expect(getWeekNumber(start, current)).toBe(10)
})

test("Spring Break End Mon", () => {
  const start = new Date(2026, 0, 20)
  const current = new Date(2026, 2, 23)
  expect(getWeekNumber(start, current)).toBe(10)
})

test("arbitrary dates", () => {
  const start = new Date(2026, 0, 20)
  expect(getWeekNumber(start, new Date(2026, 0, 26))).toBe(2)
  expect(getWeekNumber(start, new Date(2026, 0, 27))).toBe(2)
  expect(getWeekNumber(start, new Date(2026, 0, 28))).toBe(2)
  expect(getWeekNumber(start, new Date(2026, 0, 29))).toBe(2)
  expect(getWeekNumber(start, new Date(2026, 0, 30))).toBe(2)
  expect(getWeekNumber(start, new Date(2026, 0, 31))).toBe(2)
  expect(getWeekNumber(start, new Date(2026, 1, 1))).toBe(3)
})
