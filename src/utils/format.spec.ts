import { describe, it, expect } from 'vitest'
import { formatTemperature, formatTime, formatWeekday, formatTimeOfDay } from '@/utils/format'

const LOCAL_TIME = new Date('2024-03-09 11:55:0')
const DATE_NOW = new Date('2024-03-09 11:45:00')
const DATE_NEXT_DAY = new Date('2024-03-10 11:45:00')
const DATE_2_DAYS_AFTER = new Date('2024-03-11 11:45:00')
const DATE_NEXT_HOUR = new Date('2024-03-09 12:45:00')
const MORNING = new Date('2024-03-09 10:45:00')
const AFTERNOON = new Date('2024-03-09 15:00:00')
const EVENING = new Date('2024-03-09 22:00:00')
const TEMPERATURE = 30

describe('Verify format functions', () => {
  it('should return the hour as Now', () => {
    expect(formatTime(DATE_NOW, LOCAL_TIME)).toEqual('now')
  })

  it('should return the expected formatted hour', () => {
    expect(formatTime(DATE_NEXT_HOUR, LOCAL_TIME)).toEqual('12 PM')
  })

  it('should return the expected formatted temperature', () => {
    expect(formatTemperature(TEMPERATURE)).toEqual('30°C')
  })

  it('should return the expected formatted weekday as today', () => {
    expect(formatWeekday(DATE_NOW, DATE_NOW)).toEqual('Today')
  })

  it('should return the expected formatted weekday as tomorrow', () => {
    expect(formatWeekday(DATE_NEXT_DAY, DATE_NOW)).toEqual('Tomorrow')
  })

  it('should return the expected formatted weekday as Monday', () => {
    expect(formatWeekday(DATE_2_DAYS_AFTER, DATE_NOW)).toEqual('Monday')
  })

  it('should return the expected formatted morning', () => {
    expect(formatTimeOfDay(MORNING)).toEqual('morning')
  })

  it('should return the expected formatted afternoon', () => {
    expect(formatTimeOfDay(AFTERNOON)).toEqual('afternoon')
  })

  it('should return the expected formatted afternoon', () => {
    expect(formatTimeOfDay(EVENING)).toEqual('evening')
  })
})
